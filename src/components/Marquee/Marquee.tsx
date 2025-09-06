import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import styles from "./style.module.scss";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 60 }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  const x = useMotionValue(0);

  useLayoutEffect(() => {
    if (!itemRef.current) return;

    const measure = () => {
      const w = Math.ceil(itemRef.current?.offsetWidth ?? 0);
      setItemWidth(w);
    };
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(itemRef.current);
    return () => ro.disconnect();
  }, [text]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isVisible || itemWidth === 0) return;

    const moveBy = (speed * delta) / 1000;
    let current = x.get() - moveBy;

    if (current <= -itemWidth) {
      current += itemWidth;
    }

    x.set(current);
  });

  return (
    <section className={styles.viewport} ref={containerRef}>
      <motion.div className={styles.track} style={{ x }}>
        <div className={styles.item} ref={itemRef}>
          <h1 className={styles.text}>{text}&nbsp;</h1>
        </div>
        <div className={styles.item} aria-hidden>
          <h1 className={styles.text}>{text}&nbsp;</h1>
        </div>
        <div className={styles.item} aria-hidden>
          <h1 className={styles.text}>{text}&nbsp;</h1>
        </div>
        <div className={styles.item} aria-hidden>
          <h1 className={styles.text}>{text}&nbsp;</h1>
        </div>
      </motion.div>
    </section>
  );
};

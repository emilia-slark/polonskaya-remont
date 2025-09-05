import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

interface MarqueeProps {
  text: string;
  speed?: number; // px/sec
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 120 }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

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

  const duration = itemWidth > 0 ? itemWidth / speed : 10;

  return (
    <section className={styles.viewport}>
      <motion.div
        className={styles.track}
        animate={{ x: [0, -itemWidth] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
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

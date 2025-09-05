import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./style.module.scss";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 80 }) => {
  const viewportRef = useRef<HTMLElement>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [currentTranslateX, setCurrentTranslateX] = useState<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const animationFrameRef = useRef<number>(0);
  const lastUpdateTimeRef = useRef<number>(0);
  const controls = useAnimation();

  const isInView = useInView(viewportRef, {
    margin: "0px",
    once: false,
  });

  const measureWidth = useCallback(() => {
    if (!itemRef.current) return;

    const width = Math.ceil(itemRef.current.offsetWidth);
    setItemWidth(width);
  }, []);

  const getCurrentTranslateX = useCallback(() => {
    if (!trackRef.current) return 0;

    const transform = trackRef.current.style.transform;
    if (!transform || !transform.includes("translateX")) return 0;

    const match = transform.match(/translateX\(([^)]+)px\)/);
    return match ? parseFloat(match[1]) : 0;
  }, []);

  const startAnimation = useCallback(async () => {
    if (itemWidth === 0) return;

    const duration = itemWidth / speed;

    await controls.start({
      x: [currentTranslateX, currentTranslateX - itemWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration:
            duration * (1 - (currentTranslateX % itemWidth) / itemWidth),
          ease: "linear",
        },
      },
    });
  }, [controls, itemWidth, speed, currentTranslateX]);

  const stopAnimation = useCallback(async () => {
    const currentX = getCurrentTranslateX();
    setCurrentTranslateX(currentX);

    await controls.stop();
    await controls.set({ x: currentX });
  }, [controls, getCurrentTranslateX]);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isInView, startAnimation, stopAnimation]);

  useEffect(() => {
    if (!itemRef.current) return;

    measureWidth();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserverRef.current = new ResizeObserver(measureWidth);
      resizeObserverRef.current.observe(itemRef.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [measureWidth, text]);

  useEffect(() => {
    if (!isInView || !trackRef.current) return;

    const updatePosition = (time: number) => {
      if (time - lastUpdateTimeRef.current > 100) {
        setCurrentTranslateX(getCurrentTranslateX());
        lastUpdateTimeRef.current = time;
      }
      animationFrameRef.current = requestAnimationFrame(updatePosition);
    };

    animationFrameRef.current = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, getCurrentTranslateX]);

  const marqueeItems = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => (
      <div
        key={index}
        className={styles.item}
        ref={index === 0 ? itemRef : undefined}
        aria-hidden={index !== 0}
      >
        <h1 className={styles.text}>{text}&nbsp;</h1>
      </div>
    ));
  }, [text]);

  return (
    <section className={styles.viewport} ref={viewportRef}>
      <motion.div
        ref={trackRef}
        className={styles.track}
        animate={controls}
        initial={{ x: 0 }}
      >
        {marqueeItems}
      </motion.div>
    </section>
  );
};

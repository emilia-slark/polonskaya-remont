import { useKeenSlider } from "keen-slider/react";
import { useCallback, type ReactNode } from "react";
import { ArrowButton } from "@components";
import "keen-slider/keen-slider.min.css";
import style from "./styles.module.scss";

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 3,
          spacing: 20,
          // origin: "auto",
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 512px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
  });

  const prev = useCallback(() => {
    instanceRef.current?.prev();
  }, []);

  const next = useCallback(() => {
    instanceRef.current?.next();
  }, []);

  return (
    <section className={`section ${style.outContainer}`}>
      <div ref={sliderRef} className={`keen-slider`}>
        {children}
      </div>
      <div className={style.navWrapper}>
        <ArrowButton left onClick={prev} disabled={false} />
        <ArrowButton onClick={next} disabled={false} />
      </div>
    </section>
  );
};

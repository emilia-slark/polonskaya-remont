import { useKeenSlider } from "keen-slider/react";
import { useCallback, type ReactNode } from "react";
import { ArrowButton } from "@components";
import "keen-slider/keen-slider.min.css";
import style from "./styles.module.scss";

const idCarousel = "#carousel";

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

  // const location = useLocation();
  // ${location.hash === idCarousel && "attention-pulse"}
  return (
    <section className={`section ${style.outContainer}`} id={idCarousel}>
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

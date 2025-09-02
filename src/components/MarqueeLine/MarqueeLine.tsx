import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMemo } from "react";
import React from "react";
import style from "./style.module.scss";

interface MargueeLineProps {
  text: string;
}

const animation = { duration: 10000, easing: (t: number) => t };

export const MarqueeLine = React.memo(({ text }: MargueeLineProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  const runningLine = useMemo(() => new Array(3).fill(text), [text]);

  return (
    <div ref={ref} className={`${style.container} keen-slider`}>
      {runningLine.map((line, index) => (
        <span key={index} className={`${style.text} keen-slider__slide`}>
          {line}
        </span>
      ))}
    </div>
  );
});

// TODO Доделать адаптив

import type { CarouselItem } from "@types";
import styles from "./styles.module.scss";
import { getPublicAsset } from "@helpers";

interface CardUIProps {
  item: CarouselItem;
  className: string;
}

export const Card = ({ item, className }: CardUIProps) => (
  <article className={`${styles.container} ${className}`}>
    <div className={styles.imageContainer}>
      <img src={getPublicAsset(item.image)} alt="" loading="lazy" />
    </div>
    <div className={styles.textWrapper}>
      <p>{item.description}</p>
      <p>{item.location}</p>
    </div>
  </article>
);

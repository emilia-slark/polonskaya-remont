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
    <div className={styles.description}>
      <p>{item.description}</p>
    </div>
  </article>
);

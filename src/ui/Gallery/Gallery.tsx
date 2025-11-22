import { galleryItems } from "@constants";
import style from "./styles.module.scss";
import { getPublicAsset } from "@helpers";

export const Gallery = () => {
  return (
    <section className={`${style.wrapper} container section`}>
      <h3 className={style.title}>Будем рады видеть вас в&nbsp;соцсетях</h3>
      <div className={style.content}>
        {galleryItems.map((item, index) => (
          <img
            key={index}
            src={getPublicAsset(item)}
            alt={`Изображение из галереи ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      <a
        href="https://t.me/remontpolonskaya"
        target="_blank"
        className="redirect-link dark bg"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
    </section>
  );
};

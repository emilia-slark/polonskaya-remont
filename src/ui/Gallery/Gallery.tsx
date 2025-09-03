import { galleryItems, socialLinks } from "@constants";
import style from "./styles.module.scss";
import { getPublicAsset } from "@helpers";

export const Gallery = () => (
  <section className={`${style.wrapper} container section`}>
    <h3 className={style.title}>Будем рады видеть вас в&nbsp;соцсетях</h3>
    <div className={style.content}>
      {galleryItems.map((item) => (
        <img src={getPublicAsset(item)} alt="" loading="lazy" />
      ))}
    </div>
    <a
      href={socialLinks.Telegram}
      target="_blank"
      className="redirect-link dark bg"
    >
      Канал
    </a>
  </section>
);

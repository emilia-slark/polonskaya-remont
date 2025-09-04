import { ROUTES } from "@constants";
import styles from "./style.module.scss";
import { RedirectButton } from "@components";

export const BookSection = () => (
  <section className={`${styles.wrapper}`}>
    <div className={`container ${styles.content}`}>
      <img src="/main/book-section.webp" className={styles.image} />
      <div className={styles.description}>
        <h2>
          Забронируйте
          <br />
          Бесплатную
          <br />
          Консультацию
        </h2>
        <p>
          Продуманный интерьер — это&nbsp;отражение вашего характера.
          <br />
          Наши индивидуальные консультации помогут создать ваше&nbsp;идеальное
          пространство.
          <br />
          Запишитесь сегодня — и начните путь к&nbsp;своей&nbsp;мечте.
        </p>
        <RedirectButton
          to={`${ROUTES.ABOUT}#contact-us`}
          title="Записаться"
          dark
        />
      </div>
    </div>
  </section>
);

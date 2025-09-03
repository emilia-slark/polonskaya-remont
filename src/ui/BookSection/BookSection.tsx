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
          to={`https://wa.me/79013903946?text=Здравствуйте,%20хочу%20узнать%20по%20поводу%20ремонта`}
          title="Записаться"
          dark
        />
      </div>
    </div>
  </section>
);

// TODO Якорь

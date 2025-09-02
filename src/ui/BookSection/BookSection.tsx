import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { ROUTES } from "@constants";

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
          Продуманный интерьер — это отражение вашего характера.
          <br />
          Наши индивидуальные консультации помогут создать Ваше идеальное
          пространство.
          <br />
          Запишитесь сегодня — и начните путь к своей мечте.
        </p>
        <Link to={`${ROUTES.ABOUT}#contact-us`} className="redirect-link dark">
          Записаться
        </Link>
      </div>
    </div>
  </section>
);

// TODO Якорь

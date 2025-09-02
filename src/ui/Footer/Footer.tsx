import { socialLinks } from "@constants";
import styles from "./styles.module.scss";

export const Footer = () => (
  <footer>
    <div className={`container ${styles.content}`}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Социальные сети</h4>
          <nav className={styles.socialList}>
            {Object.entries(socialLinks).map(([network, link]) => (
              <a href={link as string}>{network}</a>
            ))}
          </nav>
        </div>
      </div>
      <img src="/logo-cropped.webp" className={styles.logo}></img>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Часы работы</h4>
          <div className={styles.socialList}>
            Понедельник — Пятница <p>09:00 - 20:00</p>
          </div>
        </div>
      </div>
    </div>
    <address>polonskaya.remont@gmail.com&ntsp;+ 7 (901) 390-39-46</address>
    Калининград
  </footer>
);

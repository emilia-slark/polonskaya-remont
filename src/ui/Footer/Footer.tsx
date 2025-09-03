import { socialLinks } from "@constants";
import styles from "./styles.module.scss";

export const Footer = () => (
  <footer>
    <div className={`container ${styles.content}`}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Социальные&nbsp;сети</h4>
          <nav className={styles.socialList}>
            {Object.entries(socialLinks).map(([network, link]) => (
              <a href={link as string} key={network}>
                {network}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <img src="/logo-cropped.webp" className={styles.logo}></img>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Часы&nbsp;работы</h4>
          <div className={styles.socialList}>
            Понедельник — Пятница <p>09:00 — 20:00</p>
          </div>
        </div>
      </div>
      <address className={styles.contacts}>
        <a href="mailto:polonskaya.remont@gmail.com">
          polonskaya.remont@gmail.com
        </a>
        <a href="tel:+79013903946">+7 (901) 390-39-46</a>
      </address>
    </div>
    <p className="city">Калининград 2025</p>
  </footer>
);

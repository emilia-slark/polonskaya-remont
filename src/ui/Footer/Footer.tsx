import styles from "./styles.module.scss";

export const Footer = () => (
  <footer>
    <div className={`container ${styles.content}`}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <p className={styles.footerTitle}>Социальные&nbsp;сети</p>
          <nav className={styles.socialList}>
            <a href="https://t.me/remontpolonskaya">
              <img src="/telegram.svg" loading="lazy" alt="telegram" />
              Telegram
            </a>
          </nav>
        </div>
      </div>
      <img
        src="/logo-cropped.webp"
        className={styles.logo}
        loading="lazy"
        alt="Логотип Polonskaya"
      />
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <p className={styles.footerTitle}>Часы&nbsp;работы</p>
          <div className={styles.socialList}>
            Понедельник — Пятница <span>09:00 — 20:00</span>
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

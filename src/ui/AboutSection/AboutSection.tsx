import styles from "./style.module.scss";

export const AboutSection = () => (
  <section className="section container">
    <div className={styles.content}>
      <div className={styles.description}>
        <h2>О нас</h2>
        <p>
          Погрузитесь в атмосферу элегантности, воспользовавшись нашими услугами
          по&nbsp;индивидуальному ремонту и&nbsp;дизайну интерьера, где&nbsp;каждая деталь
          отражает исключительное качество и&nbsp;неподвластную времени изысканность.
        </p>
        <p>
          Мы создаём интерьеры, где&nbsp;каждая деталь продумана до&nbsp;мелочей&nbsp;—&nbsp;с&nbsp;уважением к&nbsp;вашему стилю, пространству и&nbsp;времени. Без&nbsp;лишнего&nbsp;—&nbsp;только
          то, что&nbsp;делает ваш дом по-настоящему вашим.
        </p>
        <p>
          Оставьте заявку на&nbsp;бесплатную консультацию —&nbsp;вместе создадим
          пространство, в&nbsp;котором вам будет по-настоящему комфортно.
        </p>
      </div>
      <img src="/main/book-section.webp" className={styles.image} />
    </div>
  </section>
);

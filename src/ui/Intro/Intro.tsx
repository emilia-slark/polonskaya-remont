import styles from "./styles.module.scss";
import { ROUTES } from "@constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { RedirectButton } from "@components";

export const Intro = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className={`section ${styles.intro} `}>
      <div className="overlay">
        <motion.div
          className={`container ${styles.content}`}
          style={{ y: yContent }}
        >
          <div className={styles.wrapper}>
            <h1 className={`${styles.introTitle} ${styles.animatedIn}`}>
              <p>Создаем</p>
              <p>Пространство</p>
              <p>для Вашей</p>
              <div className="accent-calligraph-text">Гармонии</div>
            </h1>
            <div className={styles.animatedIn}>
              <RedirectButton to={ROUTES.ABOUT} title="Читать больше" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTES } from "@constants";
import { motion, useScroll, useTransform } from "framer-motion";

export const Intro = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className={`${styles.intro} section`}>
      <div className="overlay">
        <motion.div
          className={`container ${styles.content}`}
          style={{ y: yContent }}
        >
          <div className={styles.wrapper}>
            <h1 className={`${styles.introTitle} ${styles.animatedIn}`}>
              {/* Создаем Пространство <br />
              для Вашей <br /> */}
              <p>Создаем</p>
              <p>Пространство</p>
              <p>для Вашей</p>
              <div className="accent-calligraph-text">Гармонии</div>
            </h1>
            <div className={styles.animatedIn}>
              <Link to={ROUTES.ABOUT} className="redirect-link light">
                Читать больше
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// background-color: $accent-color-light;
// color: $accent-color-dark;

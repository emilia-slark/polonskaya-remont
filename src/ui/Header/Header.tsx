import { Link, NavLink } from "react-router-dom";
import { LABEL, ROUTES } from "@constants";
import styles from "./styles.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { BurgerButton } from "@components";
import { motion } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initRender = useRef<boolean>(true);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    initRender.current = false;
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={initRender.current ? { opacity: 0, y: -50, scale: 0 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={ROUTES.MAIN} className={styles.logoHeader}>
        POLONSKAYA | Ремонт и&nbsp;дизайн интерьера
      </Link>
      <nav

        className={`${styles.navMenu} ${isOpen ? styles.active : " "}`}
      >
        <div className={styles.navList}>
          <NavLink
            to={ROUTES.ABOUT}
            className={styles.navItem}
            onClick={handleClick}
          >
            {LABEL.HEADER.NAV_ABOUT}
          </NavLink>
          {/* <NavLink
            to={ROUTES.CONTACTS}
            className={styles.navItem}
            onClick={handleClick}
          >
            {LABEL.HEADER.NAV_CONTACTS}
          </NavLink> */}
        </div>
      </nav>
      <BurgerButton
        checked={isOpen}
        className={styles.menuButton}
        onClick={handleClick}
      />
    </motion.header>
  );
};

// TODO Стили под ссылки

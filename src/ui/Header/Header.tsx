"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LABEL, ROUTES } from "@constants";
import styles from "./styles.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { BurgerButton } from "@components";

interface HeaderProps {
  absolute?: boolean;
}

export const Header = ({ absolute }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initRender = useRef<boolean>(true);
  const pathname = usePathname();
  const isHomePage = pathname === ROUTES.MAIN;

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    initRender.current = false;
  }, []);

  return (
    <header className={`${styles.header} ${(absolute || isHomePage) && styles.mainPage}`}>
      <Link
        href={ROUTES.MAIN}
        className={styles.logoHeader}
        onClick={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        POLONSKAYA | Ремонт и&nbsp;дизайн интерьера
      </Link>
      <nav className={`${styles.navMenu} ${isOpen ? styles.active : " "}`}>
        <div className={styles.navList}>
          <Link
            href={ROUTES.ABOUT}
            className={styles.navItem}
            onClick={handleClick}
          >
            {LABEL.HEADER.NAV_ABOUT}
          </Link>
        </div>
      </nav>
      <BurgerButton
        checked={isOpen}
        className={styles.menuButton}
        onClick={handleClick}
      />
    </header>
  );
};

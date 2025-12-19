"use client";

import Link from "next/link";
import styles from "./style.module.scss";

interface RedirectButtonProps {
  to: string;
  title: string;
  dark?: boolean;
  backgroundColor?: boolean;
}

export const RedirectButton = ({
  to,
  title,
  dark,
  backgroundColor,
}: RedirectButtonProps) => (
  <Link
    href={to}
    className={`${styles.button} ${dark ? styles.dark : styles.light} ${
      backgroundColor ? styles.bg : " "
    }`}
  >
    {title}
  </Link>
);

import { NavLink } from "react-router-dom";
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
  <NavLink
    to={to}
    target="_top"
    className={`${styles.button} ${dark ? styles.dark : styles.light} ${
      backgroundColor ? styles.bg : " "
    }`}
  >
    {title}
  </NavLink>
);

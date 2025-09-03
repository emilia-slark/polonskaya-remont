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
  <a
    href={to}
    target="_top"
    className={`${styles.button} ${dark ? styles.dark : styles.light} ${
      backgroundColor ? styles.bg : " "
    }`}
  >
    {title}
  </a>
);

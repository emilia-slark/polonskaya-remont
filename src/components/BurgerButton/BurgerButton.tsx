import React from "react";
import styles from "./style.module.scss";

interface BurgerButtonProps {
  onClick: () => void;
  checked: boolean;
  className?: string;
}

export const BurgerButton = React.memo(
  ({ onClick, checked, className }: BurgerButtonProps) => (
    <div className={className}>
      <input
        type="checkbox"
        id={styles.button}
        checked={checked}
        onChange={onClick}
         
      />
      <label htmlFor={styles.button} className={styles.label}>
        <span></span>
        <span></span>
      </label>
    </div>
  )
);

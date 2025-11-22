import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

interface RedirectButtonProps {
	to: string;
	title: string;
	dark?: boolean;
	variant?: 'light' | 'dark';
}

export const RedirectButton = ({
	to,
	title,
	dark,
	variant = 'dark'
}: RedirectButtonProps) => (
	<NavLink
		to={to}
		target="_top"
		className={`${styles.button} ${dark ? styles.dark : styles.light} ${
			variant === 'dark' ? styles.bg : ' '
		}`}
	>
		{title}
	</NavLink>
);

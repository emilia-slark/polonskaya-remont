import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

interface RedirectButtonProps {
	to: string;
	title: string;
	variant?: 'light' | 'dark';
}

export const RedirectButton = ({
	to,
	title,
	variant = 'dark'
}: RedirectButtonProps) => (
	<NavLink
		to={to}
		target="_top"
		className={`${styles.button} ${variant === 'dark' ? styles.dark : styles.light} ${
			variant === 'dark' ? styles.bg : ' '
		}`}
	>
		{title}
	</NavLink>
);

import { Link, NavLink } from 'react-router-dom';
import { publicRoutes } from '@constants';
import styles from './styles.module.scss';
import { useCallback, useState } from 'react';
import { BurgerButton } from '@ui';

interface HeaderProps {
	absolute?: boolean;
}

export const Header = ({ absolute }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	const closeMenu = useCallback(() => {
		setTimeout(() => {
			if (isOpen) setIsOpen(false);
		}, 20);
	}, [isOpen]);

	return (
		<header className={`${styles.header} ${absolute && styles.mainPage}`}>
			<Link
				to={publicRoutes.home.path}
				className={styles.logoHeader}
				onClick={closeMenu}
			>
				POLONSKAYA | Ремонт и&nbsp;дизайн интерьера
			</Link>
			<nav className={`${styles.navMenu} ${isOpen ? styles.active : ' '}`}>
				<div className={styles.navList}>
					<NavLink
						to={publicRoutes.about.path}
						className={styles.navItem}
						onClick={closeMenu}
					>
						{publicRoutes.about.label}
					</NavLink>
				</div>
			</nav>
			<BurgerButton
				checked={isOpen}
				className={styles.menuButton}
				onClick={toggleMenu}
			/>
		</header>
	);
};

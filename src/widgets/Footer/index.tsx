import { socialRoutes } from '@constants';
import styles from './styles.module.scss';
import { formatPhoneNumber } from '@helpers';

export const Footer = () => (
	<footer>
		<div className={`container ${styles.content}`}>
			<div className={styles.wrapper}>
				<div className={styles.social}>
					<p className={styles.footerTitle}>Социальные&nbsp;сети</p>
					<nav className={styles.socialList}>
						<a href={socialRoutes.telegram.path}>
							<img
								src="/telegram.svg"
								loading="lazy"
								alt="telegram"
							/>
							{socialRoutes.telegram.label}
						</a>
					</nav>
				</div>
			</div>
			<img
				src="/logo-cropped.webp"
				className={styles.logo}
				loading="lazy"
				alt="Логотип Polonskaya"
			/>
			<div className={styles.wrapper}>
				<div className={styles.social}>
					<p className={styles.footerTitle}>Часы&nbsp;работы</p>
					<div className={styles.socialList}>
						Понедельник — Пятница <span>09:00 — 20:00</span>
					</div>
				</div>
			</div>
			<address className={styles.contacts}>
				<a href={`mailto:${socialRoutes.mail.path}`}>
					{socialRoutes.mail.path}
				</a>
				<a href={`tel:${socialRoutes.phone.path}`}>
					{formatPhoneNumber(socialRoutes.phone.path)}
				</a>
			</address>
		</div>
		<p className="city">Калининград 2026</p>
	</footer>
);

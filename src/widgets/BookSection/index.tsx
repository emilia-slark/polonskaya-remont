import styles from './styles.module.scss';
import { RedirectButton } from '@ui';
import { publicRoutes } from '@constants';

export const BookSection = () => (
	<section className={`${styles.wrapper}`}>
		<div className={`container ${styles.content}`}>
			<img
				src="/main/book-section.webp"
				className={styles.image}
				alt="Элемент дизайна интерьера"
			/>
			<div className={styles.description}>
				<h2>
					Забронируйте
					<br />
					Бесплатную
					<br />
					Консультацию
				</h2>
				<p>
					Продуманный интерьер — это&nbsp;отражение вашего характера.
					<br />
					Наши индивидуальные консультации помогут создать ваше&nbsp;идеальное
					пространство.
					<br />
					Запишитесь сегодня — и начните путь к&nbsp;своей&nbsp;мечте.
				</p>
				<RedirectButton
					to={`${publicRoutes.about.path}#contact-us`}
					title="Записаться"
					variant="dark"
				/>
			</div>
		</div>
	</section>
);

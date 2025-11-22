import styles from './styles.module.scss';
import { ROUTES } from '@constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RedirectButton } from '@components';

export const Intro = () => {
	const { scrollY } = useScroll();
	const yContent = useTransform(scrollY, [0, 500], [0, -200]);

	return (
		<section className={`section ${styles.wrapper} `}>
			<div className="overlay">
				<motion.div
					className={`container ${styles.content}`}
					style={{ y: yContent }}
				>
					<h1 className={`${styles.introTitle} ${styles.fadeInDown}`}>
						<span>Создаем</span>
						<span>Пространство</span>
						<span>для Вашей</span>
						<div className={styles.svgContainer}>
							<img
								src="/main/harmony-decorated.svg"
								alt="Гармонии"
								className={styles.harmonySvg}
							/>
						</div>
					</h1>
					<div className={styles.fadeInDown}>
						<RedirectButton
							to={ROUTES.ABOUT}
							title="Читать больше"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

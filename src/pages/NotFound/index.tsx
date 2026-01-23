import { PageTransition } from '@widgets';
import styles from './styles.module.scss';

export const NotFoundPage = () => (
	<PageTransition>
		<main className={`${styles.wrapper} container`}>
			<h1 className={styles.title}>Такая страница не найдена.</h1>
		</main>
	</PageTransition>
);

import { galleryItems, socialRoutes } from '@constants';
import styles from './styles.module.scss';
import { getPublicAsset } from '@helpers';
import { RedirectButton } from '@ui';

export const Gallery = () => {
	return (
		<section className={`${styles.wrapper} container section`}>
			<h3 className={styles.title}>Будем рады видеть вас в&nbsp;соцсетях</h3>
			<div className={styles.content}>
				{galleryItems.map((item, index) => (
					<img
						key={index}
						src={getPublicAsset(item)}
						alt={`Изображение из галереи ${index + 1}`}
						loading="lazy"
					/>
				))}
			</div>
			<RedirectButton
				to={socialRoutes.telegram.path}
				title={socialRoutes.telegram.label}
				variant="dark"
			/>
			{/* <a
				href={socialRoutes.telegram.path}
				target="_blank"
				className="redirect-link dark bg"
				rel="noopener noreferrer"
			>
				{socialRoutes.telegram.label}
			</a> */}
		</section>
	);
};

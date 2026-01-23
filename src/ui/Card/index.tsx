import styles from './styles.module.scss';
import { getPublicAsset } from '@helpers';

export interface CarouselItem {
	image: string;
	description: string;
	location: string;
}

interface CardUIProps {
	item: CarouselItem;
	className: string;
}

export const Card = ({ item, className }: CardUIProps) => (
	<article className={`${styles.container} ${className}`}>
		<div className={styles.imageContainer}>
			<img
				src={getPublicAsset(item.image)}
				alt={item.description}
				loading="lazy"
			/>
		</div>
		<div className={styles.textWrapper}>
			<p>{item.description}</p>
			<p>{item.location}</p>
		</div>
	</article>
);

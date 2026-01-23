import { socialRoutes } from '@constants';
import styles from './styles.module.scss';
import { formatPhoneNumber } from '@helpers';

export const FailureRequest = () => (
	<div>
		<div>К сожалению, не&nbsp;удалось отправить заявку.</div>
		<div>
			Пожалуйста, попробуйте еще раз или свяжитесь с&nbsp;нами напрямую
			по&nbsp;следующим контактам:
			<ul className={styles.list}>
				<li>
					<a
						className={styles.link}
						href={socialRoutes.telegram.path}
					>
						{socialRoutes.telegram.label}
					</a>
				</li>
				<li>
					<a
						className={styles.link}
						href={`mailto:${socialRoutes.mail.path}`}
					>
						{socialRoutes.mail.path}
					</a>
				</li>
				<li>
					<a
						className={styles.link}
						href={`tel:${socialRoutes.phone.path}`}
					>
						{formatPhoneNumber(socialRoutes.phone.path)}
					</a>
				</li>
			</ul>
		</div>
		<div>Мы будем рады помочь!</div>
	</div>
);

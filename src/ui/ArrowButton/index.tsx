import styles from './styles.module.scss';

interface ArrowButtonProps {
	onClick: () => void;
	disabled: boolean;
	direction: 'left' | 'right';
}

export const ArrowButton = ({
	direction,
	disabled,
	onClick
}: ArrowButtonProps) => (
	<button
		aria-label={direction === 'left' ? 'Previous' : 'Next'}
		className={`${styles.nav} ${direction === 'left' ? styles.prev : styles.next}`}
		onClick={onClick}
		disabled={disabled}
	>
		<svg
			className={styles.arrowWrapper}
			viewBox="0 0 44 18"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{direction === 'left' && (
				<>
					<path
						d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116"
						strokeWidth="2"
						fill="none"
						stroke="white"
					></path>
					<path
						d="M42.8633 9.18125L3.37868 9.18125"
						strokeWidth="2"
						fill="none"
						stroke="white"
					></path>
				</>
			)}

			{direction === 'right' && (
				<>
					<path
						d="M34.0935 1.39116L41.8779 9.17556L34.0935 16.96"
						strokeWidth="2"
						fill="none"
						stroke="white"
					></path>
					<path
						d="M1.13672 9.18125L40.6213 9.18125"
						strokeWidth="2"
						fill="none"
						stroke="white"
					></path>
				</>
			)}
		</svg>
	</button>
);

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import styles from './styles.module.scss';

interface ModalProps {
	title: string;
	children: React.ReactNode;
	onClose: () => void;
	isOpen?: boolean;
	delay?: number;
}

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 }
};

const modalVariants = {
	hidden: {
		opacity: 0,
		y: 50
	},
	visible: {
		opacity: 1,

		y: 0,
		transition: {
			type: 'spring',
			damping: 25,
			stiffness: 300,
			duration: 0.3
		}
	},
	exit: {
		opacity: 0,
		y: 50,
		transition: {
			duration: 0.2
		}
	}
};

export const Modal: React.FC<ModalProps> = ({
	title,
	children,
	onClose,
	isOpen = true,
	delay = 0
}) => {
	const modalRoot = document.getElementById('modal');
	const modalTitleId = 'modal-title';

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscapeKey);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (isOpen && delay && delay > 0) {
			const timer = setTimeout(() => {
				onClose();
			}, delay);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [isOpen, delay, onClose]);

	if (!modalRoot) return null;

	return ReactDOM.createPortal(
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					className={styles.modalOverlay}
					onClick={e => e.target === e.currentTarget && onClose()}
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.2 }}
					data-testid="modal-overlay"
				>
					<motion.div
						className={styles.modal}
						variants={modalVariants as Variants}
						initial="hidden"
						animate="visible"
						exit="exit"
						role="dialog"
						aria-modal
						aria-labelledby={modalTitleId}
					>
						<div className={styles.modalHeader}>
							<h2
								id={modalTitleId}
								className={styles.modalTitle}
							>
								{title}
							</h2>
							<button
								className={styles.closeButton}
								onClick={onClose}
								aria-label="Close modal"
							>
								×
							</button>
						</div>
						<div
							className={styles.modalContent}
							aria-live="polite"
							aria-atomic="true"
						>
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		modalRoot
	);
};

import { useCallback, useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './styles.module.scss';
import { FailureRequest, Modal } from '@ui';
import { useLocation } from 'react-router-dom';
import { sendContactForm, type ContactFormData } from '@api';

const idForm = 'contact-us';

interface FormState {
	status: 'success' | 'error' | 'idle' | 'pending';
	message: string;
}

const initialState: FormState = {
	status: 'idle',
	message: ''
};

async function submitAction(
	previousState: FormState,
	formData: FormData
): Promise<FormState> {
	const data: ContactFormData = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
		message: formData.get('message') as string
	};

	try {
		await sendContactForm(data);
		return { status: 'success', message: 'Заявка успешно отправлена.' };
	} catch (error) {
		if (error instanceof Error) {
			return { status: 'error', message: error.message };
		}
		return { status: 'error', message: 'Произошла неизвестная ошибка' };
	}
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className={styles.submitButton}
		>
			{pending ? 'Пытаемся записаться...' : 'Отправить'}
		</button>
	);
}

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction] = useActionState(submitAction, initialState);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const location = useLocation();

	const handleClose = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	useEffect(() => {
		if (state.status === 'success' || state.status === 'error') {
			setIsModalOpen(true);
		}
		if (state.status === 'success') {
			formRef.current?.reset();
		}
	}, [state]);

	useEffect(() => {
		if (location.hash === `#${idForm}`) formRef.current?.scrollIntoView();
	}, [location.hash]);

	return (
		<>
			<section
				className={`${styles.wrapper} section`}
				id={idForm}
			>
				<div className={`${styles.content} container`}>
					<div className={styles.description}>
						<h2>Связаться с&nbsp;нами</h2>
						<p>
							Укажите информацию, и мы свяжемся с&nbsp;Вами в&nbsp;ближайшее
							время.
						</p>
					</div>
					<form
						id="form"
						className={styles.form}
						action={formAction}
						ref={formRef}
					>
						<fieldset>
							<label htmlFor="name">Имя</label>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="off"
								required
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="email">Электронная почта</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="phone">Телефон</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								autoComplete="tel"
								required
							/>
						</fieldset>
						<fieldset>
							<label htmlFor="message">Сообщение</label>
							<textarea
								id="message"
								name="message"
							/>
						</fieldset>
						<SubmitButton />
					</form>
				</div>
			</section>
			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				title={state.status === 'success' ? 'Успешно' : 'Ошибка'}
				delay={state.status === 'success' ? 3000 : 0}
			>
				{state.status === 'success' ? state.message : <FailureRequest />}
			</Modal>
		</>
	);
};

import type { ContactFormData } from './types';

export const sendContactForm = async (data: ContactFormData) => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...data,
			access_key: import.meta.env.VITE_API_TOKEN
		})
	});

	if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`);
	}

	const result = await response.json();
	return result;
};

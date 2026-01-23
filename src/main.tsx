import { StrictMode } from 'react';
import { App } from '@widgets';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import './styles/scss/global.scss';

const isDev = import.meta.env.DEV;

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
	isDev ? (
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>
	) : (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
);

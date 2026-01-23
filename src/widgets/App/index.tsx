import { Route, Routes } from 'react-router-dom';

import { AboutPage, MainPage, NotFoundPage } from '@pages';
import { Layout } from '@widgets';
import { publicRoutes } from '@constants';

export function App() {
	return (
		<>
			<Routes>
				<Route
					path={publicRoutes.home.path}
					element={<Layout />}
				>
					<Route
						index
						element={<MainPage />}
					/>
					<Route
						path={publicRoutes.about.path}
						element={<AboutPage />}
					/>
					<Route
						path="*"
						element={<NotFoundPage />}
					/>
				</Route>
			</Routes>
		</>
	);
}

import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from '@widgets';
import { AnimatePresence } from 'framer-motion';

export const Layout = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<>
			<Header absolute={isHomePage} />
			<main>
				<AnimatePresence mode="sync">
					<Outlet />
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

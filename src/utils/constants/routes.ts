export const publicRoutes = {
	home: {
		path: '/',
		label: 'Главная'
	},
	about: {
		path: '/about',
		label: 'О нас'
	}
	// services: {
	// 	path: '/services',
	// 	label: 'Услуги'
	// },
	// portfolio: {
	// 	path: '/portfolio',
	// 	label: 'Портфолио'
	// },
	// contact: {
	// 	path: '/contact',
	// 	label: 'Контакты'
	// }
} as const;

// export const privateRoutes = {
// 	dashboard: {
// 		path: '/dashboard',
// 		label: 'Панель управления'
// 	},
// 	profile: {
// 		path: '/profile',
// 		label: 'Профиль'
// 	}
// } as const;

export const allRoutes = {
	...publicRoutes
	// ...privateRoutes
} as const;

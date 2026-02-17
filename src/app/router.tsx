import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './main-layout'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <>Home</>,
			},
			{
				path: '/playground',
				element: <h1>Playground</h1>,
			},
			{
				path: '*',
				element: <h1>404</h1>,
			},
		],
	},
])

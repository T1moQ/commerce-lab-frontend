import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './main-layout'
import { HomePage } from '@/pages/home'
import { PlaygroundPage } from '@/pages/playground'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/playground',
				element: <PlaygroundPage />,
			},
			{
				path: '*',
				element: <h1>404</h1>,
			},
		],
	},
])

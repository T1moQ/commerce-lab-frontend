import { useEffect, type FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const MainLayout: FC = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	}, [location.pathname])
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './main-layout'
import { HomePage } from '@/pages/home'
import { ProductPage, ProductsPage } from '@/pages/products'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:slug',
        element: <ProductPage />
      },
      {
        path: '*',
        element: <main>404</main>
      }
    ]
  }
])

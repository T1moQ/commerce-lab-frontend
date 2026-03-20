import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './main-layout'
import { HomePage } from '@/pages/home'
import {
  ProductCreatePage,
  ProductEditPage,
  ProductPage,
  ProductsPage
} from '@/pages/products'

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
        path: '/products/:slug/edit',
        element: <ProductEditPage />
      },
      {
        path: '/products/create',
        element: <ProductCreatePage />
      },
      {
        path: '*',
        element: <main>404</main>
      }
    ]
  }
])

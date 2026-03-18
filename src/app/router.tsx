import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './main-layout'
import { HomePage } from '@/pages/home'
import { ProductPage, ProductsPage } from '@/pages/products'
import { ProductCreatePage } from '@/pages/products/ui/product-create-page'
import { ProductEditPage } from '@/pages/products/ui/product-edit-page'

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

import { useProducts } from '@/entities/product/api/queries'
import { ProductsGrid } from '@/entities/product/ui/products-grid'
import type { FC } from 'react'

export const ProductsPage: FC = () => {
  const { data = [], isLoading, error } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <main className="flex flex-col justify-center items-center p-8">
      Playground page
      <ProductsGrid products={data} />
    </main>
  )
}

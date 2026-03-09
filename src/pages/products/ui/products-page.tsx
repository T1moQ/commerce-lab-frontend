import { useProducts } from '@/entities/product/api/queries'
import { ProductsGrid } from '@/entities/product/ui/products-grid'
import type { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

const PER_PAGE = 6

export const ProductsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawPage = Number(searchParams.get('page') ?? 1)
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage

  const { data, isLoading, error } = useProducts({ page, perPage: PER_PAGE })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <main className="flex flex-col justify-center items-center p-8">
      Playground page
      <ProductsGrid products={data?.items ?? []} />
    </main>
  )
}

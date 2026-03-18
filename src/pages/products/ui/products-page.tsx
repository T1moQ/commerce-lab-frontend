import { Button } from '@/components/ui/button'
import { useProducts } from '@/entities/product/api/queries'
import { ProductsGrid } from '@/entities/product/ui/products-grid'
import type { FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const PER_PAGE = 6

export const ProductsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawPage = Number(searchParams.get('page') ?? 1)
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage

  const { data, isLoading, error } = useProducts({ page, perPage: PER_PAGE })

  const products = data?.items ?? []
  const total = data?.total ?? 0
  const totalPages = Math.ceil(total / PER_PAGE)

  console.log(products)

  const navigate = useNavigate()

  const handlePrev = () => {
    if (page <= 1) return

    setSearchParams({
      page: String(page - 1)
    })
  }

  const handleNext = () => {
    if (page >= totalPages) return

    setSearchParams({
      page: String(page + 1)
    })
  }

  if (!data && isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <main className="flex flex-col justify-center items-center p-8">
      <div className="flex justify-between w-full">
        <h1 className="mb-6 text-2xl font-bold">Products page</h1>
        <Button onClick={() => navigate('/products/create')}>Create product</Button>
      </div>
      <ProductsGrid products={products} />
      <div className="flex items-center mt-8 gap-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="rotate-180 cursor-pointer"
        >
          →
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={page >= totalPages}
          className="cursor-pointer"
        >
          →
        </button>
      </div>
    </main>
  )
}

import type { FC } from 'react'
import { ProductCard } from './product-card'
import type { Product } from '../../product/model/types'
import { useDeleteProduct } from '../api/mutation'
import { notify } from '@/shared/lib/toast'

type ProductsGridProps = {
  products: Product[]
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  const { mutate } = useDeleteProduct()

  const handleDelete = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        notify.warning('Product deleted')
      }
    })
  }

  return (
    <div className="p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          description={p.description ?? ''}
          slug={p.slug ?? ''}
          onDelete={() => handleDelete(p.id)}
        />
      ))}
    </div>
  )
}

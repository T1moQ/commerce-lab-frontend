import type { FC } from 'react'
import { ProductCard } from './product-card'
import type { Product } from '../../product/model/types'

type ProductsGridProps = {
  products: Product[]
  onDelete?: (id: string) => void
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products, onDelete }) => {
  return (
    <div className="p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          description={p.description ?? ''}
          slug={p.slug ?? ''}
          onDelete={onDelete ? () => onDelete(p.id) : undefined}
        />
      ))}
    </div>
  )
}

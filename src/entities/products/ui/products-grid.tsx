import type { FC } from 'react'
import { ProductCard } from './product-card'
import type { Product } from '../model/types'

type ProductsGridProps = {
  products: Product[]
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} title={p.title} desc={p.desc} />
      ))}
    </div>
  )
}

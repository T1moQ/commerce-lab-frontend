import type { GetProductQuery, GetProductsQuery } from '@/shared/api/gql/generated'
import type { Product } from './types'

type ProductGql = GetProductsQuery['products']['items'][number]
type ProductGqlFromDetail = NonNullable<GetProductQuery['product']>

export const mapFromDetail = (p: ProductGqlFromDetail): Product => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  description: p.description ?? ''
})

export const mapProduct = (p: ProductGql): Product => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  description: p.description ?? ''
})

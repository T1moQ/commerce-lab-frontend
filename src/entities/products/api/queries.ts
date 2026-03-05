import { useQuery } from '@tanstack/react-query'
import { getSdk, type GetProductsQuery } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import type { Product } from '../model/types'
import { productKeys } from '@/entities/model/query-keys'

const sdk = getSdk(graphqlClient)

type ProductGql = GetProductsQuery['products']['items'][number]

const mapProduct = (p: ProductGql): Product => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  desc: p.description ?? ''
})

export function useProducts() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: async () => {
      const res = await sdk.GetProducts()
      return res.products.items.map(mapProduct)
    }
  })
}

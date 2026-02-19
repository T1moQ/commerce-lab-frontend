import { useQuery } from '@tanstack/react-query'
import { getSdk, type GetProductsQuery } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'

const sdk = getSdk(graphqlClient)

export type Product = {
  id: string
  title: string
  slug?: string
  desc: string
}

type ProductGql = GetProductsQuery['products']['items'][number]

const mapProduct = (p: ProductGql): Product => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  desc: p.description ?? ''
})

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await sdk.GetProducts()
      return res.products.items.map(mapProduct)
    }
  })
}

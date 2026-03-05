import { productKeys } from '@/entities/product/model/query-keys'
import type { Product } from '@/entities/product/model/types'
import { getSdk } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { mapFromDetail, mapProduct } from '../model/mappers'

const sdk = getSdk(graphqlClient)

export function useProducts() {
  return useQuery({
    queryKey: productKeys.list(),
    queryFn: async () => {
      const res = await sdk.GetProducts()
      return res.products.items.map(mapProduct)
    }
  })
}

export function useProduct(slug: string) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: productKeys.detail(slug),
    queryFn: async () => {
      const res = await sdk.GetProduct({ slug })

      const p = res.product
      if (!p) throw new Error('Product not found')
      return mapFromDetail(p)
    },
    initialData: () => {
      const list = queryClient.getQueryData<Product[]>(productKeys.list())
      return list?.find((p) => p.slug === slug)
    },

    enabled: Boolean(slug)
  })
}

import { productKeys } from '@/entities/product/model/query-keys'
import { getSdk } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { mapFromDetail, mapProduct } from '../model/mappers'

const sdk = getSdk(graphqlClient)

type UseProductsParams = {
  page: number
  perPage: number
}

export function useProducts({ page, perPage }: UseProductsParams) {
  const limit = perPage
  const offset = (page - 1) * perPage

  return useQuery({
    queryKey: productKeys.list({ page, perPage }),
    queryFn: async () => {
      const res = await sdk.GetProducts({
        filter: {
          limit,
          offset
        }
      })
      return {
        items: res.products.items.map(mapProduct),
        total: res.products.total
      }
    },
    placeholderData: keepPreviousData
  })
}

export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: productKeys.detail(slug),
    queryFn: async () => {
      const res = await sdk.GetProduct({ slug })

      const p = res.product
      if (!p) throw new Error('Product not found')
      return mapFromDetail(p)
    },

    enabled: Boolean(slug)
  })
}

import { productKeys } from '@/entities/model/query-keys'
import type { Product } from '@/entities/products/model/types'
import { getSdk, type GetProductQuery } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const sdk = getSdk(graphqlClient)

type ProductGqlFromDetail = NonNullable<GetProductQuery['product']>

const mapFromDetail = (p: ProductGqlFromDetail): Product => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  desc: p.description ?? ''
})

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

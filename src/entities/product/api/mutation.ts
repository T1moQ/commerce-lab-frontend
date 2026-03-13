import { getSdk, type CreateProductInput } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productKeys } from '../model/query-keys'

const sdk = getSdk(graphqlClient)

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: CreateProductInput) => sdk.CreateProduct({ input }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: productKeys.list() })
  })
}

export function useDeleteProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      return sdk.DeleteProduct({ id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })
    }
  })
}

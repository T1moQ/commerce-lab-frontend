import { getSdk, type CreateProductInput } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'
import { useMutation } from '@tanstack/react-query'

const sdk = getSdk(graphqlClient)

export function useCreateProduct() {
  return useMutation({
    mutationFn: (input: CreateProductInput) => sdk.CreateProduct({ input })
  })
}

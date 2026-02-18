import { useQuery } from '@tanstack/react-query'
import { getSdk } from '@/shared/api/gql/generated'
import { graphqlClient } from '@/shared/api/graphql-client'

const sdk = getSdk(graphqlClient)

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => (await sdk.GetProducts()).products
  })
}

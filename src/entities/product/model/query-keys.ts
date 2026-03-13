export const productKeys = {
  all: ['products'] as const,
  list: (params?: { page: number; perPage: number }) =>
    [...productKeys.all, 'list', params] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  detail: (slug: string) => [...productKeys.all, 'detail', slug] as const
}

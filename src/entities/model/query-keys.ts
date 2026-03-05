export const productKeys = {
  all: ['products'] as const,
  list: () => [...productKeys.all, 'list'] as const,
  detail: (slug: string) => [...productKeys.all, 'detail', slug] as const
}

import { useProducts } from '@/entities/products/api/queries'
import type { FC } from 'react'

export const ProductsPage: FC = () => {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <main className="flex flex-col justify-center items-center p-8">
      Playground page
      <div className="p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data?.items.map((p) => (
          <div key={p.id} className="rounded-xl border p-4">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm opacity-70">{p.description}</div>
            <div className="mt-2 text-xs opacity-60">{p.slug}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

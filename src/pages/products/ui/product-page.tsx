import { useProduct } from '@/entities/product/api/queries'
import type { FC } from 'react'
import { useParams } from 'react-router-dom'

export const ProductPage: FC = () => {
  const slug = useParams().slug

  const { data, isLoading, error } = useProduct(slug ?? '')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data) return <div>Product not found</div>

  return (
    <main className="flex flex-col justify-center items-center">
      <h2>Product Detail Page</h2>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </main>
  )
}

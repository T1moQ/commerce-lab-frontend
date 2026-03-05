import { Button } from '@/components/ui/button'
import { useProductBySlug } from '@/entities/product/api/queries'
import type { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductPage: FC = () => {
  const slug = useParams().slug
  const navigate = useNavigate()
  const { data, isLoading, error } = useProductBySlug(slug ?? '')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (data === undefined || data === null) return <div>Product not found</div>

  return (
    <main className="flex flex-col justify-center items-center relative">
      <Button className="absolute top-2 left-2" onClick={() => navigate(-1)}>
        Back to list
      </Button>
      <h2>Product Detail Page</h2>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </main>
  )
}

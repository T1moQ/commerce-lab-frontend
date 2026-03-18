import { Button } from '@/components/ui/button'
import { useDeleteProduct } from '@/entities/product/api/mutation'
import { useProductBySlug } from '@/entities/product/api/queries'
import type { FC } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const ProductPage: FC = () => {
  const slug = useParams().slug
  const { data, isLoading, error } = useProductBySlug(slug ?? '')
  const { mutate } = useDeleteProduct()
  const navigate = useNavigate()

  const deleteHandler = () => {
    const ok = window.confirm('Delete this product?')
    if (!ok) return
    mutate(data?.id ?? '')
    navigate('/products')
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (data === undefined || data === null) return <div>Product not found</div>

  return (
    <main className="flex flex-col justify-center items-center relative">
      <Link to={'/products'}>
        <Button className="absolute top-2 left-2">Back to list</Button>
      </Link>
      <h2 className="text-2xl font-bold mb-8">Product Detail Page</h2>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="flex items-center gap-4">
        <Button className="mt-8 bg-red-900" onClick={deleteHandler}>
          Delete
        </Button>
        <Link to={`/products/${slug}/edit}`}>
          <Button className="mt-8 bg-gray-500">Edit</Button>
        </Link>
      </div>
    </main>
  )
}

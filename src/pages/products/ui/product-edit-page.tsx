import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useProductBySlug } from '@/entities/product/api/queries'
import { useUpdateProductAction } from '@/features/product/update-product'
import { useEffect, useState, type FC } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const ProductEditPage: FC = () => {
  const slug = useParams().slug
  const navigate = useNavigate()
  const { data, isLoading, error } = useProductBySlug(slug ?? '')
  const [newData, setNewData] = useState({
    title: '',
    description: ''
  })

  const { updateProduct, isPending } = useUpdateProductAction({
    onSuccess: (updatedSlug) => navigate(`/products/${updatedSlug}`)
  })

  useEffect(() => {
    if (data) {
      setNewData({
        title: data.title,
        description: data.description
      })
    }
  }, [data, setNewData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data) return <div>Product not found</div>

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    await updateProduct({
      id: data.id,
      title: newData.title,
      description: newData.description
    })
  }

  return (
    <main className="flex flex-col justify-center items-center relative">
      <Link to={'/products'}>
        <Button className="absolute top-2 left-2">Back to list</Button>
      </Link>
      <h2 className="text-2xl font-bold mb-8">Product Edit Page</h2>
      <form className="w-full max-w-sm gap-4" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="product-title">Product Title</FieldLabel>
            <Input
              id="product-title"
              type="text"
              value={newData.title}
              onChange={(e) => setNewData({ ...newData, title: e.target.value })}
            />
            <FieldDescription>Change product title</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="product-desc">Product Description</FieldLabel>
            <Input
              id="product-desc"
              type="text"
              value={newData.description}
              onChange={(e) => setNewData({ ...newData, description: e.target.value })}
            />
            <FieldDescription>Change product description</FieldDescription>
          </Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Saving...' : 'Save changes'}
          </Button>
        </FieldGroup>
      </form>
    </main>
  )
}

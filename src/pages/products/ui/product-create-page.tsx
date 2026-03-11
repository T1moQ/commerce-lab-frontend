import { Button } from '@/components/ui/button'
import { useCreateProduct } from '@/entities/product/api/mutation'
import type { FormValues } from '@/entities/product/model/types'
import { CreateProductForm } from '@/entities/product/ui/create-product-form'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCreatePage: FC = () => {
  const navigate = useNavigate()
  const { mutate, isPending, error } = useCreateProduct()

  const handleSubmit = (values: FormValues) => {
    const fixedSlug = values.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    mutate(
      {
        title: values.title,
        slug: values.slug,
        description: values.description
      },
      {
        onSuccess: () => {
          navigate(`/products/${fixedSlug}`)
        }
      }
    )
  }

  return (
    <main className="flex flex-col justify-center items-center p-8 relative">
      <Button className="absolute top-2 left-2" onClick={() => navigate(-1)}>
        <span className="rotate-180">→</span> Back to list
      </Button>
      <h1 className="mb-6 text-2xl font-bold">Add your own product</h1>
      <CreateProductForm submitFormToPage={handleSubmit} isPending={isPending} />

      {error ? <p className="mt-4 text-red-500">Something went wrong</p> : null}
    </main>
  )
}

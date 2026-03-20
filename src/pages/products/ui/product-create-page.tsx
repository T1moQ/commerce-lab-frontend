import { Button } from '@/components/ui/button'
import { useCreateProduct } from '@/entities/product/api/mutation'
import type { FormValues } from '@/entities/product/model/types'
import { CreateProductForm } from '@/entities/product/ui/create-product-form'
import { notify } from '@/shared/lib/toast'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCreatePage: FC = () => {
  const navigate = useNavigate()
  const { mutateAsync, isPending, error } = useCreateProduct()

  const handleSubmit = async (values: FormValues) => {
    const generatedSlug = values.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    if (!generatedSlug) {
      notify.error('Title is required to generate a slug')
      return
    }

    try {
      const response = await mutateAsync({
        title: values.title,
        slug: generatedSlug,
        description: values.description
      })

      notify.success('Product created')
      navigate(`/products/${response.createProduct.slug}`)
    } catch {
      notify.error('Failed to create product')
    }
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

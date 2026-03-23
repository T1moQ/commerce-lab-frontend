import { Button } from '@/components/ui/button'
import { CreateProductForm } from '@/entities/product/ui/create-product-form'
import { useCreateProductAction } from '@/features/product/create-product'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCreatePage: FC = () => {
  const navigate = useNavigate()

  const { createProduct, isPending, error } = useCreateProductAction()

  return (
    <main className="flex flex-col justify-center items-center p-8 relative">
      <Button className="absolute top-2 left-2" onClick={() => navigate(-1)}>
        <span className="rotate-180">→</span> Back to list
      </Button>
      <h1 className="mb-6 text-2xl font-bold">Add your own product</h1>
      <CreateProductForm submitFormToPage={createProduct} isPending={isPending} />

      {error ? <p className="mt-4 text-red-500">Something went wrong</p> : null}
    </main>
  )
}

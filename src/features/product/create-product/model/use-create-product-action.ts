import { useCreateProduct } from '@/entities/product/api/mutation'
import type { FormValues } from '@/entities/product/model/types'
import { notify } from '@/shared/lib/toast'
import { useNavigate } from 'react-router-dom'

export function useCreateProductAction() {
  const { mutateAsync, isPending, error } = useCreateProduct()
  const navigate = useNavigate()

  const createProduct = async (values: FormValues) => {
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

  return {
    createProduct,
    isPending,
    error
  }
}

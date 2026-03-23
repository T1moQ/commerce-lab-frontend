import { useUpdateProduct } from '@/entities/product/api/mutation'
import { notify } from '@/shared/lib/toast'

type UpdateProductActionOptions = {
  successMessage?: string
  errorMessage?: string
  onSuccess?: (slug: string) => void
  onError?: () => void
}

type UpdateProductPayload = {
  id: string
  title: string
  description: string
}

export function useUpdateProductAction(options?: UpdateProductActionOptions) {
  const { mutateAsync, isPending } = useUpdateProduct()

  const updateProduct = async ({ id, title, description }: UpdateProductPayload) => {
    try {
      const response = await mutateAsync({
        id,
        input: {
          title,
          description
        }
      })

      notify.info(options?.successMessage ?? 'Product updated')
      options?.onSuccess?.(response.updateProduct.slug)
      return true
    } catch {
      notify.error(options?.errorMessage ?? 'Failed to update product')
      options?.onError?.()
      return false
    }
  }

  return {
    updateProduct,
    isPending
  }
}

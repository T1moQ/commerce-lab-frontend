import { useDeleteProduct } from '@/entities/product/api/mutation'
import { notify } from '@/shared/lib/toast'

type DeleteProductActionOptions = {
  successMessage?: string
  errorMessage?: string
  onSuccess?: () => void
  onError?: () => void
}

export function useDeleteProductAction(options?: DeleteProductActionOptions) {
  const { mutateAsync, isPending } = useDeleteProduct()

  const deleteProduct = async (id: string) => {
    try {
      await mutateAsync(id)
      notify.warning(options?.successMessage ?? 'Product deleted')
      options?.onSuccess?.()
      return true
    } catch {
      notify.error(options?.errorMessage ?? 'Failed to delete product')
      options?.onError?.()
      return false
    }
  }

  return {
    deleteProduct,
    isPending
  }
}

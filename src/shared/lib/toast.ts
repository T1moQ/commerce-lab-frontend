import { toast } from 'sonner'

export const notify = {
  success: (message: string) => {
    toast.success(message, {
      className: 'bg-green-200'
    })
  },
  warning: (message: string) => {
    toast.warning(message, {
      className: 'bg-orange-300'
    })
  },
  info: (message: string) => {
    toast.info(message, {
      className: 'bg-indigo-200'
    })
  },
  error: (message: string) => {
    toast.error(message, {
      className: 'bg-red-300'
    })
  }
}

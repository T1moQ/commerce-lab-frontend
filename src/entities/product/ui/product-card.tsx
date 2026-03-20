import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { DeleteProductDialog } from './delete-product-dialog'

type ProductCardProps = {
  title: string
  description: string
  slug: string
  onDelete?: () => void
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  slug,
  onDelete
}) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Link to={`/products/${slug}`} className="flex items-start cursor-pointer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter>
        <DeleteProductDialog onDelete={() => onDelete} />
      </CardFooter>
    </Card>
  )
}

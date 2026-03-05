import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import type { FC } from 'react'

type ProductCardProps = {
  title: string
  desc: string
  onClick?: () => void
}

export const ProductCard: FC<ProductCardProps> = ({ title, desc, onClick }) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={onClick}>View detail</Button>
      </CardFooter>
    </Card>
  )
}

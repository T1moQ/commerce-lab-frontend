import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCreatePage: FC = () => {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col justify-center items-center p-8 relative">
      <Button className="absolute top-2 left-2" onClick={() => navigate(-1)}>
        <span className="rotate-180">→</span> Back to list
      </Button>
      <h1 className="mb-6 text-2xl font-bold">Add your own product</h1>
      <FieldGroup className="w-full max-w-sm gap-4">
        <Field>
          <FieldLabel htmlFor="product-title">Product Title</FieldLabel>
          <Input id="product-title" type="text" placeholder="Product title" />
          <FieldDescription>Create a title for your product</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="product-desc">Product Description</FieldLabel>
          <Textarea id="product-desc" placeholder="Product description" />
          <FieldDescription>Add a description for your product</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="product-slug">Product Slug</FieldLabel>
          <Input id="product-slug" type="text" placeholder="Product slug" />
          <FieldDescription>Slug will be created automatically</FieldDescription>
        </Field>
      </FieldGroup>
    </main>
  )
}

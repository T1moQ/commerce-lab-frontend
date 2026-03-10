import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { FC } from 'react'

export const CreateProductForm: FC = () => {
  return (
    <>
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
    </>
  )
}

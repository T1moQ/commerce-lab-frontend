import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState, type FC } from 'react'
import type { FormValues } from '../model/types'

type FormProps = {
  submitFormToPage: (values: FormValues) => void
  isPending?: boolean
}

export const CreateProductForm: FC<FormProps> = ({ submitFormToPage, isPending }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    slug: '',
    description: ''
  })

  const resetHandler = () => {
    setFormValues({
      title: '',
      slug: '',
      description: ''
    })
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    submitFormToPage(formValues)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm gap-4">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="product-title">Product Title</FieldLabel>
          <Input
            id="product-title"
            value={formValues.title}
            onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
            type="text"
            placeholder="Product title"
          />
          <FieldDescription>Create a title for your product</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="product-desc">Product Description</FieldLabel>
          <Textarea
            id="product-desc"
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
            placeholder="Product description"
          />
          <FieldDescription>Add a description for your product</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="product-slug">Product Slug</FieldLabel>
          <Input
            id="product-slug"
            value={formValues.slug}
            onChange={(e) => setFormValues({ ...formValues, slug: e.target.value })}
            type="text"
            placeholder="Product slug"
          />
          <FieldDescription>Slug will be created automatically</FieldDescription>
        </Field>
        <Field orientation={'horizontal'}>
          <Button type="reset" variant="outline" onClick={resetHandler}>
            Reset
          </Button>
          <Button type="submit">{isPending ? 'Creating...' : 'Create product'}</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

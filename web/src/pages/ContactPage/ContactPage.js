import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import {
  Label,
  TextField,
  TextAreaField,
  Submit,
  Form,
  FieldError,
  FormError,
  useForm
} from '@redwoodjs/forms'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [createContactFunction, { loading, error }] = useMutation(
    CREATE_CONTACT,
    {
      onCompleted: () => {
        toast.success('Thank you for your submission!')
        formMethods.reset()
      },
    }
  )

  const handleSubmit = (data) => {
    console.log(data)
    createContactFunction({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Form formMethods={formMethods} error={error} onSubmit={handleSubmit} config={{ mode: 'onBlur' }}>
        {/* <FormError error={error} wrapperClassName="form-error" /> */}
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          errorClassName="error"
          name="name"
          validation={{ required: true }}
        ></TextField>
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          errorClassName="error"
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
        ></TextField>
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          errorClassName="error"
          name="message"
          validation={{ required: true }}
        ></TextAreaField>
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

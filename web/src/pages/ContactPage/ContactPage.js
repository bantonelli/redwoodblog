import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Label,
  TextField,
  TextAreaField,
  Submit,
  Form,
  FieldError,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={handleSubmit} config={{mode: 'onBlur'}}>
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
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

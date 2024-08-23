import * as Yup from 'yup'
import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'

export const validationSchema = Yup.object({
  email: Yup.string().required('This field is required').matches(EMAIL_REG, 'This field is must email type'),
  password: Yup.string()
    .required('This field is required')
    .matches(PASSWORD_REG, 'The password is contain character, special character, number'),
  confirmPassword: Yup.string()
    .required('This field is required')
    .matches(PASSWORD_REG, 'The password is contain character, special character, number')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
})

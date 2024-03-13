import {FORM_ERROR} from 'final-form'
import memoize from "lodash.memoize";
import {
  PASSWORD_REGEXP,
  EMAIL_REGEXP,
} from './validations-utils'

type SuccessResponse = {
   data: {
     success: boolean
   }
}

export type CheckEmailResponse = SuccessResponse

type Validations =
  | 'required'
  | 'passwordSameAsEmail'
  | 'valid'
  | 'password'
  | 'email'
  | 'workEmail'

type ValidationResult = {
  type: Validations
  message?: string
}

export const PLAIN_VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  workEmail: 'Please use a valid work email address',
  password: 'Password has to be filled in required format',
  passwordSameAsEmail: 'Email cannot be your password',
}

export type OptionalParams = {
  minLength?: number
}

export const getValidationResult = (
  type: Validations,
  optional: OptionalParams = {}
): ValidationResult => {
  switch (type) {
    case 'required':
      return {type, message: PLAIN_VALIDATION_MESSAGES.required}
    case 'email':
      return {type, message: PLAIN_VALIDATION_MESSAGES.email}
    case 'workEmail':
      return {type, message: PLAIN_VALIDATION_MESSAGES.workEmail}
    case 'passwordSameAsEmail':
      return {type, message: PLAIN_VALIDATION_MESSAGES.passwordSameAsEmail}
    case 'password':
      return {type, message: PLAIN_VALIDATION_MESSAGES.password}
    default:
      return {type}
  }
}

const required = (value: string): ValidationResult => {
  if (!value || value.trim().length === 0) return getValidationResult('required')
  return getValidationResult('valid')
}

const validateEmail = memoize(async (
  email: string
): Promise<Response> => {
  const results = await fetch('/api/email-validation', {
    method: 'POST',
    body: JSON.stringify({email}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
   return results
})

const emailApiCheck = async (email: string): Promise<ValidationResult> => {
    try {
      const res = await (await validateEmail(email)).json()
      if (res.data.success) {
        return getValidationResult('valid')
      }
      return getValidationResult('workEmail')
    } catch (e) {
      if (e.response.status === 403) {
        return getValidationResult('email')
      }
    }
    
    return getValidationResult('valid')
  }

const email = (value: string): ValidationResult => {
  if (value.trim().length === 0) return getValidationResult('required')
  if (!EMAIL_REGEXP.test(value)) return getValidationResult('email')

  return getValidationResult('valid')
}

const password = (value: string): ValidationResult => {
  if (!PASSWORD_REGEXP.test(value)) return getValidationResult('password')
  return getValidationResult('valid')
}

const passwordSameAsEmail =
  (email?: string | null) =>
    (password: string): ValidationResult => {
      if (!email) {
        return getValidationResult('valid')
      }

      if (email === password) {
        return getValidationResult('passwordSameAsEmail')
      }

      return getValidationResult('valid')
    }

type ValidationFunctions = typeof email | typeof required | typeof email

type FormValidations = {
  [key: string]: Array<ValidationFunctions>
}

export const validateFormField =
  (validations: Array<(params: any) => any>) =>
    async (value?: string | null): Promise<string | undefined | null> => {
      for (const validationFunction of validations) {
        const validationResult = await validationFunction(value || '')
        if (validationResult.type !== 'valid') {
          return validationResult.message
        }
      }
      return null
    }

export const validateForm =
  (validations: FormValidations) =>
    async (formValues: {[key: string]: string}): Promise<any> => {
      const errors: {[key: string]: string | undefined} = {}
      for (const key in validations) {
        if (formValues[key] === undefined) {
          break
        }
        for (const validationFunction of validations[key]) {
          const validationResult = await validationFunction(formValues[key])
          if (validationResult.type !== 'valid') {
            errors[key] = validationResult.message
            break
          }
        }
      }

      return errors
    }

export const serverValidationErrors = (errors: {param: string, msg: string}[]) :{[key: string]: string | undefined}  => {
  const validationErrors: {[key: string]: string | undefined} = {}
  for (const error of errors) {
    let param = error.param
    if (param === 'form') {
      param = FORM_ERROR
    }
    validationErrors[param] = error.msg
  }
  return validationErrors
}

export const validations = {
  required,
  passwordSameAsEmail,
  password,
  email,
  emailApiCheck,
}

export default {
  validateForm,
  validations,
  validateFormField,
  PLAIN_VALIDATION_MESSAGES,
}

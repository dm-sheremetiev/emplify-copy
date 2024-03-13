import {sendHeraRequest} from '../../utils/hera'
import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      maxLength: 80,
    },
  },
  additionalProperties: false,
  required: ['email'],
}

const isValidEmail = async (email, freeProviderCheck = true) => {
  return sendHeraRequest('POST', '/0/www-api/email-validation', process.env.WWW_API_PATH_PREFIX, {
    email,
    freeProviderCheck,
  })
}

export default async function handler(req, res): Promise<any> {
    try {
      const validate = ajv.compile(schema)
      const valid = validate(req.body)
      if (!valid) throw validate.errors
      const {
        body: {email},
      } = req

      const response = await isValidEmail(
        email,
      )
      res.send(response)
    } catch (err) {
      res.status(500).json({ message: err })
  }
}

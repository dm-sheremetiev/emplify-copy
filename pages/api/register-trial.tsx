import {sendHeraRequest} from '../../utils/hera'
import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    first_name: {
      type: 'string',
      maxLength: 60,
    },
    last_name: {
      type: 'string',
      maxLength: 60,
    },
    email: {
      type: 'string',
      maxLength: 80,
    },
    country: {
      type: 'string',
      maxLength: 255,
    },
    industry: {
      type: 'string',
      maxLength: 255,
    },
    job_function_marketo_form: {
      type: 'string',
      maxLength: 255,
    },
    job_level_marketo_form: {
      type: 'string',
      maxLength: 255,
    },
    number_of_employees: {
      type: 'string',
      maxLength: 255,
    },
    company: {
      type: 'string',
      maxLength: 255,
    },
    password: {
      type: 'string',
      minLength: 128,
      maxLength: 128,
      description: 'Hashed password string',
    },
    phone: {
      type: 'string',
      maxLength: 40,
    },
    send_email_is_used: {
      type: 'boolean',
      default: false,
      description:
        'If the e-mail address is already used, user will receive an e-mail notification instead.',
    },
    send_invite: {
      type: 'boolean',
      default: false,
      description: 'Whether ACL should also send an e-mail invite.',
    },
    consent_to_processing: {
      type: 'boolean',
      default: false,
      description: 'Agree on receive marketing messages',
    },
    meta: {
      type: 'object',
      description: 'Lead metadata passed to Payment API / SF and ACL',
      default: {},
      properties: {
        sign_up_lp: {
          type: 'string',
        },
        sign_up_device: {
          type: 'string',
        },
        sign_up_variant: {
          type: 'string',
        },
        current_lead_source_detail: {
          type: 'string',
        },
        lead_source_type_current: {
          type: 'string'
        },
        current_campaign:{
          type: 'string',
        },
        utm_source: {
          type: 'string',
        },
        utm_campaign: {
          type: 'string',
        },
        utm_medium: {
          type: 'string',
        },
        utm_term: {
          type: 'string',
        },
        utm_content: {
          type: 'string',
        },
        utm_adgroup: {
          type: 'string',
        },
        utm_adname: {
          type: 'string',
        },
        utm_topic: {
          type: 'string',
        },
        utm_product: {
          type: 'string',
        },
        utm_creative: {
          type: 'string',
          maxLength: 255,
        },
        gclid: {
          type: 'string',
        },
      },
      additionalProperties: true,
    },
  },
  additionalProperties: true,
  required: ['first_name', 'last_name', 'email', 'password', 'country', 'company', 'phone'],
}

const createTrial = async (data) => {
  const payload = {
    first_name: data.first_name,
    last_name: data.last_name,
    country: data.country,
    company: data.company,
    phone: data.phone,
    email: data.email,
    industry: data.industry,
    job_function_marketo_form: data.job_function_marketo_form,
    job_level_marketo_form: data.job_level_marketo_form,
    number_of_employees: data.number_of_employees,
    password: data.password,
    send_invite: true,
    send_email_is_used: true,
    free_provider_check: true,
    consent_to_processing: data.consent_to_processing,
    meta: {
      ...data.meta,
      sign_up_lp: data.sign_up_lp,
      current_lead_source_detail: data.current_lead_source_detail,
      lead_source_type_current: data.lead_source_type_current,
      current_campaign: data.current_campaign,
      lead_source_current: data.lead_source_current
    },
  }

  const out = await sendHeraRequest('PUT', '/2/www-api/trial-form/register', process.env.WWW_API_PATH_PREFIX, payload)

  return out
}

export default async function handler(req, res): Promise<any> {
  try {
    const validate = ajv.compile(schema)
    const valid = validate(req.body)
    if (!valid) throw validate.errors
    const out = await createTrial(req.body)

    if(out.error && out.error.message !== 'Email is used') {
      throw new Error(out.error.message)
    }
    res.json(out)
  } catch (error) {
    const message = 'Failed to register trial'
    console.error(message, error)
    res.status(500).json({ message })
  }
}

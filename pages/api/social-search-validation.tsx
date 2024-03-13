import {sendHeraRequest} from '../../utils/hera'
import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    facebook: { type: 'string' },
    instagram: { type: 'string' },
    twitter: { type: 'string' },
    youtube: { type: 'string' },
    tiktok: { type: 'string' },
  },
  anyOf: [
    {
      required: ["facebook"],
      properties: {facebook: {type: "string"}}
    },
    {
      required: ["twitter"],
      properties: {twitter: {type: "string"}}
    },
    {
      required: ["instagram"],
      properties: {instagram: {type: "string"}}
    },
    {
      required: ["youtube"],
      properties: {youtube: {type: "string"}}
    },
  ],
  additionalProperties: false
}

async function socialProfile(network: string, socialpage: string) {
  const req = {
    query: socialpage,
    networks: [network],
    sources: ['social'],
    maxResults: 1,
    orderBy: 'fans',
    orderDir: 'desc',
  }

  try {
    const data = await sendHeraRequest('POST', '/0/www-api/social-search', process.env.WWW_API_PATH_PREFIX, req)
    if (data?.data?.length === 0) {
      console.log(`No data for ${network} in social sources`)
      return null
    }
    return data.data[0]
  } catch (e) {
    console.error(
      `Error thrown by social search of ${socialpage} in ${network} in social sources`
    )
    return null
  }
}

interface Socials {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

interface SocialExists {
  facebook?: {
    exists: boolean,
    link: string,
  };
  twitter?: {
    exists: boolean,
    link: string,
  };
  instagram?: {
    exists: boolean,
    link: string,
  };
  youtube?: {
    exists: boolean,
    link: string,
  };
  tiktok?: {
    exists: boolean,
    link: string,
  };
}

const searchSocialProfile = async (data: Socials): Promise<SocialExists> => {
  const profiles: SocialExists = {
    facebook: {
      exists: false,
      link: data.facebook,
    },
    twitter: {
      exists: false,
      link: data.twitter,
    },
    instagram: {
      exists: false,
      link: data.instagram,
    },
    youtube: {
      exists: false,
      link: data.youtube,
    },
    tiktok: {
      exists: false,
      link: data.tiktok,
    },
  }

  await Promise.all(
    Object.entries(profiles as any).map(async ([network, profile]: [string, { exists: boolean, link: string }]) => {
      if (profile.link) {
        const params = await socialProfile(network, profile.link)
        if (params && params.id) {
          profile.exists = true
        }
      }
      if (!profile.exists) {
        profile.link &&
        console.log(`Profile ${profile.link} does not exist on ${network}`)
      }
    })
  )

  return profiles
}

export default async function handler(req, res): Promise<any> {
  try {
    const validate = ajv.compile(schema)
    const valid = validate(req.body)
    if (!valid) throw validate.errors
    const out = await searchSocialProfile(req.body)

    res.json(out)
  } catch (error) {
    const message = 'Failed to find social profiles'
    console.error(message, error)
    res.status(500).json({ message })
  }
}

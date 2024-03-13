import axios from 'axios';

const getMktoAccessToken = async () : Promise<string> => {
  const client_id = process.env.MKTO_CLIENT_ID
  const client_secret = process.env.MKTO_CLIENT_SECRET
  const mktoDomain = `${process.env.MKTO_DOMAIN}/identity/oauth/token`

  const accessToken = await axios.post(mktoDomain + `?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`);

  return accessToken?.data?.access_token
}

export const createOrUpdateByEmail = async (email: string, userData) => {
  const accessToken = await getMktoAccessToken()

  const payload = {
    'action': 'createOrUpdate',
    'lookupField': 'email',
    'input': [{
      ...userData,
      'email': email,
    }]
  }

  const saveData = await axios.post(`${process.env.MKTO_DOMAIN}/rest/v1/leads.json?access_token=${accessToken}`, payload);

  return saveData

}

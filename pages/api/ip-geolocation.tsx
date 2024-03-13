import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const EXTREME_IP_KEY = 'sOWIAeESLIEHJJ9b8618'

interface ExtremeIPResponse {
  ipAddress: string
  xForwardedFor: string | string[]
  asn: string
  asnName: string
  asnOrg: string
  businessName: string
  businessWebsite: string
  city: string
  continent: string
  country: string
  countryCode: string
  ipName: string
  ipType: string
  isp: string
  lat: string
  lon: string
  org: string
  query: string
  region: string
  status: string
  timezone: string
  utcOffset: string
}

type ErrorResponse = {
  message: string
  status: number
  success: boolean
  ipAddress: string
  xForwardedFor: string | string[]
}

export const getGeolocationData = async (ip: string): Promise<ExtremeIPResponse> => {
  const data = await axios.get(`https://extreme-ip-lookup.com/json/${ip}?key=${EXTREME_IP_KEY}`)
  if (data.data) {
    return data.data as ExtremeIPResponse
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ExtremeIPResponse | ErrorResponse>): Promise<void> {
  let ipAddress = req.socket.remoteAddress
  const xForwardedFor = req.headers['x-forwarded-for']

  if (typeof xForwardedFor === 'string') {
    const splits = xForwardedFor.split(',')
    ipAddress = splits?.[0]
  }

  if (Array.isArray(xForwardedFor) && xForwardedFor.length > 0) {
    ipAddress = xForwardedFor[0]
  }

  const data = await getGeolocationData(ipAddress)
  if (data) {
    res.status(200).json({ ...data, ipAddress })
  } else {
    res.status(200).json({ ipAddress, status: 200, message: 'No data found!', success: false, xForwardedFor })
  }
}

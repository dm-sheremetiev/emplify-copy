// ONLY CAN BE USED WITH SSR

import axios from 'axios'
import sharp, { Sharp } from 'sharp'

export const placeholderBase64 = async (src: string, opts?: { resize?: number }): Promise<string> => {
  try {
    // * gets the image from url in the arraybuffer
    const response = await axios.get(src, {
      responseType: 'arraybuffer'
    })

    // * converts the arraybuffer to base64
    const buffer = Buffer.from(response.data, 'base64')
    const image = sharp(buffer)
    const metadata = await image.metadata()
    const { resize = 16 } = opts ?? {}

    const resized = image.resize(
      ...(Array.isArray(resize) ? resize : [Math.min(metadata.width, resize), Math.min(metadata.height, resize), { fit: 'inside' }])
    )

    // TODO: if metadata type is webp or image format, if it's svg/mp4 etc don't touch

    const output: Sharp = resized.webp({
      quality: 20,
      alphaQuality: 20,
      smartSubsample: true
    })

    const { data } = await output.toBuffer({ resolveWithObject: true })
    const base64 = Buffer.from(data).toString('base64')
    return `data:image/webp;base64, ${base64}`
  } catch (err) {
    return
  }
}

// TODO: add a function to add blockCollection items image urls with placeholder base 64 urls

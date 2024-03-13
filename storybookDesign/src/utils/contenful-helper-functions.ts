export const imageContentfulTransformUrl = (
  url: string | undefined,
  options?: { format?: string; quality?: number; width?: number; height?: number }
): string | undefined => {
  try {
    const { format = 'webp', quality = 100, width, height } = options ?? {}

    if (!url) {
      return ''
    }

    const newUrl = new URL(url)
    newUrl.searchParams.set('fm', format)
    newUrl.searchParams.set('q', quality.toFixed(0))
    if (width) {
      newUrl.searchParams.set('w', width.toFixed(0))
    }
    if (height) {
      newUrl.searchParams.set('h', height.toFixed(0))
    }
    return newUrl.toString()
  } catch (err) {
    return url
  }
}

export const imagePath = (url?: string): string => {
  if (!url) return ''

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  return process.env.API_URL + url
}

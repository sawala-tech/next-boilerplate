export const htmlToText = (html: string) => {
  return html.replace(/<[^>]*>/g, '')
}

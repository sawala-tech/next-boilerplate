/**
 * To locale date string
 * @param {*} options Object
 * @param {*} lang string
 * @returns string
 */
type LangOptions = 'id' | 'en'
interface IOptions {
  minute?: '2-digit' | 'numeric'
  hour?: '2-digit' | 'numeric'
  weekday?: 'long' | 'short' | 'narrow' | undefined
  year?: 'numeric' | '2-digit' | undefined
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined
  day?: 'numeric' | '2-digit' | undefined
}

const default_options: IOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' }

export const toLocaleDate = (date: Date | string | number, lang?: LangOptions, options?: IOptions): string => {
  const opts = { ...default_options, ...options }
  if (new Date(date)) {
    const dateString = new Date(date).toLocaleDateString(lang, opts)
    return dateString
  } else {
    return date.toString()
  }
}

const GET_KEYS = (lang: string) => {
  return require(`./${lang}/${lang}.json`)
}

const intl = (key: string, lang = 'id') => {
  const tr = GET_KEYS(lang)
  if (tr[key]) return tr[key]
  else return key
}

export { intl }
export default intl

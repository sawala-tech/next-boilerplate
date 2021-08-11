export const getBirthDate = (date: string) => {
  const birth_date = []
  const splited = date.split('/')
  const month = splited[0]
  const tgl = splited[1]
  const year = splited[2]
  birth_date.push(year + '-' + month + '-' + tgl)
  return birth_date[0]
}

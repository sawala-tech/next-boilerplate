/**
 * Pick object by key
 * @param {*} obj Object
 * @param {*} keys string
 * @returns Object
 */
export const pick = (obj: Array<string>, keys: string): Record<string, unknown> =>
  Object.keys(obj)
    .filter((i) => keys.includes(i))
    .reduce((acc: any, key: any) => {
      acc[key] = obj[key]
      return acc
    }, {})

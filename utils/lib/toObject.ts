/**
 * Convert array into an object
 * @param arr
 * @returns object
 */
export const toObject = (arr: any[]): Record<string, unknown> => {
  if (arr && arr[0] !== null) {
    return arr.reduce(function (result: any, item: any) {
      const key = Object.keys(item)[0]
      result[key] = item[key]
      return result
    }, {})
  } else {
    return {}
  }
}

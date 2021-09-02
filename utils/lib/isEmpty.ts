/**
 * check if object is empty
 * @param obj
 * @returns boolean
 */

export const isEmpty = (obj: Record<string, unknown>): boolean => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}

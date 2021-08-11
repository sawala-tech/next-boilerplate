/**
 * push array without duplicate value defined by identifier
 * @param arr Array
 * @param obj Object
 * @param identifier string
 * @returns Array
 */
const pushWithoutDuplicate = (arr: Array<any>, obj: any, identifier: any = 'id'): Record<number, any[]> => {
  const index = arr?.findIndex((e) => e[identifier] === obj[identifier])
  if (index === -1) {
    arr.push(obj)
  } else {
    arr[index] = obj
  }
  return arr
}
export default pushWithoutDuplicate

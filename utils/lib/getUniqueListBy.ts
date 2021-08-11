export interface getUniqueListByInterface {
  arr: Array<any>
  key: string
}
/**
 * Get Unique List of Array by key
 * @param arr Array<any>
 * @param key string
 */
export default function getUniqueListBy(arr: Array<any>, key: string): getUniqueListByInterface[] {
  return [...new Map(arr.map((item) => [item[key], item])).values()]
}

export interface ExtractInterface {
  array: Array<any>
  property: string
}
/**
 * Extract an object properties
 * @param array Array<any>
 * @param property string
 */
export default function Extract(array: Array<any>, property: string): ExtractInterface[] {
  return array.map((each) => each[property])
}

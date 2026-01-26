/**
 * Omit object
 * @param obj Record<string, string>
 * @param omitKey string
 * @returns Record<string, string>
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OmitType = (obj: Record<string, any>, key: string) => Record<string, string>

export const omit: OmitType = (obj, omitKey) => {
  return Object.keys(obj)
    .filter((key) => key != omitKey)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})
}

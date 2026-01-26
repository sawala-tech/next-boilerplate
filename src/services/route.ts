import { headers } from 'next/headers'

export async function getPathname(): Promise<string | null> {
  try {
    const headerList = await headers()
    const pathname = headerList.get('x-pathname')

    return pathname
  } catch (error) {
    console.error(error)

    return null
  }
}

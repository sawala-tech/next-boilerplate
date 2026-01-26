import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const NO_CALLBACK_PATTERNS = [/^\/$/, /^\/verify(\/.*)?$/, /^\/reset-password(\/.*)?$/, /^\/signin$/]

const getCallbackUrl = (origin: string, pathname: string): string => encodeURIComponent(`${origin}${pathname}`)
const redirectToSignin = (origin: string, pathname: string, includeCallback = true) => {
  if (!includeCallback) return NextResponse.redirect(`${origin}/signin`)

  return NextResponse.redirect(`${origin}/signin?callbackUrl=${getCallbackUrl(origin, pathname)}`)
}
const isNoCallbackRoute = (pathname: string): boolean => NO_CALLBACK_PATTERNS.some((pattern) => pattern.test(pathname))

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const origin =
    `${request.headers.get('x-forwarded-proto') || 'https'}://` +
    `${request.headers.get('x-forwarded-host') || request.headers.get('host')}`

  const session = await getToken({ req: request })
  const email = session?.user?.email ?? ''

  const noCallback = isNoCallbackRoute(pathname)
  const requiresTwoFa = !session?.user?.isTwoFaEnabled

  if (pathname === '/signin') {
    if (session) return NextResponse.redirect(`${origin}/`)

    return NextResponse.next()
  }

  if (!session) return redirectToSignin(origin, pathname, !noCallback)
  if (!email && NO_CALLBACK_PATTERNS.every((pattern) => !pattern.test(pathname))) {
    return redirectToSignin(origin, pathname, !noCallback)
  }
  if (pathname.startsWith('/verify/') && !requiresTwoFa) {
    return NextResponse.redirect(`${origin}/`)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|static|favicon.ico|invitation|site.webmanifest).*)']
}

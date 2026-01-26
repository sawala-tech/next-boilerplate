import 'next-auth'
import { User } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    refreshToken?: string
    token?: string
    tokenExpires?: number
    error?: string
    user: User['user']
  }
}

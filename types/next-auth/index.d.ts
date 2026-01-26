import 'next-auth'
import { DefaultSession, User } from 'next-auth'

declare module 'next-auth' {
  interface User {
    refreshToken?: string
    token?: string
    tokenExpires?: number
    error?: string
    user?: {
      regionAssignment: RegionAssignment
      isTemporaryPassword: boolean
      isTwoFaAuthenticated: boolean
      isTwoFaEnabled: boolean
      twoFaSecret: string
      id: number
      email: string
      provider: string
      socialId: string
      firstName: string
      phone: string
      lastName: string
      role: {
        id: number
        name: string
      }
      status: {
        id: number
        name: string
      }
      createdAt: string
      updatedAt: string
      deletedAt: string
    }
  }

  interface Session {
    refreshToken?: string
    token?: string
    tokenExpires?: number
    error?: string
    user: User['user'] & DefaultSession['user']
  }
}

import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'

import { authEmailLogin } from '@/restapi/auth/mutations'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Static Login',
      credentials: {
        identifier: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        twoFactorAuthenticationCode: { label: '2FA Code', type: 'text' }
      },
      async authorize(credentials) {
        const user = await authEmailLogin({
          email: credentials?.identifier,
          password: credentials?.password,
          twoFactorAuthenticationCode: credentials?.twoFactorAuthenticationCode
        })

        if (!user) {
          throw new Error('Kredensial tidak valid, silakan coba lagi')
        }

        return user
      }
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30
  },

  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true
      } else {
        return false
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      session.token = token.token as string
      session.refreshToken = token.refreshToken as string
      session.tokenExpires = token.tokenExpires as number
      session.user = token.user

      return session
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update' && session) {
        token.token = session.token
        token.refreshToken = session.refreshToken
        token.tokenExpires = session.tokenExpires
        if (session.user) token.user = session.user

        return token
      }

      if (user) {
        token.token = user.token
        token.refreshToken = user.refreshToken
        token.tokenExpires = user.tokenExpires
        token.user = user.user

        return token
      }

      return token
    }
  },

  events: {
    async signOut() {
      ;(await cookies()).delete('terms_accepted')
    }
  },

  pages: {
    signIn: '/signin'
  },

  secret: process.env.NEXTAUTH_SECRET,
  theme: { colorScheme: 'light' },
  debug: false
}

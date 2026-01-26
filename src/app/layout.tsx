import '@/styles/globals.css'

import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import NextTopLoader from 'nextjs-toploader'

import { Toaster } from '@/components/atoms/ui/sonner'
import { ClientProvider } from '@/components/providers/client'

import { siteMetadata } from '@/constants/index'

import { authOptions } from '@/services/auth'

export const metadata: Metadata = {
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`
  },
  description: siteMetadata.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NextTopLoader color="#f20b82" showSpinner={false} />
        <ClientProvider session={session}>{children}</ClientProvider>
        <Toaster richColors position="top-right" closeButton theme="light" className="pointer-events-auto" />
      </body>
    </html>
  )
}

'use client'

import moment from 'moment-timezone'
import 'moment/locale/id'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import { Fragment, useEffect } from 'react'
import { useNetworkState, useUpdateEffect } from 'react-use'
import { toast } from 'sonner'

import { useIsHydrated } from '@/hooks/useIsHydrated'

import api from '@/services/api'

import { SWRProvider } from './swr'

interface ClientProviderProps {
  children: React.ReactNode
  session: Session | null
}
export const ClientProvider: React.FC<ClientProviderProps> = ({ children, session }) => {
  const hydrated = useIsHydrated()
  const pathname = usePathname()
  const network = useNetworkState()
  moment.locale('id')
  moment.tz.setDefault('Asia/Jakarta')
  moment.updateLocale('id', {
    week: {
      dow: 1
    }
  })

  if (session?.token) {
    api.defaults.headers.Authorization = `Bearer ${session.token}`
  }

  useEffect(() => {
    NProgress.done()
  }, [pathname])

  useUpdateEffect(() => {
    if (network.previous && !network.online) {
      toast.warning('Your internet connection is lost')
    }
    if (!network.previous && network.online) {
      toast.success('Your internet connection is back')
    }
  }, [network])

  if (!hydrated) return null

  return (
    <Fragment>
      <SessionProvider session={session} refetchInterval={0}>
        <SWRProvider>{children}</SWRProvider>
      </SessionProvider>
    </Fragment>
  )
}

'use client'

import moment from 'moment-timezone'
import { SWRConfig } from 'swr'

import { fetcher } from '@/services/fetcher'

import 'moment/locale/id'

export const SWRProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  moment.locale('id')
  moment.tz.setDefault('Asia/Jakarta')
  moment.updateLocale('id', {
    week: {
      dow: 1
    }
  })

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        fetcher
      }}
    >
      {children}
    </SWRConfig>
  )
}

import { useMedia } from 'react-use'

import { useIsHydrated } from './useIsHydrated'

export const useIsDesktop = () => {
  const isDesktop = useMedia('(min-width: 1024px)')
  const isHydrated = useIsHydrated()

  return isHydrated ? isDesktop : false
}

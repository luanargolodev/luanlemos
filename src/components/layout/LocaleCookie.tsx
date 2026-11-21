'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { localeCookieName } from '@/i18n/config'
import { matchPathname } from '@/i18n/routing'

export function LocaleCookie() {
  const pathname = usePathname()

  useEffect(() => {
    const match = matchPathname(pathname)
    if (!match) return
    document.cookie = `${localeCookieName}=${match.locale}; path=/; max-age=31536000; samesite=lax`
  }, [pathname])

  return null
}

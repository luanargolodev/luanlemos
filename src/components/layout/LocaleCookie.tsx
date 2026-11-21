'use client'

import { useEffect } from 'react'

import { localeCookieName } from '@/i18n/config'

export function LocaleCookie({ locale }: { locale: string }) {
  useEffect(() => {
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`
  }, [locale])

  return null
}

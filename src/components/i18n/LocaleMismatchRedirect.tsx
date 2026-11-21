'use client'

import { useLayoutEffect } from 'react'

import { isLocale, localeCookieName } from '@/i18n/config'

function cookieLocale() {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${localeCookieName}=([^;]+)`),
  )
  return match?.[1]
}

export function LocaleMismatchRedirect() {
  useLayoutEffect(() => {
    const segments = window.location.pathname.split('/').filter(Boolean)
    const current = segments[0]
    if (!isLocale(current)) return

    const cookie = cookieLocale()
    const preferred = isLocale(cookie)
      ? cookie
      : navigator.language.toLowerCase().startsWith('en')
        ? 'en'
        : 'pt'

    if (preferred === current) return

    const rest = segments.slice(1).join('/')
    const target = `/${preferred}${rest ? `/${rest}` : ''}${window.location.search}`
    window.location.replace(target)
  }, [])

  return null
}

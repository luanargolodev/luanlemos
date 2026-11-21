import { NextResponse, type NextRequest } from 'next/server'

import { defaultLocale, isLocale, locales } from '@/i18n/config'

const BOT_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|telegrambot|discordbot|pinterest|redditbot|applebot|google-inspectiontool|semrush|ahrefs|petalbot|lighthouse|headlesschrome/i

function detectLocale(header: string | null) {
  if (!header) return defaultLocale

  const preferred = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 }
    })
    .toSorted((a, b) => b.q - a.q)

  for (const { tag } of preferred) {
    const primary = tag.split('-')[0]
    const match = locales.find((locale) => locale.code === primary)
    if (match) return match.code
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent') ?? ''

  // Any path without a supported locale belongs to the default locale.
  // This keeps unknown locales such as /xx on a localized 404 instead of
  // throwing from the root layout.
  if (pathname !== '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
      308,
    )
  }

  // Crawlers and previews always receive the default locale with a 200,
  // never a language-based redirect.
  if (BOT_PATTERN.test(userAgent)) {
    const response = NextResponse.rewrite(new URL(`/${defaultLocale}`, request.url))
    response.headers.set('Vary', 'User-Agent, Accept-Language, Cookie')
    return response
  }

  const cookie = request.cookies.get('NEXT_LOCALE')?.value
  const locale = isLocale(cookie)
    ? cookie
    : detectLocale(request.headers.get('accept-language'))

  const response = NextResponse.redirect(
    new URL(`/${locale}`, request.url),
    307,
  )
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  response.headers.set('Vary', 'User-Agent, Accept-Language, Cookie')
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export const config = {
  matcher: '/((?!pt(?:/|$)|en(?:/|$)|_next|api|.*\\..*).*)',
}

import { NextResponse, type NextRequest } from 'next/server'

import {
  defaultLocale,
  isLocale,
  localeCookieName,
  locales,
} from '@/i18n/config'
import { matchPathname } from '@/i18n/routing'

const BOT_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|telegrambot|discordbot|pinterest|redditbot|applebot|google-inspectiontool|semrush|ahrefs|petalbot|lighthouse|headlesschrome/i

function localeFromPrefix(pathname: string) {
  const first = pathname.split('/').filter(Boolean)[0] ?? ''
  const match = [...locales]
    .toSorted((a, b) => b.code.length - a.code.length)
    .find((locale) => first.startsWith(locale.code))
  if (!match || first === match.code) return null

  const rest = first.slice(match.code.length)
  return {
    locale: match.code,
    pathname: rest ? `/${rest}` : '/',
  }
}

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

function invalidPathRedirect(
  request: NextRequest,
  locale: string,
  pathname: string,
) {
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}${request.nextUrl.search}`, request.url),
    307,
  )
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent') ?? ''
  const isBot = BOT_PATTERN.test(userAgent)
  const cookie = request.cookies.get(localeCookieName)?.value

  if (pathname === '/') {
    // Crawlers and previews always receive the default locale with a 200,
    // never a language-based redirect.
    if (isBot) {
      const response = NextResponse.rewrite(
        new URL(`/${defaultLocale}`, request.url),
      )
      response.headers.set('Vary', 'User-Agent, Accept-Language, Cookie')
      return response
    }

    const locale = isLocale(cookie)
      ? cookie
      : detectLocale(request.headers.get('accept-language'))

    const response = NextResponse.redirect(
      new URL(`/${locale}`, request.url),
      307,
    )
    response.cookies.set(localeCookieName, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    response.headers.set('Vary', 'User-Agent, Accept-Language, Cookie')
    response.headers.set('Cache-Control', 'private, no-store')
    return response
  }

  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]

  if (isLocale(first)) {
    if (first !== cookie && !isBot && isLocale(cookie) && !matchPathname(pathname)) {
      const rest = segments.slice(1).join('/')
      return invalidPathRedirect(
        request,
        cookie,
        rest ? `/${rest}` : '/',
      )
    }
    return NextResponse.next()
  }

  // /ena, /ptx and similar malformed locale prefixes: keep the prefix.
  const prefix = localeFromPrefix(pathname)
  if (prefix) {
    return invalidPathRedirect(request, prefix.locale, prefix.pathname)
  }

  // No locale in the URL: use the current language, falling back to the
  // default locale for bots.
  const locale = isBot
    ? defaultLocale
    : isLocale(cookie)
      ? cookie
      : detectLocale(request.headers.get('accept-language'))

  return invalidPathRedirect(request, locale, pathname)
}

export const config = {
  matcher: [
    '/((?!pt(?:/|$)|en(?:/|$)|_next|api|.*\\..*).*)',
    '/pt/((?!sobre(?:/|$)|experiencia(?:/|$)|projetos(?:/|$)|projeto(?:/|$)|stack(?:/|$)|contato(?:/|$)|curriculo(?:/|$)|cv(?:/|$)|opengraph-image(?:/|$)|.*\\..*).*)',
    '/en/((?!about(?:/|$)|experience(?:/|$)|projects(?:/|$)|project(?:/|$)|stack(?:/|$)|contact(?:/|$)|resume(?:/|$)|cv(?:/|$)|opengraph-image(?:/|$)|.*\\..*).*)',
  ],
}

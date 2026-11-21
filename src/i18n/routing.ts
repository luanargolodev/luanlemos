import {
  defaultLocale,
  getLocaleMeta,
  locales,
  navRoutes,
  type LocaleMeta,
  type PageRouteKey,
  type RouteKey,
} from './config'

export interface RouteMatch {
  locale: string
  key: RouteKey
  params: Record<string, string>
}

function fillTemplate(template: string, params: Record<string, string>) {
  return template.replace(/:([a-zA-Z]+)/g, (_, name: string) => params[name] ?? '')
}

export function routePath(
  meta: LocaleMeta,
  key: RouteKey,
  params: Record<string, string> = {},
) {
  if (key === 'home') return ''
  if (key === 'resume') return meta.cvPath
  return fillTemplate(meta.routes[key], params)
}

export function href(
  locale: string,
  key: RouteKey,
  params: Record<string, string> = {},
) {
  const path = routePath(getLocaleMeta(locale), key, params)
  const prefix = `/${locale}`
  return path ? `${prefix}/${path}` : prefix
}

export function projectHref(locale: string, slug: string) {
  return href(locale, 'project', { slug })
}

export function cvHref(locale: string) {
  return href(locale, 'resume')
}

export function homeHref(locale: string) {
  return href(locale, 'home')
}

export function matchPathname(pathname: string): RouteMatch | null {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) {
    return { locale: defaultLocale, key: 'home', params: {} }
  }

  const locale = segments[0]
  if (!locales.some((item) => item.code === locale)) return null

  const meta = getLocaleMeta(locale)
  const rest = segments.slice(1)

  if (rest.length === 0) {
    return { locale, key: 'home', params: {} }
  }

  if (rest.join('/') === meta.cvPath) {
    return { locale, key: 'resume', params: {} }
  }

  for (const key of navRoutes) {
    const template = meta.routes[key]
    if (rest.join('/') === template) {
      return { locale, key, params: {} }
    }
  }

  const projectTemplate = meta.routes.project.split('/')
  if (
    rest.length === projectTemplate.length &&
    rest[0] === projectTemplate[0] &&
    rest[1]
  ) {
    return { locale, key: 'project', params: { slug: rest[1] } }
  }

  return null
}

export function navKeyForRoute(key: RouteKey): PageRouteKey | null {
  if (key === 'project') return 'projects'
  if (key === 'home' || key === 'resume') return null
  return key as PageRouteKey
}

export function navLinks(locale: string, labels: Record<PageRouteKey, string>) {
  return navRoutes.map((key) => ({
    key,
    href: href(locale, key),
    label: labels[key],
  }))
}

export function alternateLinks(
  key: RouteKey,
  params: Record<string, string> = {},
) {
  const links: Record<string, string> = {}
  for (const meta of locales) {
    links[meta.htmlLang] = href(meta.code, key, params)
  }
  links['x-default'] = href(defaultLocale, key, params)
  return links
}

export function isNavRoute(key: RouteKey): key is PageRouteKey {
  return navRoutes.includes(key as PageRouteKey)
}

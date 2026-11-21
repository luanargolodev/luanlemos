import rawConfig from './locales.json'

export type RouteKey =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'project'
  | 'stack'
  | 'contact'
  | 'resume'

export type PageRouteKey = Exclude<RouteKey, 'home' | 'project' | 'resume'>

export interface LocaleRoutes {
  about: string
  experience: string
  projects: string
  project: string
  stack: string
  contact: string
}

export interface LocaleMeta {
  code: string
  label: string
  shortLabel: string
  flag: 'br' | 'us'
  htmlLang: string
  ogLocale: string
  dateLocale: string
  dir: 'ltr' | 'rtl'
  cvPath: string
  cvFile: string
  routes: LocaleRoutes
}

export const defaultLocale: string = rawConfig.defaultLocale
export const locales: LocaleMeta[] = rawConfig.locales as LocaleMeta[]
export const localeCodes = locales.map((locale) => locale.code)

export function isLocale(value: string | null | undefined): value is string {
  return Boolean(value) && locales.some((locale) => locale.code === value)
}

export function getLocaleMeta(code: string | null | undefined): LocaleMeta {
  return (
    locales.find((locale) => locale.code === code) ??
    locales.find((locale) => locale.code === defaultLocale) ??
    locales[0]
  )
}

export const navRoutes: PageRouteKey[] = [
  'about',
  'experience',
  'projects',
  'stack',
  'contact',
]

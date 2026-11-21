import 'server-only'

import { defaultLocale, isLocale } from '@/i18n/config'

import defaultMessages, { type Messages } from './pt'

type Loader = () => Promise<{ default: Messages }>

const loaders = new Proxy({} as Record<string, Loader>, {
  get(_target, locale: string) {
    return () => import(`./${locale}.ts`)
  },
})

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function mergeWithFallback<T>(fallback: T, value: unknown): T {
  if (!isPlainObject(fallback) || !isPlainObject(value)) {
    return (value === undefined ? fallback : value) as T
  }

  const merged: Record<string, unknown> = { ...fallback }
  for (const [key, fallbackValue] of Object.entries(fallback)) {
    merged[key] = mergeWithFallback(fallbackValue, value[key])
  }
  return merged as T
}

export async function getMessages(locale: string): Promise<Messages> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale
  const loader = loaders[safeLocale] ?? loaders.pt
  const messages = (await loader()).default
  return mergeWithFallback(defaultMessages, messages)
}

export { interpolate } from '@/i18n/interpolate'
export type { Messages }

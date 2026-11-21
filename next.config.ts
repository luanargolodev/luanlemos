import type { NextConfig } from 'next'

import localeConfig from './src/i18n/locales.json'

const locales = localeConfig.locales

const cvRewrites = locales.map((locale) => ({
  source: `/${locale.code}/${locale.cvPath}`,
  destination: `/${locale.code}/cv`,
}))

const cvRedirects = locales.map((locale) => ({
  source: `/${locale.code}/cv`,
  destination: `/${locale.code}/${locale.cvPath}`,
  permanent: true,
}))

const legacyRoutes = [
  '/sobre',
  '/experiencia',
  '/projetos',
  '/projeto/:slug',
  '/stack',
  '/contato',
  '/curriculo',
]

const legacyRedirects = legacyRoutes.map((source) => ({
  source,
  destination: source === '/curriculo' ? '/pt/curriculo' : `/pt${source}`,
  permanent: true,
}))

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 82],
  },
  async redirects() {
    return [
      ...legacyRedirects,
      ...cvRedirects,
      { source: '/llms.txt', destination: '/pt/llms.txt', permanent: true },
      { source: '/cv.json', destination: '/pt/cv.json', permanent: true },
    ]
  },
  async rewrites() {
    return [...cvRewrites]
  },
}

export default nextConfig

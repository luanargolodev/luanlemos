import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { notFound } from 'next/navigation'

import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { BackToTop } from '@/components/layout/BackToTop'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { MotionEffects } from '@/components/motion/MotionEffects'
import { getContent } from '@/content'
import { getLocaleMeta, isLocale, locales } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'
import { buildJsonLd, metadataBase, serializeJsonLd } from '@/lib/seo'
import { site } from '@/data/site'

import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.code }))
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages(locale)

  return {
    metadataBase,
    title: {
      default: messages.meta.home.title,
      template: `%s — ${site.name}`,
    },
    description: messages.meta.home.description,
    keywords: messages.meta.keywords.split(',').map((item) => item.trim()),
    authors: [{ name: 'Luan Argolo Lemos', url: site.url }],
    creator: 'Luan Argolo Lemos',
    publisher: 'Luan Argolo Lemos',
    applicationName: site.name,
    manifest: '/manifest.webmanifest',
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      type: 'profile',
      locale: getLocaleMeta(locale).ogLocale,
      url: `/${locale}`,
      siteName: site.name,
      title: messages.meta.home.title,
      description: messages.meta.home.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.home.title,
      description: messages.meta.home.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const meta = getLocaleMeta(locale)
  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])
  const jsonLd = buildJsonLd({ locale, content })

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-sm focus:text-canvas"
          >
            {messages.common.skipToContent}
          </a>
          {children}
        </ThemeProvider>
        <ScrollToTop />
        <MotionEffects />
        <BackToTop
          label={messages.common.backToTop}
          hint={messages.common.backToTopShort}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  )
}

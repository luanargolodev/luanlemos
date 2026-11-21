import type { Viewport } from 'next'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { BackToTop } from '@/components/layout/BackToTop'
import { MotionEffects } from '@/components/motion/MotionEffects'
import { buildJsonLd, metadata, serializeJsonLd } from '@/lib/seo'

import './globals.css'

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

export { metadata }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildJsonLd()

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-sm focus:text-canvas"
          >
            Pular para o conteúdo
          </a>
          {children}
        </ThemeProvider>
        <MotionEffects />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  )
}

export const dynamic = 'force-static'

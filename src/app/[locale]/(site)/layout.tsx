import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getContent } from '@/content'
import { getMessages } from '@/i18n/messages'

export default async function SiteLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])

  return (
    <div className="relative min-h-screen">
      <SiteHeader locale={locale} messages={messages} content={content} />
      <main id="conteudo" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} messages={messages} content={content} />
    </div>
  )
}

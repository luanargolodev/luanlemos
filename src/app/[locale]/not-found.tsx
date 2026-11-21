import Link from 'next/link'
import { locale as rootLocale } from 'next/root-params'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ArrowRight } from '@/components/ui/icons'
import { getContent } from '@/content'
import { defaultLocale } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'
import { homeHref } from '@/i18n/routing'

export default async function NotFound() {
  let locale = defaultLocale
  try {
    locale = await rootLocale()
  } catch {
    locale = defaultLocale
  }

  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])

  return (
    <div className="min-h-screen">
      <SiteHeader locale={locale} messages={messages} content={content} />
      <main
        id="conteudo"
        className="container-page flex min-h-[80svh] flex-col items-center justify-center py-32 text-center"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {messages.notFound.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {messages.notFound.title}
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          {messages.notFound.description}
        </p>
        <ButtonLink
          href={homeHref(locale)}
          variant="accent"
          className="mt-8"
          icon={<ArrowRight />}
        >
          {messages.notFound.back}
        </ButtonLink>
        <Link
          href={homeHref(locale === 'pt' ? 'en' : 'pt')}
          className="mt-4 text-sm text-muted underline decoration-line underline-offset-4 hover:text-fg"
        >
          {locale === 'pt' ? 'English version' : 'Versão em português'}
        </Link>
      </main>
      <SiteFooter locale={locale} messages={messages} content={content} />
    </div>
  )
}

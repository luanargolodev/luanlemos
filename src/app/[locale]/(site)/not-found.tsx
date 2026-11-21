import Link from 'next/link'
import { locale as rootLocale } from 'next/root-params'

import { DocumentTitle } from '@/components/seo/DocumentTitle'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ArrowRight } from '@/components/ui/icons'
import { defaultLocale, navRoutes } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'

export default async function NotFound() {
  let locale = defaultLocale
  try {
    locale = await rootLocale()
  } catch {
    locale = defaultLocale
  }

  const messages = await getMessages(locale)
  const links = navRoutes.map((key) => ({
    key,
    href: href(locale, key),
    label: messages.nav[key],
  }))

  return (
    <>
      <DocumentTitle title={`${messages.notFound.title} — Luan Lemos`} />

      <section className="relative overflow-hidden border-b border-line/60 pb-16 pt-28 md:pb-20 md:pt-36">
        <div aria-hidden="true" className="grid-bg absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 size-[420px] rounded-full bg-glow blur-3xl"
        />
        <div className="container-page relative">
          <Breadcrumbs
            items={[
              { label: messages.common.home, href: homeHref(locale) },
              { label: String(messages.notFound.eyebrow) },
            ]}
          />

          <p className="eyebrow mt-8">
            {messages.notFound.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            {messages.notFound.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {messages.notFound.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={homeHref(locale)}
              variant="accent"
              icon={<ArrowRight />}
            >
              {messages.notFound.back}
            </ButtonLink>
            <ButtonLink
              href={href(locale, 'projects')}
              variant="outline"
              icon={<ArrowRight />}
            >
              {messages.nav.projects}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow">{messages.notFound.explore}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <Link
                key={link.key}
                href={link.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line/80 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block font-display text-lg font-semibold tracking-tight">
                    {link.label}
                  </span>
                </span>
                <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

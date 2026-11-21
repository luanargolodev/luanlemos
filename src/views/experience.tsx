import { Certifications } from '@/components/sections/Certifications'
import { Experience } from '@/components/sections/Experience'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import type { Content } from '@/content/types'
import {
  formatDuration,
  getExperienceMonths,
} from '@/i18n/format'
import { interpolate, type Messages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo'
import { site } from '@/data/site'

export function ExperienceView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const path = href(locale, 'experience')
  const duration = formatDuration(
    getExperienceMonths(content.profile.startDate),
    messages.common,
    locale === 'en' ? 'and' : 'e',
  )

  const jsonLd = [
    {
      ...buildWebPageJsonLd({
        type: 'ProfilePage',
        name: messages.meta.experience.title,
        description: messages.meta.experience.description,
        path,
        locale,
        about: `${site.url}/#person`,
      }),
      mainEntity: { '@id': `${site.url}/#person` },
    },
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.experience, path },
    ]),
  ]

  return (
    <>
      <PageHero
        index={messages.experience.index}
        label={messages.experience.label}
        title={messages.experience.pageTitle}
        intro={interpolate(messages.experience.intro, { duration })}
        breadcrumbs={[
          { label: messages.common.home, href: homeHref(locale) },
          { label: messages.nav.experience },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {messages.experience.highlights.map((highlight) => (
              <article
                key={highlight.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {highlight.label}
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Experience locale={locale} messages={messages} content={content} />
      <Certifications messages={messages} content={content} />
      <PageCTA locale={locale} messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}

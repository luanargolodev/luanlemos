import Image from 'next/image'

import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
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

export function AboutView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const { profile } = content
  const path = href(locale, 'about')
  const duration = formatDuration(
    getExperienceMonths(profile.startDate),
    messages.common,
    locale === 'en' ? 'and' : 'e',
  )

  const jsonLd = [
    buildWebPageJsonLd({
      type: 'AboutPage',
      name: messages.meta.about.title,
      description: messages.meta.about.description,
      path,
      locale,
      about: `${site.url}/#person`,
    }),
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.about, path },
    ]),
  ]

  return (
    <>
      <PageHero
        index={messages.about.index}
        label={messages.about.label}
        title={messages.about.pageTitle}
        intro={messages.about.pageIntro}
        breadcrumbs={[
          { label: messages.common.home, href: homeHref(locale) },
          { label: messages.nav.about },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line/80 bg-surface-2">
                <Image
                  src={profile.avatar}
                  alt={`${messages.hero.photoAlt.replace('{name}', profile.name)}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover saturate-[0.92]"
                />
              </div>

              <dl className="mt-6 space-y-4 border-t border-line/70 pt-6">
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {messages.about.currently}
                  </dt>
                  <dd className="text-sm text-fg">
                    {messages.about.currentlyValue}
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {messages.about.experience}
                  </dt>
                  <dd className="text-sm text-fg">
                    {interpolate(messages.about.experienceValue, {
                      duration,
                    })}
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {messages.about.education}
                  </dt>
                  <dd className="text-sm text-fg">
                    {profile.education.course}
                    <span className="mt-0.5 block text-xs text-muted">
                      {profile.education.institution} ·{' '}
                      {profile.education.period}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {messages.about.base}
                  </dt>
                  <dd className="text-sm text-fg">{profile.location}</dd>
                </div>
              </dl>
            </div>

            <div data-reveal>
              <p className="font-display text-2xl leading-snug tracking-tight text-fg md:text-[2rem]">
                {profile.bio[0]}
              </p>

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
                {profile.bio.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-line/80 bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {messages.about.readingNow}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {messages.about.readingNowText}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line/70 bg-surface px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line/60">
        <div className="container-page">
          <p className="eyebrow">{messages.about.principlesLabel}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
            {messages.about.principlesTitle}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {messages.about.principles.map((principle, index) => (
              <article
                key={principle.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperiencePreview locale={locale} messages={messages} content={content} />
      <PageCTA locale={locale} messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}

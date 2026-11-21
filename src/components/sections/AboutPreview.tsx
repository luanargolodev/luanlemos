import Link from 'next/link'

import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'
import { href } from '@/i18n/routing'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/components/ui/icons'

export function AboutPreview({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const { profile } = content

  return (
    <section
      id={messages.home.sections.about}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <SectionHeading
              index={messages.about.index}
              label={messages.about.label}
              title={messages.about.title}
            />

            <dl className="mt-10 space-y-4 border-t border-line/70 pt-6">
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
                  {messages.about.education}
                </dt>
                <dd className="text-sm text-fg">
                  {profile.education.course}
                  <span className="mt-0.5 block text-xs text-muted">
                    {profile.education.institution} · {profile.education.period}
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

            <Link
              href={href(locale, 'about')}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg"
            >
              {messages.about.cta}
              <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div data-reveal>
            <p className="font-display text-2xl leading-snug tracking-tight text-fg md:text-[1.7rem]">
              {profile.bio[0]}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted md:text-base">
              {profile.bio[1]}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <ButtonLink
              href={href(locale, 'about')}
              variant="outline"
              className="mt-8"
            >
              {messages.about.viewProfile}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

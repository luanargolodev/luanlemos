import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'
import { href } from '@/i18n/routing'

import { ButtonLink } from './ButtonLink'
import { ArrowRight, Download, MapPin } from './icons'

interface PageCTAProps {
  locale: string
  messages: Messages
  content: Content
  id?: string
  title?: string
  description?: string
}

export function PageCTA({
  locale,
  messages,
  content,
  id,
  title = messages.cta.title,
  description = messages.cta.description,
}: PageCTAProps) {
  return (
    <section id={id} className="section border-t border-line/60">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface px-6 py-10 md:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-glow blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">{messages.cta.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-[3.2rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink
                  href={href(locale, 'contact')}
                  variant="accent"
                  icon={<ArrowRight />}
                >
                  {messages.cta.talk}
                </ButtonLink>
                <ButtonLink
                  href={content.profile.cvUrl}
                  variant="outline"
                  external
                  icon={<Download />}
                >
                  {messages.cta.cv}
                </ButtonLink>
              </div>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-status" />
                  {content.profile.availability}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3" />
                  {content.profile.location}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

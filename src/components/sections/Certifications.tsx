import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Award, Sparkle } from '@/components/ui/icons'

export function Certifications({
  messages,
  content,
}: {
  messages: Messages
  content: Content
}) {
  return (
    <section
      id={messages.home.sections.certifications}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            index={messages.recognitions.index}
            label={messages.recognitions.label}
            title={messages.recognitions.title}
          />
          <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
            {messages.recognitions.description}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {content.certifications.map((item) => (
            <li
              key={item.id}
              data-reveal
              className="group flex gap-4 rounded-2xl border border-line/80 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 md:p-6"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-line/70 bg-surface-2/50 text-accent"
              >
                {item.kind === 'recognition' ? (
                  <Award className="size-4" />
                ) : (
                  <Sparkle className="size-4" />
                )}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  <span>{item.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.issuer}</span>
                </div>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug text-fg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

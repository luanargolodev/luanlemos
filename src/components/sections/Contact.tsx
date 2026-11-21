import type { Content } from '@/content/types'
import { interpolate, type Messages } from '@/i18n/messages'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { CopyEmail } from '@/components/ui/CopyEmail'
import {
  ArrowUpRight,
  Download,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
  WhatsApp,
} from '@/components/ui/icons'

export function Contact({
  messages,
  content,
}: {
  messages: Messages
  content: Content
}) {
  const { profile } = content

  const contactRows = [
    {
      label: messages.contact.rows.linkedin,
      value: profile.socials[0].handle,
      href: profile.socials[0].href,
      icon: LinkedIn,
    },
    {
      label: messages.contact.rows.github,
      value: profile.socials[1].handle,
      href: profile.socials[1].href,
      icon: GitHub,
    },
    {
      label: messages.contact.rows.whatsapp,
      value: profile.phone,
      href: profile.whatsapp,
      icon: WhatsApp,
    },
    {
      label: messages.contact.rows.curriculum,
      value: messages.contact.rows.curriculumValue,
      href: profile.cvUrl,
      icon: Download,
    },
  ]

  return (
    <section
      id={messages.home.sections.contact}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface px-6 py-10 md:px-12 md:py-14"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-glow blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <p className="eyebrow">{messages.contact.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-[3.6rem]">
                {messages.contact.heading}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                {messages.contact.sectionDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-status opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-status" />
                  </span>
                  {profile.availability}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3" />
                  {profile.location}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={`mailto:${profile.email}`}
                  variant="accent"
                  icon={<Mail />}
                >
                  {messages.contact.sendEmail}
                </ButtonLink>
                <ButtonLink
                  href={profile.whatsapp}
                  variant="outline"
                  external
                  icon={<WhatsApp />}
                >
                  {messages.contact.whatsapp}
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline font-mono text-xs text-muted hover:text-fg"
                >
                  {profile.email}
                </a>
                <CopyEmail
                  email={profile.email}
                  labels={{
                    copy: messages.common.copy,
                    copied: messages.common.copied,
                    announcement: messages.common.copiedAnnouncement,
                  }}
                />
              </div>
            </div>

            <div className="lg:pt-2">
              <ul className="border-t border-line/70">
                {contactRows.map((row) => {
                  const Icon = row.icon

                  return (
                    <li key={row.label}>
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 border-b border-line/70 py-4"
                      >
                        <span className="flex items-center gap-3.5">
                          <span className="grid size-9 place-items-center rounded-full border border-line/70 bg-surface-2/50 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                            <Icon className="size-4" />
                          </span>
                          <span>
                            <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                              {row.label}
                            </span>
                            <span className="mt-0.5 block text-sm text-fg">
                              {row.value}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight className="size-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                        <span className="sr-only">
                          {interpolate(messages.contact.rowAria, {
                            label: row.label,
                          })}{' '}
                          {messages.common.externalLink}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-6 text-[13px] leading-relaxed text-muted">
                {interpolate(messages.contact.emailNote, {
                  email: profile.email,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'
import { interpolate } from '@/i18n/messages'
import { cvHref, homeHref, navLinks } from '@/i18n/routing'

import { LogoMark } from './LogoMark'

const currentYear = new Date().getFullYear()

export function SiteFooter({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const items = navLinks(locale, {
    about: messages.nav.about,
    experience: messages.nav.experience,
    projects: messages.nav.projects,
    stack: messages.nav.stack,
    contact: messages.nav.contact,
  })

  return (
    <footer className="border-t border-line/70">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href={homeHref(locale)}
              className="inline-flex items-center gap-2"
            >
              <LogoMark className="size-6" />
              <span className="font-display text-lg font-semibold tracking-tight">
                {content.profile.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {interpolate(messages.footer.tagline, {
                role: content.profile.role,
              })}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {content.profile.location}
            </p>
          </div>

          <nav aria-label={messages.a11y.footerNav}>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              {messages.footer.navigation}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {items.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              {messages.footer.contact}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {content.profile.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {social.label}
                    <span aria-hidden="true" className="text-[10px] text-faint">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={cvHref(locale)}
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  {messages.footer.curriculumWeb}
                  <span aria-hidden="true" className="text-[10px] text-faint">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href={content.profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  {messages.footer.curriculumPdf}
                  <span aria-hidden="true" className="text-[10px] text-faint">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.profile.email}`}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {content.profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            {interpolate(messages.footer.rights, {
              year: currentYear,
              name: content.profile.name,
            })}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
            {messages.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}

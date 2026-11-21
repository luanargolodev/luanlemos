import { profile } from '@/data/profile'

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

const contactRows = [
  {
    label: 'LinkedIn',
    value: 'in/luanargolo',
    href: profile.socials[0].href,
    icon: LinkedIn,
  },
  {
    label: 'GitHub',
    value: 'luanargolodev',
    href: profile.socials[1].href,
    icon: GitHub,
  },
  {
    label: 'WhatsApp',
    value: profile.phone,
    href: profile.whatsapp,
    icon: WhatsApp,
  },
  {
    label: 'Currículo',
    value: 'PDF · 2 páginas',
    href: profile.cvUrl,
    icon: Download,
  },
]

export function Contact() {
  return (
    <section id="contato" className="section border-t border-line/60">
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
              <p className="eyebrow">Networking</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-[3.6rem]">
                Vamos conversar
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Gosto de conversar sobre front-end, performance e arquitetura
                de interfaces. Se quiser trocar uma ideia ou falar sobre um
                projeto, me chama.
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
                  Enviar e-mail
                </ButtonLink>
                <ButtonLink
                  href={profile.whatsapp}
                  variant="outline"
                  external
                  icon={<WhatsApp />}
                >
                  WhatsApp
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline font-mono text-xs text-muted hover:text-fg"
                >
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
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
                          {row.label} de Luan Lemos (abre em nova aba)
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-6 text-[13px] leading-relaxed text-muted">
                Prefere e-mail? Escreva para{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {profile.email}
                </a>
                . Respondo o mais rápido possível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

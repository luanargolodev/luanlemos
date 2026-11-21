import { profile } from '@/data/profile'
import { site } from '@/data/site'

import { LogoMark } from './SiteHeader'

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="text-accent">
                <LogoMark className="size-6" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role} focado em e-commerce, performance e interfaces que
              funcionam de verdade.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {profile.location}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Contato
            </h2>
            <ul className="mt-4 space-y-2.5">
              {profile.socials.map((social) => (
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
                <a
                  href="/curriculo"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  Currículo web
                  <span aria-hidden="true" className="text-[10px] text-faint">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.cvUrl}
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  Currículo em PDF
                  <span aria-hidden="true" className="text-[10px] text-faint">
                    ↓
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
            Feito com Next.js, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

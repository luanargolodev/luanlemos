import { profile } from '@/data/profile'
import { site } from '@/data/site'

import { MobileNav } from './MobileNav'
import { ThemeToggle } from './ThemeToggle'

export function LogoMark({ className = 'size-6' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 46"
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
      />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="text-accent transition-transform duration-300 group-hover:-rotate-6">
            <LogoMark className="size-[22px]" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:inline">
            / front-end
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-line/80 px-4 py-2 text-[13px] font-medium text-fg transition-colors hover:border-accent/60 hover:bg-accent-soft sm:inline-flex"
          >
            Currículo
            <span aria-hidden="true" className="text-[11px] text-faint">
              ↗
            </span>
          </a>
          <MobileNav links={site.nav} cvUrl={profile.cvUrl} />
        </div>
      </div>
    </header>
  )
}

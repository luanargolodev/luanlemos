import { profile } from '@/data/profile'
import { site } from '@/data/site'

import { CvMenu } from './CvMenu'
import { LogoMark } from './LogoMark'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="transition-transform duration-300 group-hover:-rotate-3">
            <LogoMark className="size-6" />
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
              data-nav-link
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
          <CvMenu />
          <MobileNav links={site.nav} cvUrl={profile.cvUrl} />
        </div>
      </div>
    </header>
  )
}

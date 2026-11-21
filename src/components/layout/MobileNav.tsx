'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'

import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher'
import type { LocaleMeta } from '@/i18n/config'
import { matchPathname, navKeyForRoute } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import type { NavItem } from './DesktopNav'
import { ThemeToggle } from './ThemeToggle'

interface MobileNavProps {
  items: NavItem[]
  navLabel: string
  locale: string
  locales: LocaleMeta[]
  cvWebHref: string
  cvPdfHref: string
  labels: {
    openMenu: string
    closeMenu: string
    theme: string
    cvWeb: string
    cvWebHint: string
    cvPdf: string
    cvPdfHint: string
    language: string
    languageNav: string
    currentLanguage: string
  }
}

function menuItemStyle(index: number) {
  return { '--menu-index': index } as CSSProperties
}

export function MobileNav({
  items,
  navLabel,
  locale,
  locales,
  cvWebHref,
  cvPdfHref,
  labels,
}: MobileNavProps) {
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const open = openPath !== null && openPath === pathname
  const match = matchPathname(pathname)
  const activeKey = match ? navKeyForRoute(match.key) : null

  const close = () => setOpenPath(null)
  const toggle = () => setOpenPath(open ? null : pathname)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPath(null)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.closeMenu : labels.openMenu}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-line/70 text-muted transition-colors hover:border-accent/50 hover:text-fg"
      >
        <span aria-hidden="true" className="menu-icon" data-open={open}>
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        id={panelId}
        data-open={open}
        aria-hidden={!open}
        inert={!open}
        className="mobile-menu-panel absolute inset-x-0 top-16 max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-line bg-canvas px-5 py-5 shadow-2xl"
      >
        <nav aria-label={navLabel} className="flex flex-col">
          {items.map((item, index) => {
            const active = item.key === activeKey
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={close}
                aria-current={active ? 'page' : undefined}
                style={menuItemStyle(index)}
                className={cn(
                  'mobile-menu-item flex items-center justify-between border-b border-line/60 py-3 text-base last:border-none',
                  active ? 'text-accent' : 'text-fg',
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'font-mono text-xs transition-transform',
                    active ? 'text-accent' : 'text-faint',
                  )}
                >
                  ↗
                </span>
              </Link>
            )
          })}
        </nav>

        <div
          className="mobile-menu-item mt-5 grid grid-cols-2 gap-2"
          style={menuItemStyle(items.length)}
        >
          <Link
            href={cvWebHref}
            onClick={close}
            className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-line bg-surface px-3 py-3 text-[13px] font-semibold text-fg"
          >
            {labels.cvWeb}
            <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-muted">
              {labels.cvWebHint}
            </span>
          </Link>
          <a
            href={cvPdfHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl bg-fg px-3 py-3 text-[13px] font-semibold text-canvas"
          >
            {labels.cvPdf}
            <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-canvas/70">
              {labels.cvPdfHint}
            </span>
          </a>
        </div>

        <div
          className="mobile-menu-item mt-4 border-t border-line/60 pt-4"
          style={menuItemStyle(items.length + 1)}
        >
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            {labels.language}
          </p>
          <LanguageSwitcher
            locale={locale}
            locales={locales}
            labels={{
              language: labels.language,
              languageNav: labels.languageNav,
              currentLanguage: labels.currentLanguage,
            }}
            variant="inline"
          />
        </div>

        <div
          className="mobile-menu-item mt-4 flex items-center justify-between border-t border-line/60 pt-4"
          style={menuItemStyle(items.length + 2)}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            {labels.theme}
          </span>
          <ThemeToggle label={labels.theme} />
        </div>
      </div>
    </div>
  )
}

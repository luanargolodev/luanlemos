'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'

import { cn } from '@/lib/utils'

import { ThemeToggle } from './ThemeToggle'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  links: readonly NavLink[]
  cvUrl: string
}

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (href === '/projetos' && pathname.startsWith('/projeto/')) return true
  return pathname === href || pathname.startsWith(`${href}/`)
}

function menuItemStyle(index: number) {
  return { '--menu-index': index } as CSSProperties
}

export function MobileNav({ links, cvUrl }: MobileNavProps) {
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Closing when the route changes keeps the panel from surviving a
  // back/forward navigation, without syncing state inside an effect.
  const open = openPath !== null && openPath === pathname

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
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
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
        <nav aria-label="Navegação principal" className="flex flex-col">
          {links.map((link, index) => {
            const active = isActive(pathname, link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={active ? 'page' : undefined}
                style={menuItemStyle(index)}
                className={cn(
                  'mobile-menu-item flex items-center justify-between border-b border-line/60 py-3 text-base last:border-none',
                  active ? 'text-accent' : 'text-fg',
                )}
              >
                {link.label}
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
          style={menuItemStyle(links.length)}
        >
          <Link
            href="/curriculo"
            onClick={close}
            className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-line bg-surface px-3 py-3 text-[13px] font-semibold text-fg"
          >
            Currículo
            <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-muted">
              Versão web
            </span>
          </Link>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl bg-fg px-3 py-3 text-[13px] font-semibold text-canvas"
          >
            Currículo
            <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-canvas/70">
              Versão PDF
            </span>
          </a>
        </div>

        <div
          className="mobile-menu-item mt-4 flex items-center justify-between border-t border-line/60 pt-4"
          style={menuItemStyle(links.length + 1)}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            Tema
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

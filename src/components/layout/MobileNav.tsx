'use client'

import { useEffect, useId, useState } from 'react'

import { ThemeToggle } from './ThemeToggle'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  links: readonly NavLink[]
  cvUrl: string
}

export function MobileNav({ links, cvUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="grid size-9 cursor-pointer place-items-center rounded-full border border-line/70 text-muted transition-colors hover:border-accent/50 hover:text-fg"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          className="size-[18px]"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-16 max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-line bg-canvas px-5 py-5 shadow-2xl"
        >
          <nav aria-label="Navegação principal" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-3 text-base text-fg last:border-none"
              >
                {link.label}
                <span aria-hidden="true" className="font-mono text-xs text-faint">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href="/curriculo"
              onClick={() => setOpen(false)}
              className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-line bg-surface px-3 py-3 text-[13px] font-semibold text-fg"
            >
              Currículo
              <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-muted">
                Versão web
              </span>
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex flex-col items-center justify-center gap-0.5 rounded-xl bg-fg px-3 py-3 text-[13px] font-semibold text-canvas"
            >
              Currículo
              <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-canvas/70">
                Versão PDF
              </span>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Tema
            </span>
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </div>
  )
}

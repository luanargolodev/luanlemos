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
        className="grid size-9 place-items-center rounded-full border border-line/70 text-muted transition-colors hover:border-accent/50 hover:text-fg"
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
          className="absolute inset-x-0 top-16 border-b border-line bg-canvas/95 px-5 py-5 shadow-2xl backdrop-blur-xl"
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

          <div className="mt-5 flex items-center gap-3">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-canvas"
            >
              Currículo
              <span aria-hidden="true">↗</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </div>
  )
}

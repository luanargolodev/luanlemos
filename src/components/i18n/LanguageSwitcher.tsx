'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

import { locales as allLocales, type LocaleMeta } from '@/i18n/config'
import { alternateLinks, homeHref, matchPathname } from '@/i18n/routing'

import { Check } from '@/components/ui/icons'

import { Flag } from './flags'

interface LanguageSwitcherProps {
  locale: string
  locales: LocaleMeta[]
  labels: {
    language: string
    languageNav: string
    currentLanguage: string
  }
  variant?: 'popover' | 'inline'
}

function fallbackLinks(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const rest = allLocales.some((item) => item.code === segments[0])
    ? segments.slice(1)
    : segments
  const suffix = rest.length > 0 ? `/${rest.join('/')}` : ''
  return Object.fromEntries(
    allLocales.map((item) => [item.htmlLang, `/${item.code}${suffix}`]),
  )
}

function setLocaleCookie(code: string) {
  document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`
}

export function LanguageSwitcher({
  locale,
  locales,
  labels,
  variant = 'popover',
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const containerRef = useRef<HTMLDivElement>(null)

  const match = matchPathname(pathname)
  const links = match
    ? alternateLinks(match.key, match.params)
    : fallbackLinks(pathname)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        containerRef.current?.querySelector<HTMLButtonElement>('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const current = locales.find((item) => item.code === locale) ?? locales[0]

  if (variant === 'inline') {
    return (
      <nav aria-label={labels.languageNav} className="grid grid-cols-2 gap-2">
        {locales.map((item) => {
          const active = item.code === locale
          return (
            <Link
              key={item.code}
              href={links[item.htmlLang] ?? homeHref(item.code)}
              hrefLang={item.htmlLang}
              lang={item.htmlLang}
              aria-current={active ? 'true' : undefined}
              onClick={() => {
                setLocaleCookie(item.code)
                setOpen(false)
              }}
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-[13px] font-medium transition-colors ${
                active
                  ? 'border-accent/50 bg-accent-soft text-fg'
                  : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-fg'
              }`}
            >
              <Flag code={item.flag} className="h-3.5 w-5 shrink-0 rounded-[2px]" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-line/70 px-2.5 text-[11px] font-medium text-muted transition-colors hover:border-accent/50 hover:text-fg"
      >
        <Flag code={current.flag} className="h-3 w-[18px] shrink-0 rounded-[2px]" />
        <span className="font-mono uppercase tracking-[0.08em]">
          {current.shortLabel}
        </span>
        <span className="sr-only">
          {labels.language}: {current.label}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3 text-faint transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      <div
        id={menuId}
        data-open={open}
        aria-hidden={!open}
        inert={!open}
        className="locale-menu absolute right-0 top-[calc(100%+0.5rem)] z-[60] w-48 overflow-hidden rounded-xl border border-line/80 bg-surface p-1.5 shadow-2xl shadow-black/20"
      >
        <p className="px-3 pb-1.5 pt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          {labels.language}
        </p>
        {locales.map((item) => {
          const active = item.code === locale
          return (
            <Link
              key={item.code}
              href={links[item.htmlLang] ?? homeHref(item.code)}
              hrefLang={item.htmlLang}
              lang={item.htmlLang}
              aria-current={active ? 'true' : undefined}
              onClick={() => {
                setLocaleCookie(item.code)
                setOpen(false)
              }}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                active
                  ? 'bg-accent-soft text-fg'
                  : 'text-muted hover:bg-surface-2 hover:text-fg'
              }`}
            >
              <Flag code={item.flag} className="h-3.5 w-5 shrink-0 rounded-[2px]" />
              <span className="flex-1">{item.label}</span>
              {active ? (
                <>
                  <Check className="size-3.5 text-accent" />
                  <span className="sr-only">{labels.currentLanguage}</span>
                </>
              ) : null}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

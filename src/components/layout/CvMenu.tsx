'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'

import { ArrowUpRight, FileText } from '@/components/ui/icons'

interface CvMenuLabels {
  button: string
  webTitle: string
  webDescription: string
  pdfTitle: string
  pdfDescription: string
}

export function CvMenu({
  labels,
  webHref,
  pdfHref,
}: {
  labels: CvMenuLabels
  webHref: string
  pdfHref: string
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const containerRef = useRef<HTMLDivElement>(null)

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

  const close = () => setOpen(false)

  return (
    <div ref={containerRef} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line/80 px-4 py-2 text-[13px] font-medium text-fg transition-colors hover:border-accent/60 hover:bg-accent-soft"
      >
        {labels.button}
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

      {open ? (
        <div
          id={menuId}
          className="cv-menu absolute right-0 top-[calc(100%+0.5rem)] z-[60] w-60 overflow-hidden rounded-xl border border-line/80 bg-surface p-1.5 shadow-2xl shadow-black/20"
        >
          <Link
            href={webHref}
            onClick={close}
            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2"
          >
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md border border-line/70 bg-canvas text-accent">
              <ArrowUpRight className="size-3.5" />
            </span>
            <span>
              <span className="block text-[13px] font-medium text-fg">
                {labels.webTitle}
              </span>
              <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                {labels.webDescription}
              </span>
            </span>
          </Link>

          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2"
          >
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md border border-line/70 bg-canvas text-accent">
              <FileText className="size-3.5" />
            </span>
            <span>
              <span className="block text-[13px] font-medium text-fg">
                {labels.pdfTitle}
              </span>
              <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                {labels.pdfDescription}
              </span>
            </span>
          </a>
        </div>
      ) : null}
    </div>
  )
}

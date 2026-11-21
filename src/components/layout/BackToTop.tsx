'use client'

import { useEffect, useState } from 'react'

import { ArrowUp } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

function scrollToTop() {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? 'auto' : 'smooth',
  })
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setVisible(window.scrollY > 640)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        'group fixed bottom-5 right-5 z-40 grid size-11 cursor-pointer place-items-center rounded-full border border-line/80 bg-surface/90 text-muted shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent md:bottom-8 md:right-8 print:hidden',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-line/80 bg-surface px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
      >
        Topo
      </span>
      <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}

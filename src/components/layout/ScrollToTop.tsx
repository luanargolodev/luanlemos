'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * App Router sometimes restores the previous scroll position on client-side
 * navigations, and the global `scroll-behavior: smooth` can animate that
 * movement. New pages should always start at the top.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Hash links should still scroll to their target.
    if (!pathname || window.location.hash) return

    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    window.scrollTo(0, 0)

    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previousBehavior
    })

    return () => {
      cancelAnimationFrame(frame)
      root.style.scrollBehavior = previousBehavior
    }
  }, [pathname])

  return null
}

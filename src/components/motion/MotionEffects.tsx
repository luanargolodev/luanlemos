'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

function isInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export function MotionEffects() {
  const pathname = usePathname()
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pathname) return

    const root = document.documentElement
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches
    const cleanups: Array<() => void> = []

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (reducedMotion) {
      for (const element of reveals) element.classList.add('is-revealed')
    } else {
      const groups = new Map<Element, HTMLElement[]>()
      for (const element of reveals) {
        const parent = element.parentElement
        if (!parent) continue
        const group = groups.get(parent) ?? []
        group.push(element)
        groups.set(parent, group)
      }

      for (const group of groups.values()) {
        group.forEach((element, index) => {
          element.style.setProperty(
            '--reveal-delay',
            `${Math.min(index, 5) * 65}ms`,
          )
        })
      }

      // Reveal what is already visible before hiding anything, avoiding a flash.
      for (const element of reveals) {
        if (isInView(element)) element.classList.add('is-revealed')
      }

      root.classList.add('motion-ready')

      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-revealed')
            revealObserver.unobserve(entry.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
      )

      for (const element of reveals) {
        if (!element.classList.contains('is-revealed')) {
          revealObserver.observe(element)
        }
      }

      cleanups.push(() => revealObserver.disconnect())
    }

    // Scroll progress + hero parallax
    const parallaxElements = reducedMotion
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))

    let frame = 0
    const updateOnFrame = () => {
      frame = 0
      const max = root.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }

      for (const element of parallaxElements) {
        const speed = Number(element.dataset.parallax ?? 0.04)
        const offset = Math.min(window.scrollY, window.innerHeight) * speed
        element.style.translate = `0 ${offset.toFixed(1)}px`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateOnFrame)
    }
    updateOnFrame()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    cleanups.push(() => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })

    if (!reducedMotion && finePointer) {
      // Cursor-following glow in the hero
      for (const element of document.querySelectorAll<HTMLElement>(
        '[data-glow]',
      )) {
        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect()
          element.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
          element.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
        }

        element.addEventListener('pointermove', onMove)
        cleanups.push(() => element.removeEventListener('pointermove', onMove))
      }

      // Pointer tilt + spotlight on cards
      for (const element of document.querySelectorAll<HTMLElement>(
        '[data-tilt]',
      )) {
        const strength = Number(element.dataset.tiltStrength ?? 2.5)
        let tiltFrame = 0

        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width - 0.5
          const y = (event.clientY - rect.top) / rect.height - 0.5

          element.style.setProperty('--mx', `${event.clientX - rect.left}px`)
          element.style.setProperty('--my', `${event.clientY - rect.top}px`)

          if (tiltFrame) cancelAnimationFrame(tiltFrame)
          tiltFrame = requestAnimationFrame(() => {
            element.style.transform = `perspective(1000px) rotateX(${(-y * strength).toFixed(2)}deg) rotateY(${(x * strength).toFixed(2)}deg)`
          })
        }

        const onLeave = () => {
          if (tiltFrame) cancelAnimationFrame(tiltFrame)
          element.style.transform = ''
        }

        element.addEventListener('pointermove', onMove)
        element.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          if (tiltFrame) cancelAnimationFrame(tiltFrame)
          element.removeEventListener('pointermove', onMove)
          element.removeEventListener('pointerleave', onLeave)
        })
      }
    }

    return () => {
      for (const cleanup of cleanups) cleanup()
      root.classList.remove('motion-ready')
    }
  }, [pathname])

  return (
    <div aria-hidden="true" className="scroll-progress">
      <div ref={progressRef} className="scroll-progress-bar" />
    </div>
  )
}

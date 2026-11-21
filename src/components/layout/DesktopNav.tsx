'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { RouteKey } from '@/i18n/config'
import { matchPathname, navKeyForRoute } from '@/i18n/routing'

export interface NavItem {
  key: RouteKey
  href: string
  label: string
}

export function DesktopNav({
  items,
  label,
}: {
  items: NavItem[]
  label: string
}) {
  const pathname = usePathname()
  const match = matchPathname(pathname)
  const activeKey = match ? navKeyForRoute(match.key) : null

  return (
    <nav
      aria-label={label}
      className="hidden items-center gap-4 md:flex lg:gap-7"
    >
      {items.map((item) => {
        const active = item.key === activeKey
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`nav-link text-[13px] transition-colors hover:text-fg ${
              active ? 'nav-link-active text-fg' : 'text-muted'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
}

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (href === '/projetos' && pathname.startsWith('/projeto/')) return true
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function DesktopNav({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden items-center gap-7 md:flex"
    >
      {links.map((link) => {
        const active = isActive(pathname, link.href)

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'nav-link text-[13px] text-muted transition-colors hover:text-fg',
              active && 'nav-link-active',
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-canvas hover:bg-fg/90 border border-transparent shadow-sm',
  accent:
    'bg-accent-strong text-accent-contrast hover:bg-accent-strong/90 border border-transparent shadow-sm shadow-accent/20',
  outline:
    'border border-line bg-transparent text-fg hover:border-accent/60 hover:bg-accent-soft',
  ghost: 'border border-transparent text-muted hover:text-fg',
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
  icon?: ReactNode
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  icon,
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...externalProps}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5',
        variants[variant],
        className,
      )}
    >
      {children}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </a>
  )
}

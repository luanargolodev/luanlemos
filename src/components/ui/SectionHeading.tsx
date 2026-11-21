import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)} data-reveal>
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <span>{label}</span>
      </p>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tight md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

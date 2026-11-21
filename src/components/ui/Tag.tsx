import { cn } from '@/lib/utils'

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line/80 bg-surface-2/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

'use client'

import { useEffect, useState } from 'react'

import { Check, Copy } from '@/components/ui/icons'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent/50 hover:text-fg"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? 'Copiado' : 'Copiar'}
      <span aria-live="polite" className="sr-only">
        {copied ? 'E-mail copiado para a área de transferência' : ''}
      </span>
    </button>
  )
}

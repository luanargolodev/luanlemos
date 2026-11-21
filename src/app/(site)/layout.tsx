import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

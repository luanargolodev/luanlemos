import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ArrowRight } from '@/components/ui/icons'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main
        id="conteudo"
        className="container-page flex min-h-[80svh] flex-col items-center justify-center py-32 text-center"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Página não encontrada.
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          O link pode ter mudado ou nunca ter existido. Volte ao início para
          continuar explorando o portfólio.
        </p>
        <ButtonLink
          href="/"
          variant="accent"
          className="mt-8"
          icon={<ArrowRight />}
        >
          Voltar ao início
        </ButtonLink>
      </main>
      <SiteFooter />
    </div>
  )
}

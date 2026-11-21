import './globals.css'

export const metadata = {
  title: '404 — Luan Lemos',
  description: 'Página não encontrada / Page not found',
  robots: { index: false, follow: false },
}

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="grid min-h-screen place-items-center bg-canvas px-6 text-fg">
        <main className="max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            404
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Página não encontrada.
          </h1>
          <p className="mt-2 text-lg text-muted">Page not found.</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            O link pode ter mudado ou nunca ter existido. The link may have
            changed or never existed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/pt"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-canvas"
            >
              Voltar ao início
            </a>
            <a
              href="/en"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-fg"
            >
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}

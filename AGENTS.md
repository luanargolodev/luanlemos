<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Contexto do projeto

Antes de mudanças estruturais, leia [`docs/PLAN.md`](docs/PLAN.md). Ele descreve o objetivo do site, os planos já executados, a arquitetura, os invariantes de conteúdo/SEO/acessibilidade, o checklist de validação e o roadmap.

- Conteúdo vive em `src/data/`; não invente fatos, clientes ou métricas.
- Commits pequenos, em pt-BR ou inglês, seguindo o histórico (`feat:`, `fix:`, `copy:`, `chore:`).
- Antes de concluir: `npm run lint`, `npm run typecheck`, `npm run build` e teste de navegação (scroll ao topo, reveals, menu mobile).

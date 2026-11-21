# Plano do site — Luan Lemos

> Documento vivo do projeto. Última atualização: **2026-11-21**.
> Branch ativa: `v3` · PR aberto: [#1](https://github.com/luanargolodev/luanlemos/pull/1) (`v3` → `main`).
> Este arquivo é a fonte da verdade para **qualquer pessoa ou IA** que for continuar o site.

---

## TL;DR para agentes (English)

This repository is the personal portfolio of **Luan Lemos**, a Brazilian front-end developer specialised in e-commerce. Its single job is to help recruiters and peers understand, in under 30 seconds, who he is, what he has shipped, and how to contact him — and to make that same information readable by search engines, ATS software and LLMs.

The site is a **statically rendered Next.js 16 App Router** project. All copy and structured content live in `src/data/`; pages compose that data. Never invent facts, metrics or clients. Keep it accessible (WCAG 2.1 AA, axe = 0), fast (Lighthouse ≥ 95), Portuguese-only (pt-BR), and motion-safe (`prefers-reduced-motion`). Deploy is blocked on the Vercel account, not on the code.

Read sections 4–7 before changing code, and section 8 for the roadmap.

---

## 1. Objetivo

### 1.1 Em uma frase

Um portfólio de **front-end de e-commerce** que prova, com trabalho real, que o Luan entrega lojas rápidas, acessíveis e fáceis de manter — e que facilita o contato de recrutadores, times de produto e pares.

### 1.2 Por que ele existe

- **Recrutamento:** substituir um currículo estático por evidência de trabalho (cases, stack, decisões).
- **Networking:** dar contexto a quem chega pelo LinkedIn/GitHub antes de uma conversa.
- **Descoberta:** ser encontrável no Google e legível por ATS, LLMs e agentes (`/llms.txt`, `/cv.json`, HTML semântico).
- **Autoria:** mostrar identidade visual e cuidado de execução, já que o site é, ele mesmo, uma peça de front-end.

### 1.3 Público e o que cada um precisa

| Público | Precisa entender | Onde encontra |
| --- | --- | --- |
| Recrutador técnico | Cargo, senioridade, stack, tempo de experiência, PDF do CV | Home, `/sobre`, `/experiencia`, CV no header |
| Recrutador não técnico | O que ele faz, para quais marcas, se está disponível | Hero, cards de projeto, `/contato` |
| Líder de produto/engenharia | Como ele pensa e resolve problemas reais | `/projeto/[slug]` (contexto, desafio, abordagem, resultado) |
| Par / comunidade | Stack, posicionamento, links | `/stack`, GitHub, LinkedIn |
| Máquina (Google, ATS, LLM) | Fatos estruturados, rotas canônicas, JSON | `sitemap.xml`, JSON-LD, `/llms.txt`, `/cv.json` |

### 1.4 Métricas de sucesso

Não há métricas inventadas nem analytics histórico. O sucesso é avaliado por:

1. **Clareza em 30s:** em uma olhada no hero + header, dá para dizer cargo, especialidade, stack e como baixar o CV.
2. **Profundidade:** 8 cases reais navegáveis, com papel, stack e resultado.
3. **Qualidade técnica:** Lighthouse ≥ 95 nas quatro categorias (home = 100 em medição local) e axe = 0 violações em dark, light e mobile.
4. **Legibilidade por máquina:** todas as rotas estáticas, um `h1` por página, canonical/OG únicos, JSON-LD válido, `sitemap.xml` e `llms.txt` completos.
5. **Conversão:** contato direto a um clique (e-mail, WhatsApp, LinkedIn, currículo).

### 1.5 Fora de escopo (até segunda ordem)

- Blog, CMS ou painel administrativo.
- Formulário de contato com backend (o contato é por links diretos).
- Versão em inglês (não decidida).
- Página de serviços/freelancer e depoimentos.
- Deploy automatizado dentro deste workspace (depende de conta/DNS externos).

---

## 2. Plano inicial (o que foi combinado no começo)

> Não existia um arquivo de plano versionado. Esta seção reconstrói o plano original a partir do PR #1, dos READMEs e dos commits `cab36c0` em diante. Trate como o contrato fundador do site.

### 2.1 Ponto de partida

O projeto nasceu como um **SPA em React + Vite** (commit `7e8a97e`, jul/2026): hero, sobre, projetos com modal de imagem, skills, timeline e contato, com tema claro/escuro e paleta indigo (`ab8c4a6`). Funcionava como cartão de visitas, mas tinha limites: uma única página, pouco SEO, nenhum currículo estruturado e nenhuma leitura por ATS/IA.

### 2.2 Objetivo do plano de estruturação

Recomeçar o site em **Next.js App Router com renderização estática**, mantendo o conteúdo e a identidade, mas com foco explícito em:

1. **Recrutamento** — hierarquia clara, CV acessível, prova de trabalho.
2. **SEO e descoberta** — metadata, OG, JSON-LD, sitemap, robots e `llms.txt`.
3. **Conteúdo centralizado** — todo o texto em `src/data/`, sem duplicação entre seções.
4. **Execução de front-end** — performance, acessibilidade, dark/light e motion com propósito.
5. **Marca própria** — símbolo de código/terminal, tipografia e paleta consistentes.

### 2.3 Requisitos não-negociáveis definidos na época

- **Estático por padrão:** todo o conteúdo principal no HTML, sem dependência de JS para ler.
- **Acessível:** WCAG 2.1 AA, foco visível, skip link, `prefers-reduced-motion`.
- **Rápido:** imagens WebP com `sizes`, blur placeholder e orçamento de performance.
- **Honesto:** nada de métricas, clientes ou resultados inventados.
- **Português do Brasil**, tom direto e profissional, sem superlativos de marketing.
- **Currículo em três formatos** a partir do mesmo conteúdo: web, PDF (ATS) e JSON.

### 2.4 Entregáveis previstos e o que virou realidade

| Entregável do plano | Status | Onde está |
| --- | --- | --- |
| Home com hero, sobre, experiência, projetos, stack, contato | Entregue (evoluiu para home resumida + páginas) | `src/app/(site)/page.tsx` e previews |
| Conteúdo centralizado | Entregue | `src/data/*` |
| SEO técnico | Entregue e ampliado | `src/lib/seo.ts`, `sitemap.ts`, `robots.ts`, `llms.txt` |
| Currículo web + PDF + JSON | Entregue | `/curriculo`, `public/cv/…pdf`, `/cv.json`, `scripts/generate-cv.mjs` |
| Motion layer | Entregue | `src/components/motion/MotionEffects.tsx`, `globals.css` |
| Marca | Entregue | `src/app/icon.svg`, `scripts/generate-brand.mjs` |
| Páginas dedicadas e cases | Entregue na fase 6 | `(site)/sobre`, `experiencia`, `projetos`, `projeto/[slug]`, `stack`, `contato` |
| Deploy em produção | **Pendente (bloqueio externo)** | Seção 8.1 |

---

## 3. Histórico de planos executados

| Fase | Quando | Commit(s) | Plano / escopo | Resultado |
| --- | --- | --- | --- | --- |
| 0. v1 SPA | jul/2026 | `7e8a97e`, `49a3fa2`, `ab8c4a6` | Portfólio em React + Vite, uma página, modal de projetos, tema e paleta indigo | Base visual e de conteúdo; sem SEO/ATS |
| 1. Rebuild Next.js | 20/11/2026 | `cab36c0` | Reestruturar em Next.js App Router estático, foco recrutador, dados em `src/data`, SEO, fontes e analytics | Fundação atual do site |
| 2. Projetos reais | 20/11/2026 | `87108f5`, `7a06796` | Atualizar screenshots, adicionar lojas internacionais e case Nannacay | 8 cases com dados reais |
| 3. Motion | 20/11/2026 | `8b8666b` | Reveals no scroll, marquee, tilt/spotlight, parallax, glow, progresso de leitura | Site com movimento sem perder legibilidade |
| 4. Currículo/ATS | 20/11/2026 | `b959b8c`, `5eefb60`, `3f10269`, `4ad94c7`, `7331772` | CV web, PDF e JSON; dropdown no header; palavras-chave para Gupy/ATS | 3 formatos sincronizados |
| 5. Marca e polimento | 20–21/11/2026 | `495ce66`, `bef17ff`, `b866bf2`, `7c3e414`, `2ec6011`, `663a886`, `35802c2` | Cursor/ícones, chips, back-to-top, nova marca, skills de BFF/GTM/GA4, copy de networking | Identidade e acabamento |
| 6. Páginas SEO + cases | 21/11/2026 | `23c704f` | Home resumida; `/sobre`, `/experiencia`, `/projetos`, `/projeto/[slug]`, `/stack`, `/contato`; filtros; breadcrumbs; JSON-LD por página; sitemap/llms | Arquitetura editorial atual |
| 7. Correções de navegação | 21/11/2026 | `2c54c71` | Reveals reinicializados por rota; scroll ao topo em navegação client-side | Fim das “páginas pretas” e do scroll residual |
| 8. Menu mobile | 21/11/2026 | `26b8d19` | Painel com wipe + stagger, ícone hambúrguer↔X, `inert`, foco no Escape, fecha ao trocar de rota | Menu suave e acessível |

### 3.1 O que cada fase ensinou (decisões que não devem ser desfeitas)

- **Fase 1:** dados em TypeScript são suficientes; não vale introduzir CMS para um site pessoal.
- **Fase 3:** motion precisa ser progressivo — sem JS e com `prefers-reduced-motion`, tudo continua visível e legível.
- **Fase 5:** microdetalhes (cursor, foco, ícones, marca) mudam a percepção de acabamento mais do que novas seções.
- **Fase 6:** uma página única limita SEO e narrativa; separar em páginas + cases melhorou descoberta e profundidade, mantendo as âncoras antigas na home por compatibilidade.
- **Fase 7:** em App Router, efeitos globais precisam reagir ao `pathname`; revelações e scroll não podem rodar só no primeiro mount.
- **Fase 8:** menu mobile não deve desmontar; animar `data-open` evita saltos, e o estado aberto precisa ser derivado da rota para não sobreviver ao back/forward.

---

## 4. Como o site funciona hoje

### 4.1 Rotas

| Rota | Papel | Renderização |
| --- | --- | --- |
| `/` | Resumo com hero, sobre/experiência/projetos/stack em preview, CTA e âncoras antigas | Estática |
| `/sobre` | Perfil completo, formação, princípios, skills | Estática |
| `/experiencia` | Destaques (BFF, internacional, analytics), timeline, certificações | Estática |
| `/projetos` | Lista dos 8 cases com filtros por categoria | Estática + filtro client-side |
| `/projeto/[slug]` | Case: capa, cliente, ano, papel, stack, contexto, desafio, abordagem, resultado | SSG (`generateStaticParams`) |
| `/stack` | Grupos de tecnologias + aplicação prática | Estática |
| `/contato` | Canais diretos, WhatsApp, CV | Estática |
| `/curriculo` | Currículo web sem header/footer, pensado para ATS e agentes | Estática |
| `/cv.json` | Currículo estruturado | Route handler estático |
| `/llms.txt` | Resumo do perfil e links para agentes/LLMs | Route handler estático |
| `/sitemap.xml` | 16 URLs (7 páginas + 8 cases + PDF) | Estática |
| `/robots.txt` | Crawlers liberados, incluindo IA | Estática |
| `/opengraph-image`, `/twitter-image`, `/icon.svg`, `/apple-icon.png` | Imagens sociais e ícones | Estática |

Slugs dos cases: `zee-dog`, `zee-now`, `blog-zee-now`, `zee-dog-japao`, `zee-dog-europa`, `zee-dog-australia`, `zee-dog-peru`, `nannacay`.

### 4.2 Arquitetura

```text
src/app/
  layout.tsx              # html/body, fontes, tema, ScrollToTop, MotionEffects, BackToTop, JSON-LD global
  (site)/                 # shell com SiteHeader + main#conteudo + SiteFooter
    page.tsx
    sobre|experiencia|projetos|stack|contato/page.tsx
    projeto/[slug]/page.tsx
  curriculo/page.tsx      # fora do shell (documento)
  sitemap.ts robots.ts llms.txt/route.ts cv.json/route.ts
src/components/
  layout/                 # header, DesktopNav, MobileNav, CvMenu, ThemeToggle, footer, LogoMark, ScrollToTop, BackToTop
  sections/               # Hero, previews, Experience, TechStack, Certifications, Contact, ProjectsExplorer
  ui/                     # PageHero, PageCTA, Breadcrumbs, ProjectCard, ButtonLink, Tag, CopyEmail, icons
  motion/MotionEffects.tsx
  seo/JsonLd.tsx
src/data/                 # conteúdo (fonte da verdade)
src/lib/                  # seo.ts, dates.ts, utils.ts
scripts/                  # imagens, CV em PDF, marca
```

**Fluxo:** rota (server component) → importa dados de `src/data` → compõe seções/UI → metadata e JSON-LD em `src/lib/seo.ts` → build estático. Interatividade fica isolada em componentes `'use client'` (nav, tema, filtros, menu, motion).

### 4.3 Conteúdo: fonte da verdade

| Arquivo | Contém | Observações |
| --- | --- | --- |
| `src/data/profile.ts` | Nome, cargo, headline, bio, contato, local, disponibilidade, formação, início de carreira, avatar, CV | `startDate: '2022-06'` alimenta o cálculo de tempo de experiência |
| `src/data/experience.ts` | 3 experiências com cargo, empresa, período, resumo, conquistas e stack | Atual: Zee.Dog · Grupo PetzCobasi desde 2025-05 |
| `src/data/projects.ts` | 8 projetos com slug, cliente, ano, resumo, outcome, stack, categorias, imagem, URL e `caseStudy` | Cada case tem `role`, `context[]`, `challenge`, `approach[]`, `highlights[]` |
| `src/data/tech.ts` | Grupos de tecnologias + mapa de ícones | Usado em `/stack`, home e `/llms.txt` |
| `src/data/certifications.ts` | Formação, hackathons e reconhecimentos | Deco.cx, 2023–2025 |
| `src/data/resume.ts` | Objetivo, resumo, competências e projetos do currículo | Alimenta `/curriculo`, `/cv.json` e `/llms.txt` |
| `src/data/site.ts` | URL canônica, nome, título, descrição, keywords, navegação, alt do OG | `NEXT_PUBLIC_SITE_URL` sobrescreve a URL |
| `src/data/image-blur.json` | Blur placeholders gerados | Não editar à mão |

Regra: **se um fato não está no repositório ou não foi confirmado pelo Luan, ele não entra no site** — especialmente números, cargos, clientes e resultados.

### 4.4 Design system

- **Tailwind CSS 4 CSS-first**, tokens em `src/app/globals.css` (`@theme inline`).
- Tokens semânticos: `canvas`, `surface`, `surface-2`, `line`, `fg`, `muted`, `faint`, `accent`, `accent-strong`, `accent-soft`, `accent-contrast`, `status`, `glow`.
- **Dark/light** via classe `.dark` + `next-themes` (`defaultTheme="system"`, sem flash).
- Tipografia: **Bricolage Grotesque** (display), **Inter** (texto), **JetBrains Mono** (labels, metadados).
- Componentes base: `PageHero`, `PageCTA`, `Breadcrumbs`, `ProjectCard`, `SectionHeading`, `Tag`, `ButtonLink`, `CopyEmail`, `LogoMark`.
- Marca: “L” + prompt de terminal (`>`), tile squircle indigo; assets gerados por `npm run brand`.
- Estética: grid sutil, bordas de 1px, cantos arredondados, muito espaço, metadados em mono caixa-alta.

### 4.5 Motion

- `MotionEffects` (client) roda por `pathname`: revela `[data-reveal]` com `IntersectionObserver`, com stagger por grupo; também progresso de leitura, parallax, brilho do hero, tilt/spotlight nos cards.
- `ScrollToTop` força o topo em navegação client-side, com `history.scrollRestoration = 'manual'`, `scroll-behavior: auto` temporário e guarda para links com hash.
- `BackToTop` aparece após 640px, respeita reduced motion.
- Navegação ativa por `usePathname` (com `/projeto/*` mantendo “Projetos” ativo).
- Menu mobile: sempre montado; `data-open` controla wipe (`clip-path`), stagger por `--menu-index` e morph do ícone (3 spans via `translate`/`rotate`/`scale`); `inert`/`aria-hidden` fechado; `Escape` fecha e devolve foco; fecha sozinho ao trocar de rota.
- **Sem JS ou com `prefers-reduced-motion`, o conteúdo continua visível e o menu abre/fecha instantaneamente.**

### 4.6 SEO e dados estruturados

- Metadata global e templates em `src/lib/seo.ts`; cada página define título, descrição, canonical e OG próprios.
- OG image dinâmica (1200×630); cases usam a capa do projeto como OG.
- JSON-LD: `Person`, `WebSite` e `ProfilePage` globais; por página: `AboutPage`, `CollectionPage` + `ItemList`, `CreativeWork`, `ContactPage`, `BreadcrumbList`.
- `sitemap.xml` gerado de dados (inclui cases e PDF).
- `robots.txt` libera buscadores e crawlers de IA; `llms.txt` resume perfil, experiência, projetos, stack, certificados e links.
- HTML semântico, um `h1` por página, breadcrumbs visíveis, links internos home → páginas → cases → próximo case → contato.
- Filtros de `/projetos` são **client-side**: todos os cards permanecem no HTML (SEO) e são escondidos por CSS via `data-filter`.

### 4.7 Acessibilidade

- Skip link “Pular para o conteúdo”, `main#conteudo` focável.
- Foco visível global (`:focus-visible`), alvos de toque ≥ 36px.
- `aria-current="page"`, `aria-expanded`, `aria-controls`, `aria-hidden`, `inert`.
- Contraste validado em dark e light; axe = 0 violações (WCAG 2.1 A/AA) em desktop e mobile.
- `prefers-reduced-motion` desliga reveals, marquee, tilt, parallax, transições do menu e scroll suave.
- Botões com `type`, ícones decorativos com `aria-hidden`, links externos com aviso para leitor de tela.

### 4.8 Performance

- Build estático (26 rotas), sem fetch em runtime.
- Imagens: originais em `assets/project-images/`, otimizadas para WebP 1600w em `public/images/projects/`, capas 1200w em `cover/`, blur placeholder em JSON.
- Cards usam `next/image` com `sizes` e blur placeholder; a capa do case usa um arquivo pré-otimizado de 1200w com `unoptimized` (ver 8.2).
- Baseline local (21/11/2026): home **100/100/100/100**; cases **93–95 em performance**, 100 nas demais; LCP da capa do case ≈ 3.2s em Lighthouse mobile local.
- Fontes via `next/font` com `display: swap`.

### 4.9 Currículo em três formatos

| Formato | Rota | Geração |
| --- | --- | --- |
| Web | `/curriculo` | Server component com dados de `resume.ts` |
| PDF | `/cv/luan-argolo-lemos-desenvolvedor-front-end.pdf` | `npm run cv` imprime `/curriculo` em A4 via Chrome e grava metadados |
| JSON | `/cv.json` | Route handler estático a partir dos mesmos dados |

O PDF é de uma coluna, fonte padrão e texto selecionável, pensado para ATS/Gupy. **Ao mudar `resume.ts` ou a página do currículo, rode `npm run build && npm start` e depois `npm run cv`** para regenerar o PDF.

### 4.10 Deploy e repositório

- Repositório: `github.com/luanargolodev/luanlemos`.
- Branch de trabalho: `v3`; branch padrão: `main` (ainda no SPA antigo, `ab8c4a6`).
- PR #1 (`v3` → `main`) está aberto e mergeável, com 19 commits no momento da escrita.
- Deploy previsto na Vercel, com `NEXT_PUBLIC_SITE_URL=https://luanlemos.dev`.
- Analytics só carrega quando `process.env.VERCEL` existe.
- **Estado em 21/11/2026:** deploy bloqueado por “Account is blocked” na Vercel e `luanlemos.dev` sem DNS (NXDOMAIN). É bloqueio externo, não de código.

---

## 5. Decisões e porquês (ADRs resumidos)

| ID | Decisão | Motivo | Consequência |
| --- | --- | --- | --- |
| D1 | Next.js App Router estático, sem CMS | Conteúdo pequeno, versionado e tipado; zero custo operacional | Conteúdo muda via PR + build |
| D2 | Todo o conteúdo em `src/data/*.ts` | Fonte única, sem duplicação, fácil de revisar | Novas páginas consomem os mesmos dados |
| D3 | Route group `(site)` com header/footer | Shell compartilhado sem afetar `/curriculo` | Currículo é documento isolado |
| D4 | Home resumida + páginas dedicadas | SEO, narrativa e links profundos por tema | Âncoras antigas da home foram preservadas |
| D5 | Filtros client-side por CSS | Cards continuam no HTML para SEO/LLMs | `data-filter` + `data-categories` |
| D6 | JSON-LD por tipo de página | Melhor entendimento por buscadores | `seo.ts` centraliza os builders |
| D7 | Scroll ao topo manual + hash guard | App Router restaurava scroll e `smooth` causava salto | `ScrollToTop` roda antes do motion |
| D8 | Reveals reinicializados por `pathname` | Evitar conteúdo invisível em navegação client-side | Efeito depende da rota |
| D9 | Menu mobile sempre montado | Evitar unmount rígido e permitir animação de saída | `data-open` + `inert` + `visibility` |
| D10 | Wipe por `clip-path` + stagger | Abertura perceptível sem ghosting de fundo | Sombra do painel é recortada (trade-off) |
| D11 | Estado do menu derivado da rota | Fechar em back/forward sem `setState` em effect | `openPath === pathname` |
| D12 | CV em 3 formatos a partir dos mesmos dados | ATS, leitura humana e agentes | PDF precisa ser regenerado após mudanças |
| D13 | Sem métricas/resultados inventados | Credibilidade | Cases usam outcomes qualitativos verificáveis |
| D14 | Analytics só na Vercel | Evitar script em ambiente local/preview sem necessidade | `process.env.VERCEL` |
| D15 | Marca gerada por script | Consistência entre favicon, apple icon, manifest e OG | `npm run brand` |

---

## 6. Invariantes (o que nunca quebrar)

### 6.1 Conteúdo

- Fatos canônicos: **Luan Argolo Lemos**, “Luan Lemos”, Desenvolvedor Front-end Pleno, Brasil · Remoto, início da carreira em **jun/2022**, Zee.Dog · Grupo PetzCobasi desde **mai/2025**, formação ADS/Estácio (2020–2022).
- Não inventar clientes, cargos, datas, números, depoimentos ou resultados.
- Português do Brasil, tom direto, sem “apaixonado por tecnologia” e sem superlativos.
- O tempo de experiência é calculado em build a partir de `profile.startDate`; não escrever “4 anos” hardcoded.

### 6.2 Código e estrutura

- Rotas devem continuar **estáticas** (sem fetch em runtime, sem CMS).
- Conteúdo novo entra em `src/data/`, não direto no JSX da página.
- Reutilizar tokens e componentes existentes; não criar paleta paralela.
- Componentes interativos precisam de `'use client'`; o resto permanece server component.
- Não adicionar dependência pesada sem justificar (o site não usa biblioteca de animação).
- `lint`, `typecheck` e `build` precisam passar antes de qualquer commit.

### 6.3 Acessibilidade e motion

- Um `h1` por página; landmarks (`header`, `main`, `footer`, `nav`) e `aria-label` corretos.
- Nunca remover o skip link, o foco visível ou o respeito a `prefers-reduced-motion`.
- Conteúdo não pode depender de JS para aparecer.
- Menu fechado precisa continuar `inert`/`aria-hidden` e não focável.

### 6.4 SEO

- Toda rota nova precisa de: metadata + canonical, entrada no `site.nav` (se for navegação principal), `sitemap.ts`, `llms.txt` e JSON-LD adequado.
- Projeto novo precisa de: slug único, `categories`, `caseStudy`, imagem + alt, entrada no `projects.ts` (sitemap e llms são automáticos).
- Manter um `h1` por página e breadcrumbs em páginas internas.
- `NEXT_PUBLIC_SITE_URL` é a única fonte da URL canônica em produção.

---

## 7. Como validar qualquer mudança

### 7.1 Comandos obrigatórios

```bash
npm install          # Node.js 20.9+ (recomendado 24 LTS)
npm run lint         # oxlint
npm run typecheck    # tsc --noEmit
npm run build        # 26 rotas estáticas
npm run start        # servir o build em http://localhost:3000
```

Scripts auxiliares:

```bash
npm run images       # WebP + capas + blur placeholders
npm run cv           # regenera o PDF a partir de /curriculo (exige build + start)
npm run brand        # favicon, apple icon, ícone 512 e marca do OG
```

### 7.2 Checklist manual

- [ ] Todas as rotas retornam 200; slug inexistente retorna 404.
- [ ] Navegação client-side: nova página começa no topo e nenhum `[data-reveal]` visível fica com `opacity: 0`.
- [ ] Nav ativa correta, inclusive em `/projeto/[slug]`.
- [ ] Filtros: Brasil 4, Internacional 4, Shopify & Liquid 5, Deco.cx 7, Todos 8.
- [ ] Menu mobile: abre/fecha animado, ícone vira X e volta, `Escape` devolve foco, fecha ao navegar, sem overflow em 320px/390px.
- [ ] Dark e light com contraste; axe sem violações.
- [ ] Um `h1` por página; canonical e OG corretos; JSON-LD válido.
- [ ] `sitemap.xml` com 16 URLs e `llms.txt` com todas as páginas e cases.
- [ ] Sem erros de console.

### 7.3 Ferramentas usadas nas validações anteriores

- **Playwright** (`playwright-core` + Chrome local) para navegar, medir estilos, testar teclado e tirar screenshots (salvos em `.context/`, que é ignorado pelo git).
- **axe-core** injetado na página para WCAG 2.1 A/AA em dark, light e mobile.
- **Lighthouse** (`npx lighthouse`) sobre `npm run build && npm run start`.
- Baseline registrada em 21/11/2026 — revalidar após mudanças grandes.

---

## 8. Próximos planos (roadmap)

> Prioridade: **P0** bloqueia valor, **P1** melhora direta, **P2** manutenção/robustez, **P3** ideias. Nada aqui está aprovado automaticamente: confirme com o Luan antes de executar itens de produto.

### 8.1 P0 — Publicar o site

**Problema:** o código está pronto, mas o site não está no ar. A branch padrão `main` ainda aponta para o SPA antigo; o PR #1 está aberto. A Vercel reportou “Account is blocked” e `luanlemos.dev` está sem DNS.

**Passos:**
1. Resolver o acesso à conta Vercel (ou criar projeto em outra conta/plataforma).
2. Fazer merge do PR #1 (`v3` → `main`) após revisão.
3. Configurar `NEXT_PUBLIC_SITE_URL=https://luanlemos.dev`.
4. Configurar o domínio e o DNS (incluindo `www` → apex).
5. Ativar Vercel Analytics.
6. Enviar `sitemap.xml` no Google Search Console e validar indexação.

**Aceite:** domínio resolve, todas as rotas 200, canonical/OG absolutos, sitemap aceito, analytics recebendo eventos, preview de PR funcionando.

**Fora do código:** propriedade do domínio, cobrança/verificação da conta e DNS.

### 8.2 P1 — Performance dos cases

**Problema:** a capa do case é o LCP e mede ~3.2s no Lighthouse mobile local (performance 93–95). A capa é servida em 1200w com `unoptimized`.

**Investigar:**
- `sizes` e `srcset` da capa; testar `next/image` otimizado vs. `unoptimized`.
- `fetchPriority="high"`/preload correto e dimensões explícitas.
- Peso real da imagem (cover 1200w) e possibilidade de AVIF.
- JS não usado (~28 KiB), legado (~14 KiB) e requests que bloqueiam render (~110–150 ms).

**Aceite:** LCP < 2.5s em mobile no Lighthouse local, performance ≥ 95 nos cases, sem regressão visual.

### 8.3 P1 — Profundidade de conteúdo (com fatos verificados)

**Problema:** os cases já contam contexto/desafio/abordagem, mas poucos têm resultado quantificado — justamente porque números não podem ser inventados.

**Plano:**
- Entrevistar o Luan para levantar métricas reais (LCP/CLS antes/depois, conversão, tempo de publicação, redução de bugs, adoção de componentes).
- Adicionar somente o que for comprovável; caso contrário, manter outcome qualitativo.
- Avaliar um bloco “decisões técnicas” ou “o que eu faria diferente” por case.
- Atualizar `llms.txt` e o resumo do CV quando o conteúdo mudar.

**Aceite:** cada case responde “qual era o problema, o que eu fiz, o que mudou” sem inflar resultados.

### 8.4 P1 — Segurança e dependências

**Problema:** o GitHub reporta 6 vulnerabilidades no branch padrão (2 high, 3 moderate, 1 low).

**Plano:** revisar Dependabot, atualizar Next/React/dependências transitivas, rodar lint/typecheck/build e revalidar Lighthouse/axe.

**Aceite:** alertas zerados ou justificados, build verde.

### 8.5 P1 — CI mínimo

**Problema:** as validações são manuais (agente + comandos locais).

**Plano:** GitHub Actions em PR com `npm ci`, `lint`, `typecheck`, `build`. Opcional: smoke de rotas com Playwright e axe.

**Aceite:** PR só mergeia com pipeline verde; tempo de CI < 5 min.

### 8.6 P2 — SEO contínuo

- Validar JSON-LD no Rich Results Test e no Schema Markup Validator.
- Monitorar Search Console (impressões, consultas, páginas não indexadas).
- Revisar titles/descriptions com base em consultas reais.
- Manter `llms.txt` sincronizado com `src/data` ao mudar conteúdo (o arquivo é gerado, não editado à mão).
- Avaliar OG específica por case (hoje usa a capa do projeto).

**Aceite:** zero erros de dados estruturados, sitemap indexado, sem páginas órfãs.

### 8.7 P2 — Testes de navegação e acessibilidade

- Smoke test Playwright: todas as rotas 200, 404, filtros, nav ativa, scroll ao topo, menu mobile (abrir/fechar/Escape/rota).
- axe automatizado em dark/light/mobile no CI.
- Teste de teclado do menu e do dropdown de currículo.

**Aceite:** suíte roda em CI e falha o PR em regressão.

### 8.8 P2 — Manutenção e DX

- Acompanhar releases do Next 16/React 19 e aplicar patches.
- Garantir Node LTS no ambiente de build.
- Documentar qualquer novo script ou rota neste arquivo e no README.
- Considerar `npm run verify` agregando lint + typecheck + build.

### 8.9 P3 — Polimento visual

- Avaliar a sombra do painel mobile (recortada pelo `clip-path`): testar wrapper com sombra ou borda inferior mais forte.
- Revisar enquadramento das capas dos cases (algumas capturas cortam o topo).
- Estados de hover/focus nos cards em telas de toque.
- Conferir light theme em todas as páginas novas.

### 8.10 P3 — Ideias não aprovadas

Registrar sem executar:

- Versão em inglês (`/en`) para recrutadores internacionais.
- Página de “notas”/blog técnico.
- Depoimentos de colegas/clientes.
- Estudos de caso em vídeo ou GIFs de interação.
- Página de serviços/freelancer.

Qualquer uma dessas muda o posicionamento do site; precisam de decisão explícita do Luan.

---

## 9. Riscos e questões abertas

| Risco / questão | Impacto | Mitigação |
| --- | --- | --- |
| Conta Vercel bloqueada / domínio sem DNS | Site não publicado | Resolver acesso e DNS; código não depende disso |
| `main` desatualizado em relação à `v3` | Deploy acidental do SPA antigo | Fazer merge do PR #1 antes de apontar produção |
| Conteúdo de case sem métricas reais | Cases menos convincentes | Coletar dados verificados; não inventar |
| Dependências vulneráveis | Segurança/manutenção | Atualizar e revalidar (8.4) |
| Mudanças de conteúdo não refletidas no PDF/llms | Inconsistência entre formatos | Rodar `npm run cv` e revisar `llms.txt` |
| Ausência de CI | Regressões passam | Implementar pipeline (8.5) |
| Performance do LCP nos cases | Lighthouse abaixo de 95 | Otimizar capa (8.2) |

---

## 10. Manual para o próximo agente

### 10.1 Ordem de leitura

1. `AGENTS.md` (regras do ambiente/Next).
2. **Este arquivo** (objetivo, decisões, invariantes, roadmap).
3. `README.md` (comandos, estrutura, conteúdo).
4. Código em `src/app`, `src/components`, `src/data`.

### 10.2 Antes de editar

- `git status` e confirme a branch (`v3`); não trabalhe direto na `main`.
- Identifique se a mudança é **conteúdo** (`src/data`), **UI** (`components`), **rota** (`app`) ou **token** (`globals.css`).
- Se for conteúdo, confirme os fatos com o Luan; se for visual, siga os tokens existentes.
- Verifique se a mudança afeta PDF, `llms.txt`, sitemap, JSON-LD ou OG.

### 10.3 Convenções

- Commits no padrão do histórico: `feat:`, `fix:`, `copy:`, `chore:`, `refactor:`.
- Código e nomes em inglês; copy e comentários de produto em pt-BR.
- Componentes server por padrão; `'use client'` só quando há estado/efeito/evento.
- Sem `any` desnecessário; tipos de conteúdo em `src/types/content.ts`.
- Não reformatar arquivos não relacionados; diffs pequenos e focados.

### 10.4 Definição de pronto

Uma mudança só está pronta quando:

- [ ] `lint`, `typecheck` e `build` passam.
- [ ] Rotas afetadas testadas em desktop (1440px) e mobile (390px), dark e light.
- [ ] Navegação client-side começa no topo e revela conteúdo.
- [ ] Teclado funciona (Tab, Enter, Escape) e axe = 0.
- [ ] Metadata/canonical/JSON-LD/sitemap/llms continuam corretos.
- [ ] Se mexeu em currículo, PDF regenerado.
- [ ] Screenshots de antes/depois geradas em `.context/` (não commitar).
- [ ] PR/descrição atualizados com o que mudou e o que ficou pendente.

### 10.5 O que não fazer

- Não publicar roadmap ou notas internas no site.
- Não adicionar CMS, backend ou formulário sem pedido explícito.
- Não trocar a identidade visual, fontes ou paleta por conta própria.
- Não “corrigir” textos factuais sem confirmação.
- Não declarar deploy concluído sem verificar domínio e produção.
- Não remover as âncoras antigas da home (`#sobre`, `#experiencia`, `#projetos`, `#stack`, `#contato`).

---

## 11. Glossário

- **Case:** página individual de projeto em `/projeto/[slug]`, com contexto, desafio, abordagem e resultado.
- **Deco.cx:** plataforma de e-commerce/front-end usada nas lojas Zee.Dog/Zee.Now.
- **BFF:** Backend for Frontend, camada que orquestra dados para o front-end.
- **ATS/Gupy:** sistemas de triagem de currículo; o PDF e as palavras-chave são otimizados para eles.
- **Reveal:** animação de entrada de elementos `[data-reveal]` no scroll.
- **Wipe:** revelação do painel mobile por recorte (`clip-path`).
- **Tokens:** variáveis semânticas de cor/espaçamento/fonte definidas em `globals.css`.
- **Estático (SSG):** HTML gerado no build, sem depender de servidor em runtime.

---

### Histórico deste documento

| Data | Mudança |
| --- | --- |
| 2026-11-21 | Criação: objetivo, plano inicial, fases 0–8, arquitetura, decisões, invariantes, validação e roadmap |

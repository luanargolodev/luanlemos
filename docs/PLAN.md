# Plano do site — Luan Lemos

> Documento vivo do projeto. Última atualização: **2026-11-21**.
> Branch ativa: `v3` · PR aberto: [#1](https://github.com/luanargolodev/luanlemos/pull/1) (`v3` → `main`).
> Este arquivo é a fonte da verdade para **qualquer pessoa ou IA** que for continuar o site.

---

## TL;DR para agentes (English)

This repository is the personal portfolio of **Luan Lemos**, a Brazilian front-end developer specialised in e-commerce. Its job is to help recruiters and peers understand, in under 30 seconds, who he is, what he has shipped, and how to contact him — and to make that same information readable by search engines, ATS software and LLMs.

The site is a **statically rendered Next.js 16 App Router** project with **two locales, Portuguese (`/pt`) and English (`/en`)**, using a small, typed, server-only i18n layer. All copy lives in `src/content` and `src/i18n/messages`; facts live in `src/content/facts.ts`. Never invent facts, metrics or clients. Keep it accessible (WCAG 2.1 AA, axe = 0), fast (Lighthouse ≥ 90, ideally 95+), fully translated (pt-BR + en), and motion-safe.

Read sections 4–7 before changing code, section 8 for the roadmap, and section 10 before adding a language.

---

## 1. Objetivo

### 1.1 Em uma frase

Um portfólio de **front-end de e-commerce**, em português e inglês, que prova com trabalho real que o Luan entrega lojas rápidas, acessíveis e fáceis de manter — e que facilita o contato de recrutadores, times de produto e pares.

### 1.2 Por que ele existe

- **Recrutamento:** substituir um currículo estático por evidência de trabalho (cases, stack, decisões).
- **Alcance internacional:** permitir que recrutadores e empresas de fora leiam tudo em inglês, com URLs e currículo próprios.
- **Descoberta:** ser encontrável no Google e legível por ATS, LLMs e agentes (`/llms.txt`, `/cv.json`, HTML semântico, hreflang).
- **Autoria:** mostrar identidade visual e cuidado de execução, já que o site é, ele mesmo, uma peça de front-end.

### 1.3 Público

| Público | Precisa entender | Onde encontra |
| --- | --- | --- |
| Recrutador técnico | Cargo, senioridade, stack, tempo de experiência, PDF do CV | Home, `/pt/sobre` ou `/en/about`, `/pt/experiencia`, CV no header |
| Recrutador não técnico | O que ele faz, para quais marcas, se está disponível | Hero, cards de projeto, contato |
| Liderança de produto/engenharia | Como ele pensa e resolve problemas reais | `/projeto/[slug]` (contexto, desafio, abordagem, resultado) |
| Par / comunidade | Stack, posicionamento, links | `/stack`, GitHub, LinkedIn |
| Máquina (Google, ATS, LLM) | Fatos estruturados, rotas canônicas, idioma | `sitemap.xml`, JSON-LD, `/llms.txt`, `/cv.json` |

### 1.4 Métricas de sucesso

1. **Clareza em 30s:** cargo, especialidade, stack e download do CV visíveis de imediato.
2. **Profundidade:** 8 cases reais navegáveis, com papel, stack e resultado.
3. **Qualidade técnica:** Lighthouse ≥ 90 nas quatro categorias (home/desktop em 100 na medição local) e axe = 0 em pt/en, dark/light, mobile.
4. **Legibilidade por máquina:** rotas estáticas, um `h1` por página, canonical/OG/hreflang únicos, JSON-LD válido, sitemap e `llms.txt`.
5. **Conversão:** contato direto a um clique (e-mail, WhatsApp, LinkedIn, currículo).

### 1.5 Fora de escopo

- Blog, CMS ou painel administrativo.
- Formulário de contato com backend.
- Página de serviços/freelancer e depoimentos.
- Deploy automatizado dentro deste workspace (depende de conta/DNS externos).

---

## 2. Plano inicial (o que foi combinado no começo)

> Não existia um arquivo de plano versionado. Esta seção reconstrói o plano original a partir do PR #1, dos READMEs e dos commits `cab36c0` em diante.

### 2.1 Ponto de partida

O projeto nasceu como um **SPA em React + Vite** (commit `7e8a97e`, jul/2026): hero, sobre, projetos com modal, skills, timeline e contato, com tema claro/escuro e paleta indigo. Funcionava como cartão de visitas, mas tinha limites: uma única página, pouco SEO, nenhum currículo estruturado e nenhuma leitura por ATS/IA.

### 2.2 Objetivo do plano de estruturação

Recomeçar o site em **Next.js App Router estático**, com foco em:

1. **Recrutamento** — hierarquia clara, CV acessível, prova de trabalho.
2. **SEO e descoberta** — metadata, OG, JSON-LD, sitemap, robots e `llms.txt`.
3. **Conteúdo centralizado** — todo o texto em `src/content`, sem duplicação.
4. **Execução de front-end** — performance, acessibilidade, dark/light e motion com propósito.
5. **Marca própria** — símbolo de código/terminal, tipografia e paleta consistentes.

### 2.3 Requisitos não-negociáveis

- **Estático por padrão:** conteúdo principal no HTML, sem dependência de JS para ler.
- **Acessível:** WCAG 2.1 AA, foco visível, skip link, `prefers-reduced-motion`.
- **Rápido:** imagens WebP com `sizes`, blur placeholder e orçamento de performance.
- **Honesto:** nada de métricas, clientes ou resultados inventados.
- **Português do Brasil** como idioma base; inglês completo como segundo idioma.
- **Currículo em três formatos** a partir do mesmo conteúdo: web, PDF (ATS) e JSON.

### 2.4 Entregáveis previstos e o que virou realidade

| Entregável do plano | Status | Onde está |
| --- | --- | --- |
| Home com hero, sobre, experiência, projetos, stack, contato | Entregue (home resumida + páginas) | `src/app/[locale]/(site)/[[...path]]/page.tsx` e views |
| Conteúdo centralizado | Entregue | `src/content/*`, `src/i18n/messages/*` |
| SEO técnico | Entregue e ampliado (multilíngue) | `src/lib/seo.ts`, `sitemap.ts`, `robots.ts`, `llms.txt` |
| Currículo web + PDF + JSON | Entregue nos dois idiomas | `/pt/curriculo`, `/en/resume`, `public/cv/*.pdf`, `/cv.json` |
| Motion layer | Entregue | `MotionEffects`, `globals.css` |
| Marca | Entregue | `src/app/icon.svg`, `scripts/generate-brand.mjs` |
| Páginas dedicadas e cases | Entregue | `sobre`, `experiencia`, `projetos`, `projeto/[slug]`, `stack`, `contato` |
| i18n pt/en | Entregue | `src/i18n`, `src/content`, `src/proxy.ts`, seletor de idioma |
| Deploy em produção | **Pendente (bloqueio externo)** | Seção 8.1 |

---

## 3. Histórico de planos executados

| Fase | Quando | Commit(s) | Plano / escopo | Resultado |
| --- | --- | --- | --- | --- |
| 0. v1 SPA | jul/2026 | `7e8a97e`, `49a3fa2`, `ab8c4a6` | Portfólio React + Vite, uma página, modal, tema, paleta indigo | Base visual e de conteúdo |
| 1. Rebuild Next.js | 20/11/2026 | `cab36c0` | Next.js App Router estático, foco recrutador, dados centralizados, SEO, fontes, analytics | Fundação atual |
| 2. Projetos reais | 20/11/2026 | `87108f5`, `7a06796` | Screenshots, lojas internacionais e case Nannacay | 8 cases com dados reais |
| 3. Motion | 20/11/2026 | `8b8666b` | Reveals, marquee, tilt/spotlight, parallax, glow, progresso | Site com movimento |
| 4. Currículo/ATS | 20/11/2026 | `b959b8c`, `5eefb60`, `3f10269`, `4ad94c7`, `7331772` | CV web, PDF e JSON; dropdown; palavras-chave Gupy/ATS | 3 formatos sincronizados |
| 5. Marca e polimento | 20–21/11/2026 | `495ce66`, `bef17ff`, `b866bf2`, `7c3e414`, `2ec6011`, `663a886`, `35802c2` | Cursor, chips, back-to-top, marca, skills BFF/GTM/GA4, copy | Identidade e acabamento |
| 6. Páginas SEO + cases | 21/11/2026 | `23c704f` | Home resumida; páginas dedicadas; filtros; breadcrumbs; JSON-LD; sitemap/llms | Arquitetura editorial |
| 7. Correções de navegação | 21/11/2026 | `2c54c71` | Reveals por rota; scroll ao topo; fim das “páginas pretas” | Navegação estável |
| 8. Menu mobile | 21/11/2026 | `26b8d19` | Wipe, stagger, ícone hambúrguer↔X, inert, foco, fecha na rota | Menu suave e acessível |
| 9. Documentação | 21/11/2026 | `bcfb40a`, `9091b3a` | `docs/PLAN.md`, README e AGENTS; plano histórico e roadmap | Contexto para agentes |
| 10. i18n pt/en | 21/11/2026 | `d9895b6` | Rotas localizadas, dicionários tipados, seletor, hreflang, sitemap, OG, CV/PDF em dois idiomas | Site bilíngue |
| 11. 404 localizado | 21/11/2026 | `2e1f49f`, `b0b17f9` | 404 com shell, design system, pt/en, título localizado e redirect de locales inválidos | Erro consistente com o site |

### 3.1 O que cada fase ensinou

- **Fase 1:** dados TypeScript são suficientes; não vale introduzir CMS para um site pessoal.
- **Fase 3:** motion precisa ser progressivo — sem JS e com `prefers-reduced-motion`, tudo continua visível.
- **Fase 6:** uma página única limita SEO; páginas + cases melhoraram descoberta, mantendo âncoras antigas.
- **Fase 7:** efeitos globais precisam reagir ao `pathname`; revelações e scroll não podem rodar só no primeiro mount.
- **Fase 8:** menu mobile não deve desmontar; animar `data-open` evita saltos e o estado aberto deve ser derivado da rota.
- **Fase 10:** i18n não pode entrar no bundle do cliente; texto no servidor e props para componentes client mantêm o JS praticamente igual. Hreflang/canonical/sitemap precisam ser gerados dos mesmos dados das rotas.

---

## 4. Como o site funciona hoje

### 4.1 Rotas

| Rota | Papel | Renderização |
| --- | --- | --- |
| `/` | Detecta idioma (cookie/`Accept-Language`) para humanos; bots recebem pt | Proxy; 200/307 |
| `/pt`, `/en` | Home resumida | Estática |
| `/pt/sobre`, `/en/about` | Perfil, princípios, formação | Estática |
| `/pt/experiencia`, `/en/experience` | Destaques, timeline, certificações | Estática |
| `/pt/projetos`, `/en/projects` | 8 cases com filtros | Estática + filtro client-side |
| `/pt/projeto/[slug]`, `/en/project/[slug]` | Case individual | SSG |
| `/pt/stack`, `/en/stack` | Tecnologias e aplicação | Estática |
| `/pt/contato`, `/en/contact` | Contato | Estática |
| `/pt/curriculo`, `/en/resume` | Currículo web (sem shell) | Estática; rewrite para `/cv` |
| `/pt/cv.json`, `/en/cv.json` | Currículo estruturado | Route handler estático |
| `/pt/llms.txt`, `/en/llms.txt` | Resumo para LLMs | Route handler estático |
| `/sitemap.xml`, `/robots.txt` | 30 URLs com hreflang | Estática |
| `/pt/opengraph-image`, `/en/opengraph-image` | OG localizada | Estática |
| `/pt/cv`, `/en/cv` | Alias interno do CV (redireciona para o caminho público) | Redirect |
| `/[locale]/*` inexistente | 404 localizado, com shell e design system | Dinâmica/404 |
| `/ena`, `/xx` e afins | Prefixo reconhecível é respeitado (`/ena` → `/en/a`); sem prefixo, usa cookie/`Accept-Language`; bots sem prefixo usam pt. Cai no 404 localizado | 307 + 404 |

Slugs dos cases: `zee-dog`, `zee-now`, `blog-zee-now`, `zee-dog-japao`, `zee-dog-europa`, `zee-dog-australia`, `zee-dog-peru`, `nannacay`.

### 4.2 Arquitetura

```text
src/app/[locale]/
  layout.tsx                 # root layout: lang, tema, fontes, motion, JSON-LD global
  (site)/
    layout.tsx               # header + main + footer
    [[...path]]/page.tsx     # resolve rota + metadata + view
  cv/page.tsx                # currículo sem header/footer
  cv.json/route.ts
  llms.txt/route.ts
  opengraph-image.tsx
  not-found.tsx              # 404 localizado com header/footer
src/app/sitemap.ts robots.ts manifest.ts
src/proxy.ts                 # raiz + caminhos sem locale válido
src/views/                   # Home, About, Experience, Projects, Project, Stack, Contact, Resume
src/components/              # layout, sections, ui, i18n, seo, motion
src/content/                 # facts + pt/en + types + getContent
src/i18n/                    # locales.json, routing, messages pt/en, format
scripts/                     # imagens, CV, marca, check-i18n
```

**Fluxo:** rota → `getContent(locale)`/`getMessages(locale)` no servidor → view → metadata/JSON-LD → HTML estático. Componentes interativos recebem apenas as strings necessárias via props. O dicionário nunca entra no bundle do cliente.

### 4.3 Conteúdo e i18n: fonte da verdade

| Arquivo | Contém |
| --- | --- |
| `src/i18n/locales.json` | Única configuração: code, label, bandeira, `htmlLang`, `ogLocale`, `dateLocale`, `cvPath`, `cvFile`, rotas localizadas |
| `src/content/facts.ts` | Fatos compartilhados: slugs, anos, stack, imagens, URLs, empresas, certificações, perfil |
| `src/content/pt.ts`, `en.ts` | Textos estruturados: perfil, experiências, 8 cases, stack, certificações, CV |
| `src/content/types.ts` | Contrato de `Content`, `Project`, `Experience`, `Resume`, etc. |
| `src/content/index.ts` | `getContent(locale)` — carrega só o idioma ativo, mescla fatos + texto |
| `src/i18n/messages/pt.ts`, `en.ts` | UI, labels, metadados, mensagens de acessibilidade |
| `src/i18n/messages/index.ts` | `getMessages(locale)` com fallback para pt |
| `src/i18n/routing.ts` | `href()`, `matchPathname()`, alternates |
| `src/i18n/format.ts` | Datas, duração e meses via `Intl` |
| `src/data/image-blur.json` | Blur placeholders gerados |

Regra: **se um fato não está no repositório ou não foi confirmado pelo Luan, ele não entra no site** — especialmente números, cargos, clientes e resultados.

### 4.4 Design system

- **Tailwind CSS 4 CSS-first**, tokens em `src/app/globals.css`.
- Tokens: `canvas`, `surface`, `surface-2`, `line`, `fg`, `muted`, `faint`, `accent`, `accent-strong`, `accent-soft`, `accent-contrast`, `status`, `glow`.
- **Dark/light** via `.dark` + `next-themes` (system, sem flash).
- Tipografia: Bricolage Grotesque (display), Inter (texto), JetBrains Mono (labels).
- Marca: “L” + prompt de terminal (`>`), tile squircle indigo.
- Seletor de idioma: botão compacto no header (bandeira + sigla), painel com links reais e bandeiras SVG inline; versão inline no menu mobile e no CV.

### 4.5 Motion

- `MotionEffects` roda por `pathname`: reveals com `IntersectionObserver`, stagger, progresso, parallax, glow, tilt/spotlight.
- `ScrollToTop` força o topo em navegação client-side, com `scrollRestoration = 'manual'` e guarda para hash.
- Menu mobile: wipe (`clip-path`), stagger, morph do ícone, `inert`, `Escape` devolve foco, fecha na troca de rota.
- Seletor de idioma: painel animado, `inert` fechado, links reais, `hreflang`, `lang`, `aria-current`.
- Com `prefers-reduced-motion`, transições são desligadas; sem JS, o conteúdo permanece visível.

### 4.6 SEO e dados estruturados

- Metadata por página/idioma: title, description, keywords, canonical autorreferente, OG/Twitter.
- `hreflang`: `pt-BR`, `en`, `x-default` (pt) em todas as páginas, incluindo cases e CV.
- `og:locale`, `og:locale:alternate`, imagem OG localizada, alt traduzido.
- JSON-LD: `Person` + `WebSite` global; `AboutPage`, `CollectionPage` + `ItemList`, `CreativeWork`, `ContactPage`, `ProfilePage`, `BreadcrumbList`.
- `sitemap.xml` com 30 URLs e alternates absolutos; `robots.txt` libera buscadores/IA.
- `llms.txt` e `cv.json` por idioma; aliases pt na raiz.
- Filtros de projetos client-side mantendo todos os cards no HTML.
- `/` não entra no sitemap; bots sempre recebem pt 200.

### 4.7 Acessibilidade

- Skip link, `main#conteudo`, foco visível, alvos ≥ 36px.
- `aria-current="page"`, `aria-expanded`, `aria-controls`, `aria-hidden`, `inert`.
- Seletor de idioma com nome acessível, bandeiras decorativas, links `lang`/`hreflang`.
- axe = 0 em pt/en, dark/light, desktop/mobile e menu aberto.
- `prefers-reduced-motion` desliga reveals, marquee, tilt, parallax e transições do menu/seletor.

### 4.8 Performance

- Build estático (43 páginas geradas; nenhuma página dinâmica).
- JS inicial: ~154 KiB (2 KiB acima do baseline pré-i18n).
- Nenhum dicionário no cliente; nenhuma lib de PDF no bundle.
- Imagens WebP com `sizes`, blur e prioridade no hero/capa; capas 1200w nos cases.
- Fontes via `next/font` + `display: swap`.
- Baseline local (21/11/2026): home pt/en **100/100/100/100**, CV 100, desktop 100, cases 93–94 mobile (LCP 3.1–3.2 s), about 93 mobile; CLS 0.
- Proxy só em `/`; páginas e CV não passam por função.

### 4.9 Currículo

| Formato | pt | en | Geração |
| --- | --- | --- | --- |
| Web | `/pt/curriculo` | `/en/resume` | Server component com conteúdo localizado |
| PDF | `public/cv/luan-argolo-lemos-desenvolvedor-front-end.pdf` | `public/cv/luan-argolo-lemos-front-end-developer.pdf` | `npm run cv` imprime as páginas em A4 via Chrome |
| JSON | `/pt/cv.json` | `/en/cv.json` | Route handler estático |

- Um único template (`src/views/resume.tsx`) para qualquer idioma.
- Datas via `Intl`; inglês com verbos de ação; PDF com metadados, `Language` (`pt-BR`/`en-US`), texto selecionável e Arial no print.
- PDFs são pré-gerados; nada de biblioteca de PDF no cliente.

### 4.10 Deploy e repositório

- Repositório: `github.com/luanargolodev/luanlemos`.
- Branch de trabalho `v3`; padrão `main` (ainda no SPA antigo).
- PR #1 (`v3` → `main`) aberto.
- Vercel + `NEXT_PUBLIC_SITE_URL=https://luanlemos.dev`; Analytics só com `process.env.VERCEL`.
- **Estado em 21/11/2026:** deploy bloqueado por “Account is blocked” e `luanlemos.dev` sem DNS. Bloqueio externo, não de código.

---

## 5. Decisões e porquês (ADRs resumidos)

| ID | Decisão | Motivo | Consequência |
| --- | --- | --- | --- |
| D1 | Next.js App Router estático, sem CMS | Conteúdo pequeno, versionado e tipado | Conteúdo muda via PR + build |
| D2 | Conteúdo em `src/content` + `src/i18n` | Fonte única e traduções separadas | Build falha se faltar chave |
| D3 | Route group `(site)` com header/footer | Shell compartilhado; CV isolado | Currículo é documento |
| D4 | Páginas dedicadas + cases | SEO, narrativa e links profundos | Âncoras antigas preservadas |
| D5 | Filtros client-side por CSS | Cards no HTML para SEO/LLMs | `data-filter` + `data-categories` |
| D6 | JSON-LD por tipo de página e idioma | Melhor entendimento por buscadores | Builders em `seo.ts` |
| D7 | Scroll ao topo manual + hash guard | App Router restaurava scroll | `ScrollToTop` antes do motion |
| D8 | Reveals reinicializados por `pathname` | Evitar conteúdo invisível | Efeito depende da rota |
| D9 | Menu mobile sempre montado | Animação de saída sem unmount | `data-open` + `inert` |
| D10 | Wipe por `clip-path` + stagger | Abertura perceptível | Sombra recortada (trade-off) |
| D11 | Estado do menu derivado da rota | Fechar em back/forward | `openPath === pathname` |
| D12 | CV em 3 formatos, pré-gerado | ATS + performance | `npm run cv` após mudanças |
| D13 | Sem métricas inventadas | Credibilidade | Outcomes verificáveis |
| D14 | Analytics só na Vercel | Evitar script desnecessário | `process.env.VERCEL` |
| D15 | Marca gerada por script | Consistência de assets | `npm run brand` |
| D16 | i18n próprio, sem next-intl | Zero runtime no cliente; copy simples; controle de SEO | Camada ~200 linhas, tipada |
| D17 | `/pt` + `/en` com slugs traduzidos | URLs explícitas e simetria | Redirects para URLs antigas |
| D18 | Proxy só em `/` | Detecção sem custo por página | Bots recebem rewrite pt 200 |
| D19 | Dicionários server-only + props | Manter JS inicial | Nenhum texto traduzido no cliente |
| D20 | PDFs por idioma pré-gerados | Performance e ATS | Sem lib de PDF no bundle |

---

## 6. Invariantes

### 6.1 Conteúdo

- Fatos canônicos: **Luan Argolo Lemos**, “Luan Lemos”, Brasil · Remoto, início em **jun/2022**, Zee.Dog · Grupo PetzCobasi desde **mai/2025**, ADS/Estácio (2020–2022).
- Não inventar clientes, cargos, datas, números, depoimentos ou resultados.
- Português do Brasil e inglês natural; sem superlativos; verbos de ação no CV.
- Tempo de experiência calculado a partir de `profile.startDate`, nunca hardcoded.

### 6.2 Código e i18n

- Rotas **estáticas**; sem fetch em runtime, sem CMS.
- Conteúdo em `src/content/<locale>.ts`; UI/SEO em `src/i18n/messages/<locale>.ts`.
- Adicionar idioma = `locales.json` + dois arquivos de tradução (+ bandeira, se nova).
- Componentes client recebem strings por props; nunca importam `messages`/`content`.
- `src/i18n/routing.ts` é client-safe; não importar fatos/conteúdo nele.
- `lint`, `typecheck`, `i18n:check` e `build` precisam passar.

### 6.3 Acessibilidade e motion

- Um `h1` por página; landmarks e labels traduzidos.
- Nunca remover skip link, foco visível ou `prefers-reduced-motion`.
- Conteúdo não pode depender de JS.
- Menu/seletor fechados: `inert`/`aria-hidden` e não focáveis.

### 6.4 SEO

- Toda rota nova: metadata + canonical + hreflang, sitemap e JSON-LD.
- Projeto novo: slug, categorias, caseStudy, imagem/alt e textos nos dois idiomas.
- Manter um `h1`, breadcrumbs e links internos localizados.
- Bots nunca recebem redirect por idioma; `/` é a única rota com detecção.
- `NEXT_PUBLIC_SITE_URL` é a URL canônica em produção.

---

## 7. Como validar

### 7.1 Comandos

```bash
npm install
npm run lint
npm run typecheck
npm run i18n:check
npm run build
npm run start
npm run verify       # tudo acima em sequência (exceto start)
```

Auxiliares:

```bash
npm run images       # WebP + capas + blur
npm run cv           # PDFs pt/en (exige build + start)
npm run brand        # ícones e marca do OG
```

### 7.2 Checklist manual

- [ ] `/pt` e `/en` 200; todas as páginas nos dois idiomas.
- [ ] `/` humano → 307 para idioma; bot → 200 pt sem redirect.
- [ ] `/pt/about` e `/en/sobre` → 404.
- [ ] 404 em `/pt/*` e `/en/*` traduzido, com header/footer, design system e `noindex`.
- [ ] URLs antigas → 301 para pt.
- [ ] Troca de idioma preserva a página, sem reload, atualiza `html lang` e cookie.
- [ ] Nenhum `[data-reveal]` visível com opacity 0; scroll começa no topo.
- [ ] Nav ativa correta, inclusive em cases.
- [ ] Filtros: Brasil 4, Internacional 4, Shopify & Liquid 5, Deco.cx 7, Todos 8.
- [ ] Menu mobile e seletor: abre/fecha, `Escape`, foco, `inert`, sem overflow em 320/390 px.
- [ ] Fonte do HTML mostra conteúdo traduzido, title/description/canonical/hreflang/JSON-LD.
- [ ] `sitemap.xml` com 30 URLs e alternates absolutos; `llms.txt`/`cv.json` por idioma.
- [ ] axe = 0 em pt/en, dark/light, desktop/mobile e menu aberto.
- [ ] Lighthouse ≥ 90 mobile/desktop; CLS 0; JS ~154 KiB.
- [ ] PDFs pt/en: conteúdo, acentos, datas, metadados, `Lang`, texto selecionável e quebras.

### 7.3 Ferramentas

- **Playwright** (`playwright-core` + Chrome local) para navegação, teclado, estilos e screenshots em `.context/` (ignorado).
- **axe-core** para WCAG 2.1 A/AA.
- **Lighthouse** sobre `npm run build && npm run start`.
- **PyMuPDF** (local) para inspecionar texto/metadados dos PDFs.

---

## 8. Próximos planos (roadmap)

### 8.1 P0 — Publicar

- Resolver conta Vercel e DNS de `luanlemos.dev`.
- Merge do PR #1 (`v3` → `main`).
- Configurar `NEXT_PUBLIC_SITE_URL`, Analytics e Google Search Console.
- Enviar sitemap e validar os dois idiomas/hreflang em produção.

**Aceite:** domínio resolve, rotas 200, sitemap aceito, analytics ativo.

### 8.2 P1 — LCP dos cases e about

- Case mobile ≈ 3.1–3.2 s e about ≈ 3.2 s (performance 93–94).
- Investigar capa/avatar, srcset, preload, formato e reveal; meta < 2.5 s e ≥ 95 sem regressão.

### 8.3 P1 — Conteúdo verificado

- Levantar métricas reais (LCP/CLS, conversão, tempo de publicação) para os cases.
- Adicionar somente dados comprováveis; atualizar `llms.txt`/CV.

### 8.4 P1 — Segurança e CI

- Resolver 6 alertas do Dependabot (2 high, 3 moderate, 1 low).
- GitHub Actions: `npm ci`, lint, typecheck, i18n, build; smoke Playwright/axe opcional.

### 8.5 P2 — SEO contínuo

- Rich Results/Schema Validator; Search Console por idioma.
- Revisar titles/descriptions com consultas reais.
- Avaliar OG específica por case.

### 8.6 P2 — Testes

- Smoke de rotas, troca de idioma, filtros, menu, scroll.
- axe automatizado em pt/en/dark/light.

### 8.7 P3 — Polimento

- Sombra do painel mobile recortada pelo `clip-path`.
- Enquadramento de capas; hover/focus em toque.
- Manifest localizado, se necessário.

### 8.8 Ideias não aprovadas

- Espanhol, blog técnico, depoimentos, vídeos/GIFs, página de serviços.

---

## 9. Riscos

| Risco | Mitigação |
| --- | --- |
| Vercel bloqueada / DNS | Resolver externo; validar localmente |
| `main` desatualizada | Merge do PR antes do deploy |
| Tradução sem revisão humana | Revisar inglês, principalmente CV |
| LCP mobile 3.2 s | Otimizar capa/avatar (8.2) |
| Alertas de dependência | Atualizar (8.4) |
| PDF/llms fora de sincronia | `npm run cv`, `npm run i18n:check` |

---

## 10. Manual para o próximo agente

### 10.1 Ordem de leitura

1. `AGENTS.md`.
2. **Este arquivo**.
3. `README.md`.
4. Código em `src/app/[locale]`, `src/views`, `src/content`, `src/i18n`.

### 10.2 Antes de editar

- `git status`; branch `v3`; não trabalhe na `main`.
- Identifique: conteúdo (`src/content`), UI/SEO (`src/i18n/messages`), rota (`locales.json`/routing), visual (`globals.css`).
- Confirme fatos com o Luan.
- Verifique impacto em PDF, `llms.txt`, sitemap, JSON-LD, OG e hreflang.

### 10.3 Adicionar idioma

1. Adicionar entrada em `src/i18n/locales.json` com `code`, `label`, `shortLabel`, `flag`, `htmlLang`, `ogLocale`, `dateLocale`, `cvPath`, `cvFile`, `routes`.
2. Criar `src/i18n/messages/<code>.ts` (tipado como `Messages`) e `src/content/<code>.ts` (tipado como `ContentText`).
3. Adicionar bandeira em `src/components/i18n/flags.tsx` se necessário.
4. Rodar `npm run i18n:check`, `npm run verify`, `npm run cv`.

Rotas, sitemap, hreflang, seletor, OG e CV são automáticos.

### 10.4 Convenções

- Commits: `feat:`, `fix:`, `copy:`, `chore:`, `refactor:`, `docs:`.
- Código/nomes em inglês; copy em pt/en.
- Server components por padrão; `'use client'` só com estado/efeito/evento.
- Diffs pequenos; não reformatar arquivos não relacionados.

### 10.5 Definição de pronto

- [ ] `verify` verde.
- [ ] Rotas afetadas em pt/en, 1440/390, dark/light.
- [ ] Navegação começa no topo; reveals visíveis.
- [ ] Teclado e axe = 0.
- [ ] Metadata/canonical/hreflang/sitemap/llms corretos.
- [ ] PDFs regenerados se o CV mudou.
- [ ] PR/descrição atualizados.

### 10.6 O que não fazer

- Não publicar roadmap no site.
- Não adicionar CMS/backend sem pedido.
- Não trocar identidade/paleta por conta própria.
- Não “corrigir” fatos sem confirmação.
- Não declarar deploy concluído sem domínio/produção.
- Não remover as âncoras antigas da home (`#sobre`, `#experiencia`, `#projetos`, `#stack`, `#contato` em pt; equivalentes em en).

---

## 11. Glossário

- **Case:** página individual em `/pt/projeto/[slug]` ou `/en/project/[slug]`.
- **Deco.cx:** plataforma de e-commerce usada nas lojas Zee.Dog/Zee.Now.
- **BFF:** Backend for Frontend.
- **ATS/Gupy:** triagem de currículo; PDF e palavras-chave otimizados.
- **Locale:** pt/en; configuração em `locales.json`.
- **Reveal:** animação de entrada de `[data-reveal]`.
- **Wipe:** recorte `clip-path` do painel mobile.
- **Tokens:** variáveis semânticas em `globals.css`.
- **Estático (SSG):** HTML gerado no build, sem servidor em runtime.

---

### Histórico deste documento

| Data | Mudança |
| --- | --- |
| 2026-11-21 | Criação: objetivo, plano inicial, fases, arquitetura, decisões, invariantes, validação e roadmap |
| 2026-11-21 | Renomeado para `docs/PLAN.md` |
| 2026-11-21 | Atualizado com i18n pt/en, rotas localizadas, CV em dois idiomas e novas decisões |
| 2026-11-21 | 404 localizado com shell e design system |

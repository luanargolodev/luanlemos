# Luan Lemos — Portfólio

Portfólio pessoal de Luan Lemos, desenvolvedor front-end. O site é focado em recrutamento, networking e descoberta por buscadores/IA: apresenta quem ele é, a trajetória, os projetos selecionados, a stack e os canais de contato em **português e inglês**.

## Documentação

O plano completo do site está em [`docs/PLAN.md`](docs/PLAN.md): objetivo, histórico de fases, arquitetura, decisões, invariantes de conteúdo/SEO/acessibilidade, checklist de validação e roadmap. Leia antes de mudanças estruturais.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) com renderização estática
- React 19 + TypeScript
- Tailwind CSS 4 (CSS-first, tokens em `src/app/globals.css`)
- `next-themes` para dark/light sem flash
- `next/font` para Bricolage Grotesque, Inter e JetBrains Mono
- i18n próprio, tipado e server-only (sem biblioteca no bundle do cliente)
- Vercel Analytics

## Rodando localmente

Requisito: Node.js 20.9+ (recomendado 24 LTS).

```bash
npm install
npm run dev
```

O site fica em `http://localhost:3000` e redireciona `/` para `/pt` ou `/en` conforme o idioma do navegador/cookie.

## Scripts

```bash
npm run dev         # ambiente de desenvolvimento
npm run build       # build de produção (todas as páginas estáticas)
npm run start       # serve o build de produção
npm run lint        # oxlint
npm run typecheck   # TypeScript sem emitir arquivos
npm run i18n:check  # valida locale, rotas, arquivos de tradução e bandeiras
npm run verify      # lint + typecheck + i18n + build
npm run images      # otimiza screenshots e avatar para WebP + blur placeholders
npm run cv          # regenera os PDFs de currículo (pt e en) a partir das páginas
npm run brand       # regenera favicon, apple icon, ícone 512 e marca do OG
```

## Idiomas e rotas

| Idioma | Home | Sobre | Experiência | Projetos | Case | Stack | Contato | Currículo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pt | `/pt` | `/pt/sobre` | `/pt/experiencia` | `/pt/projetos` | `/pt/projeto/[slug]` | `/pt/stack` | `/pt/contato` | `/pt/curriculo` |
| en | `/en` | `/en/about` | `/en/experience` | `/en/projects` | `/en/project/[slug]` | `/en/stack` | `/en/contact` | `/en/resume` |

- `/` detecta o idioma apenas na primeira visita e respeita o cookie `NEXT_LOCALE`; bots recebem `/pt` com **200 e sem redirect**.
- URLs antigas sem prefixo (`/sobre`, `/projetos`, `/projeto/[slug]`, `/curriculo`) redirecionam para pt.
- Cada página tem canonical, `hreflang` (`pt-BR`, `en`, `x-default`), metadata e JSON-LD próprios.
- A troca de idioma é navegação client-side e preserva a página atual.

## Estrutura

```text
src/
  app/
    [locale]/
      layout.tsx              # root layout: html lang, fontes, tema, motion, JSON-LD
      (site)/
        layout.tsx            # header + main + footer
        [[...path]]/page.tsx  # resolve rotas localizadas + metadata
      cv/page.tsx             # currículo web (sem shell)
      cv.json/route.ts        # currículo JSON por idioma
      llms.txt/route.ts       # resumo para LLMs por idioma
      opengraph-image.tsx     # OG localizada
      not-found.tsx
    global-not-found.tsx      # 404 global (fora do layout)
    sitemap.ts
    robots.ts
  components/
    i18n/                     # seletor de idioma + bandeiras SVG
    layout/                   # header, nav, menu mobile, CV, tema, footer, marca
    sections/                 # Hero, previews, Experience, TechStack, Contact...
    ui/                       # botões, breadcrumbs, PageCTA, cards
  content/
    facts.ts                  # fatos compartilhados (slugs, datas, URLs, stack)
    pt.ts / en.ts             # conteúdo estruturado por idioma
    types.ts
    index.ts                  # getContent(locale)
  i18n/
    locales.json             # ÚNICA configuração de idiomas e rotas
    config.ts                 # helpers de locale
    routing.ts                # href(), matchPath(), alternates()
    static-paths.ts
    format.ts                 # Intl: datas, duração, números
    messages/
      pt.ts / en.ts           # UI, labels, SEO
      index.ts                # getMessages(locale), fallback pt
  views/                      # Home, About, Experience, Projects, Project, Stack, Contact, Resume
  proxy.ts                    # detecção de idioma só em "/"
public/
  images/projects/            # screenshots otimizados (WebP)
  images/projects/cover/      # capas 1200w usadas nos cases
  icons/tech/                 # ícones das tecnologias
  cv/                         # currículos PDF pt/en
assets/
  project-images/             # screenshots originais
  profile/                    # avatar original
scripts/
  optimize-images.mjs
  generate-cv.mjs             # gera PDFs por idioma
  generate-brand.mjs
  check-i18n.mjs
```

## Conteúdo e tradução

- Fatos compartilhados ficam em `src/content/facts.ts` (slugs, anos, stack, imagens, empresas, links).
- Textos ficam em `src/content/pt.ts` e `src/content/en.ts`, tipados por `ContentText`.
- UI/SEO ficam em `src/i18n/messages/pt.ts` e `en.ts`, tipados por `Messages`.
- Se faltar uma chave, o build falha; em runtime há fallback para pt.
- `npm run i18n:check` valida arquivos, rotas, flags e o registro em `locales.json`.

### Adicionar um idioma

1. Adicionar o idioma em `src/i18n/locales.json` (código, nome, bandeira, `htmlLang`, `ogLocale`, `dateLocale`, caminhos e arquivo do CV).
2. Criar `src/i18n/messages/<code>.ts` e `src/content/<code>.ts`.
3. Adicionar a bandeira em `src/components/i18n/flags.tsx` se ainda não existir.
4. Rodar `npm run verify && npm run cv`.

Rotas, hreflang, sitemap, seletor, OG e currículo passam a funcionar sem alterar componentes.

## Currículo

- **Web:** `/pt/curriculo` e `/en/resume` — HTML semântico, indexável, com hreflang e JSON-LD.
- **PDF:** `public/cv/luan-argolo-lemos-desenvolvedor-front-end.pdf` e `...-front-end-developer.pdf` — uma coluna, Arial no print, texto selecionável, metadados e idioma do PDF.
- **JSON:** `/pt/cv.json` e `/en/cv.json`.

Os três formatos derivam do mesmo conteúdo localizado. Depois de editar `src/content/*` ou `src/views/resume.tsx`:

```bash
npm run build
npm start           # em outro terminal
npm run cv
```

## Motion

- Reveals no scroll com `IntersectionObserver` e stagger nos cards.
- Marquee de tecnologias, progresso de leitura e item ativo na navegação.
- Glow que segue o cursor no hero, tilt + spotlight nos cards e parallax sutil no retrato.
- Menu mobile com wipe, stagger dos itens e morph do ícone hambúrguer ↔ X.
- Seletor de idioma com links reais, `hreflang`, `lang` e cookie.
- Botão “voltar ao topo”, com scroll suave e respeito a `prefers-reduced-motion`.
- Tudo desativado em `prefers-reduced-motion`; sem JavaScript, o conteúdo continua visível.

## SEO

- Metadata, canonical e Open Graph únicos por página e idioma.
- `hreflang` recíproco com `x-default` em pt; `og:locale`/`alternate`.
- JSON-LD global (`Person`, `WebSite`) e por página (`AboutPage`, `CollectionPage` + `ItemList`, `CreativeWork`, `ContactPage`, `ProfilePage`, `BreadcrumbList`).
- `sitemap.xml` com todas as URLs e alternates absolutos.
- `robots.txt` liberando buscadores e crawlers de IA.
- `llms.txt` e `cv.json` por idioma.
- Filtros de projeto client-side mantendo todos os cards no HTML.

## Deploy

O deploy é feito na [Vercel](https://vercel.com), a partir do repositório `luanargolodev/luanlemos`.

1. Fazer merge do PR `v3` → `main`.
2. Configurar `NEXT_PUBLIC_SITE_URL=https://luanlemos.dev`.
3. Apontar o domínio e o DNS (incluindo `www` → apex).
4. Ativar Vercel Analytics.
5. Enviar `https://luanlemos.dev/sitemap.xml` no Google Search Console e validar os idiomas.

Pull requests e branches geram preview deployments automaticamente.

## Checklist de qualidade

- WCAG 2.1 AA validado com axe (pt/en, dark/light, mobile e menu aberto)
- Lighthouse ≥ 90 nas quatro categorias; home e desktop em 100 na medição local
- LCP/CLS monitorados; CLS 0
- Respeito a `prefers-reduced-motion` e `prefers-color-scheme`
- Imagens em WebP, com `sizes` e blur placeholder
- Navegação por teclado, skip link e foco visível
- HTML completo e traduzido no primeiro carregamento (sem depender de JS)

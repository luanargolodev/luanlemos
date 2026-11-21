# Luan Lemos — Portfólio

Portfólio pessoal de Luan Lemos, desenvolvedor front-end. O site é focado em recrutamento e networking: apresenta quem ele é, a trajetória, os projetos selecionados, a stack e os canais de contato.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) com renderização estática
- React 19 + TypeScript
- Tailwind CSS 4 (CSS-first, tokens em `src/app/globals.css`)
- `next-themes` para dark/light sem flash
- `next/font` para Bricolage Grotesque, Inter e JetBrains Mono
- Vercel Analytics

## Rodando localmente

Requisito: Node.js 20.9+ (recomendado 24 LTS).

```bash
npm install
npm run dev
```

O site fica em `http://localhost:3000`.

## Scripts

```bash
npm run dev        # ambiente de desenvolvimento
npm run build      # build de produção (gera páginas estáticas)
npm run start      # serve o build de produção
npm run lint       # oxlint
npm run typecheck  # TypeScript sem emitir arquivos
npm run images     # otimiza screenshots e avatar para WebP + blur placeholders
npm run cv         # regenera o PDF do currículo a partir de /curriculo
```

## Estrutura

```text
src/
  app/                 # rotas, metadata, OG image, robots, sitemap, llms.txt
  components/
    layout/            # header, menu mobile, tema, footer
    sections/          # Hero, About, Experience, Projects, TechStack, Certifications, Contact
    ui/                # botões, tags, cards de projeto, ícones, section heading
  data/                # TODO o conteúdo do site (edite aqui)
  lib/                 # duração de experiência, SEO/JSON-LD, utilitários
  types/
public/
  images/projects/     # screenshots otimizados (WebP)
  icons/tech/          # ícones das tecnologias
assets/
  project-images/      # screenshots originais (não são servidos)
  profile/             # avatar original
scripts/
  optimize-images.mjs  # gera WebP + blur placeholders a partir das imagens originais
```

## Atualizando o conteúdo

Todo o conteúdo fica em `src/data/`:

| Arquivo | O que atualizar |
| --- | --- |
| `profile.ts` | nome, bio, e-mail, telefone, links, CV, formação, início da carreira |
| `experience.ts` | cargos, empresas, períodos, resultados e stack |
| `projects.ts` | projetos em destaque (nacionais e internacionais) |
| `tech.ts` | grupos de tecnologias e ícones |
| `certifications.ts` | certificados, hackathons e reconhecimentos |
| `resume.ts` | resumo, competências e projetos do currículo |
| `site.ts` | URL canônica, navegação, keywords e textos de SEO |

O tempo total de experiência é calculado automaticamente a partir de `profile.startDate` em `src/lib/dates.ts`. Para atualizar o valor, basta ajustar a data de início (formato `AAAA-MM`). O cálculo é feito em tempo de build; um novo deploy atualiza o número.

### Imagens de projeto

Os screenshots originais ficam em `assets/project-images/`. Depois de adicionar ou trocar uma imagem:

```bash
npm run images
```

O script gera as versões WebP em `public/images/projects/` e os blur placeholders em `src/data/image-blur.json`. Se o slug do projeto mudar, atualize o campo `image` em `projects.ts`.

## Motion

- Reveals no scroll com `IntersectionObserver` e stagger nos cards.
- Marquee de tecnologias, progresso de leitura e item ativo na navegação.
- Glow que segue o cursor no hero, tilt + spotlight nos cards e parallax sutil no retrato.
- Tudo desativado em `prefers-reduced-motion`; sem JavaScript, o conteúdo continua visível.

## Currículo

O currículo tem três formatos, todos gerados a partir do mesmo conteúdo:

- **Web:** `/curriculo` — HTML semântico, indexável e fácil de ler por agentes.
- **PDF:** `/cv/luan-argolo-lemos-desenvolvedor-front-end.pdf` — layout de uma coluna, fonte padrão e texto selecionável, pensado para ATS/Gupy.
- **JSON:** `/cv.json` — dados estruturados para automações e agentes de IA.

Para regenerar o PDF depois de editar `src/data/resume.ts` ou `/curriculo`:

```bash
npm run build
npm start          # em outro terminal
npm run cv
```

O script usa o Chrome instalado (`channel: 'chrome'`) ou o caminho em `CHROME_PATH`, imprime a página `/curriculo` em A4 e grava os metadados do PDF.

## SEO

- Metadata completa em `src/app/layout.tsx` (via `src/lib/seo.ts`)
- Open Graph dinâmico em `src/app/opengraph-image.tsx` (1200×630)
- JSON-LD `Person`, `WebSite` e `ProfilePage`
- `sitemap.xml`, `robots.txt` (com crawlers de IA liberados) e `llms.txt`
- Conteúdo principal renderizado estaticamente, com HTML semântico

## Deploy

O deploy é feito na [Vercel](https://vercel.com), a partir do repositório `luanargolodev/luanlemos`.

1. Importe o repositório na Vercel (framework detectado automaticamente: Next.js).
2. Configure `NEXT_PUBLIC_SITE_URL=https://luanlemos.dev` nas variáveis de ambiente.
3. Aponte o domínio `luanlemos.dev` (e redirecione `www` para o domínio principal).
4. Ative o Vercel Analytics no projeto.
5. Após o deploy, envie `https://luanlemos.dev/sitemap.xml` no Google Search Console.

Pull requests e branches geram preview deployments automaticamente.

## Checklist de qualidade

- WCAG 2.1 AA validado com axe (dark, light e mobile)
- Lighthouse ≥ 95 nas quatro categorias (executar sobre `npm run build && npm run start`)
- Respeito a `prefers-reduced-motion` e `prefers-color-scheme`
- Imagens em WebP, com `sizes` e blur placeholder
- Navegação por teclado, skip link e foco visível

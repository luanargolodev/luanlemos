export interface Project {
  slug: string
  title: string
  client: string
  year: number
  summary: string
  outcome: string
  stack: string[]
  image: string
  imageAlt: string
  url?: string
  repo?: string
  featured: boolean
}

export const featuredProjects: Project[] = [
  {
    slug: 'zeedog',
    title: 'Zee.Dog',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'Loja de e-commerce completa na Deco.cx, da vitrine ao checkout.',
    outcome:
      'Operação diária em uma marca de alcance nacional: componentes, conteúdo e performance de ponta a ponta.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    image: '/images/projects/zeedog.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Brasil',
    url: 'https://www.zeedog.com.br',
    featured: true,
  },
  {
    slug: 'zeenow',
    title: 'Zee.Now',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'E-commerce de entrega rápida para o mercado pet, também na Deco.cx.',
    outcome:
      'Experiências que mudam por região e janela de entrega — preço, estoque e disponibilidade em tempo real.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    image: '/images/projects/zeenow.webp',
    imageAlt: 'Página inicial da loja Zee.Now',
    url: 'https://www.zeenow.com.br',
    featured: true,
  },
  {
    slug: 'blog',
    title: 'Blog Zee.Now',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'Blog completo na Deco.cx, com conteúdo editorial, busca e CMS.',
    outcome:
      'Conteúdo e e-commerce no mesmo lugar: o time publica sem depender de deploy.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Drizzle', 'Tailwind CSS'],
    image: '/images/projects/blog.webp',
    imageAlt: 'Página inicial do blog Zee.Now',
    url: 'https://www.zeenow.com.br/blog',
    featured: true,
  },
  {
    slug: 'zeedog-jp',
    title: 'Zee.Dog Japão',
    client: 'Zee.Dog · Japão',
    year: 2026,
    summary:
      'Loja internacional da Zee.Dog no Japão, na Deco.cx com catálogo e checkout na Shopify.',
    outcome:
      'Expansão para um novo mercado e idioma, mantendo a experiência de marca e a operação de catálogo na Shopify.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    image: '/images/projects/zeedog-jp.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Japão',
    url: 'https://www.zeedog.jp',
    featured: true,
  },
  {
    slug: 'zeedog-eu',
    title: 'Zee.Dog Europa',
    client: 'Zee.Dog · Europa',
    year: 2026,
    summary:
      'Loja europeia da Zee.Dog com catálogo em inglês, envio internacional e checkout na Shopify.',
    outcome:
      'Uma operação multi-mercado na Deco.cx, com conteúdo e comércio coordenados entre Brasil e Europa.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    image: '/images/projects/zeedog-eu.webp',
    imageAlt: 'Página inicial da loja Zee.Dog na Europa',
    url: 'https://www.zeedog.eu',
    featured: true,
  },
  {
    slug: 'zeedog-au',
    title: 'Zee.Dog Austrália',
    client: 'Zee.Dog · Austrália',
    year: 2026,
    summary:
      'Loja australiana da Zee.Dog, com catálogo local, moeda própria e checkout na Shopify.',
    outcome:
      'Adaptação de moeda, frete e catálogo para o mercado australiano sem duplicar a arquitetura.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    image: '/images/projects/zeedog-au.webp',
    imageAlt: 'Página inicial da loja Zee.Dog na Austrália',
    url: 'https://www.zeedog.au',
    featured: true,
  },
  {
    slug: 'zeedog-pe',
    title: 'Zee.Dog Peru',
    client: 'Zee.Dog · Peru',
    year: 2026,
    summary:
      'Loja peruana da Zee.Dog, com preços em soles, entrega local e checkout na Shopify.',
    outcome:
      'Novo mercado na América Latina com a mesma base de componentes e integração Shopify.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    image: '/images/projects/zeedog-pe.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Peru',
    url: 'https://www.zeedog.pe',
    featured: true,
  },
]

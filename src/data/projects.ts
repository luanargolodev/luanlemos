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
    client: 'Zee.Dog · Grupo PetzCobasi',
    year: 2025,
    summary:
      'Loja de e-commerce completa na Deco.cx, da vitrine ao checkout.',
    outcome:
      'Operação diária em uma marca de alcance nacional: componentes, conteúdo e performance de ponta a ponta.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    image: '/images/projects/zeedog.webp',
    imageAlt: 'Página inicial da loja Zee.Dog',
    url: 'https://www.zeedog.com.br',
    featured: true,
  },
  {
    slug: 'zeenow',
    title: 'Zee.Now',
    client: 'Zee.Dog · Grupo PetzCobasi',
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
    client: 'Zee.Dog · Grupo PetzCobasi',
    year: 2025,
    summary:
      'Blog completo na Deco.cx, com conteúdo editorial, busca e CMS.',
    outcome:
      'Conteúdo e e-commerce no mesmo lugar: o time publica sem depender de deploy.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Drizzle', 'Tailwind CSS'],
    image: '/images/projects/blog.webp',
    imageAlt: 'Página inicial do blog Zee.Now',
    featured: true,
  },
  {
    slug: 'quick-view',
    title: 'Quick View',
    client: 'Náutika · Agência e-Plus',
    year: 2022,
    summary:
      'Visualização rápida de produto com galeria, variações e compra sem sair da vitrine.',
    outcome:
      'Menos cliques até o carrinho — e meu primeiro grande desafio de interação em VTEX.',
    stack: ['HTML', 'Sass', 'JavaScript', 'VTEX'],
    image: '/images/projects/quick-view.webp',
    imageAlt: 'Modal de quick view da loja Náutika',
    url: 'https://www.nautikalazer.com.br/camping',
    featured: true,
  },
  {
    slug: 'openbox',
    title: 'Black Friday Openbox',
    client: 'Openbox · Agência e-Plus',
    year: 2022,
    summary:
      'Landing page de campanha com captura de leads e navegação por departamentos.',
    outcome:
      'Uma campanha sazonal de alto tráfego, construída para carregar rápido e converter.',
    stack: ['HTML', 'Sass', 'JavaScript'],
    image: '/images/projects/lp-openbox.webp',
    imageAlt: 'Landing page de Black Friday da Openbox',
    url: 'https://www.openbox2.com.br/blackfriday',
    featured: true,
  },
  {
    slug: 'cavenaghi',
    title: 'Commander Cavenaghi',
    client: 'Cavenaghi · Agência e-Plus',
    year: 2022,
    summary:
      'Página de lançamento do Jeep Commander adaptado, com narrativa visual e hotspots.',
    outcome:
      'Contar um produto complexo com scroll e detalhes sem perder legibilidade no mobile.',
    stack: ['HTML', 'Sass', 'JavaScript'],
    image: '/images/projects/lp-cavenaghi.webp',
    imageAlt: 'Landing page do Jeep Commander adaptado da Cavenaghi',
    featured: true,
  },
]

export interface OtherProject {
  title: string
  client: string
  year: number
  stack: string[]
  url?: string
}

export const otherProjects: OtherProject[] = [
  {
    title: 'Menu Êbba Móveis',
    client: 'Êbba Móveis',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
    url: 'https://www.ebbamoveis.com.br/',
  },
  {
    title: 'Menu Todo Moda',
    client: 'Todo Moda',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
    url: 'https://br.todomoda.com/',
  },
  {
    title: 'Busca Atacadão',
    client: 'Atacadão Sexy Shop',
    year: 2022,
    stack: ['React', 'VTEX IO'],
    url: 'https://www.sexshopatacadao.com.br/cabresto?_q=cabresto&map=ft',
  },
  {
    title: 'Popup Todo Moda',
    client: 'Todo Moda',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
    url: 'https://br.todomoda.com/',
  },
  {
    title: 'Mosaico Vestrio',
    client: 'Vestrio Lingerie',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
  },
  {
    title: 'Menu Kaue Plus Size',
    client: 'Kaue Plus Size',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
  },
  {
    title: 'Ampliar Foto Vestrio',
    client: 'Vestrio Lingerie',
    year: 2022,
    stack: ['HTML', 'Sass', 'JavaScript'],
  },
]

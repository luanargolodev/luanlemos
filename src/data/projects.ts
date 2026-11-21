export type ProjectCategory = 'brasil' | 'internacional' | 'shopify' | 'deco'

export interface ProjectCaseStudy {
  role: string
  context: string[]
  challenge: string
  approach: string[]
  highlights: string[]
}

export interface Project {
  slug: string
  title: string
  client: string
  year: number
  summary: string
  outcome: string
  stack: string[]
  categories: ProjectCategory[]
  image: string
  imageAlt: string
  url?: string
  repo?: string
  featured: boolean
  caseStudy: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    slug: 'zee-dog',
    title: 'Zee.Dog',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'Loja de e-commerce completa na Deco.cx, da vitrine ao checkout.',
    outcome:
      'Operação diária em uma marca de alcance nacional: componentes, conteúdo e performance de ponta a ponta.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/zeedog.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Brasil',
    url: 'https://www.zeedog.com.br',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'A Zee.Dog é uma marca brasileira de acessórios para cães e gatos com uma operação de e-commerce em vários canais.',
        'No time de front-end, participei da evolução da loja principal na Deco.cx, do catálogo e das vitrines às campanhas de maior visibilidade.',
      ],
      challenge:
        'Evoluir uma loja em produção, com muitos SKUs e times trabalhando em paralelo, sem perder consistência visual, performance ou acessibilidade.',
      approach: [
        'Componentes reutilizáveis em Preact, TypeScript e Tailwind CSS para vitrines e páginas de campanha.',
        'Integrações com o backend da Deco.cx para conteúdo, catálogo e fluxo de compra.',
        'Parceria com design e produto para transformar campanhas em experiências coerentes com a marca.',
        'Atenção a estados de carregamento, responsividade e detalhes de interface.',
      ],
      highlights: [
        'Base de componentes usada em outras frentes do ecossistema Zee.Dog.',
        'Operação contínua em uma marca de alcance nacional.',
      ],
    },
  },
  {
    slug: 'zee-now',
    title: 'Zee.Now',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'E-commerce de entrega rápida para o mercado pet, também na Deco.cx.',
    outcome:
      'Experiências que mudam por região e janela de entrega — preço, estoque e disponibilidade em tempo real.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/zeenow.webp',
    imageAlt: 'Página inicial da loja Zee.Now',
    url: 'https://www.zeenow.com.br',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'O Zee.Now é a operação de entrega rápida da Zee.Dog, com uma experiência de compra que muda conforme região, estoque e janela de entrega.',
        'O desafio era fazer o e-commerce parecer simples mesmo lidando com dados que mudam em tempo real.',
      ],
      challenge:
        'Comunicar disponibilidade, preço e prazo sem sobrecarregar a interface e sem perder a identidade da marca.',
      approach: [
        'Páginas de campanha e vitrines com dados de disponibilidade por região.',
        'Componentes de produto e conteúdo compartilhados com a operação principal.',
        'Hierarquia visual clara para decisões rápidas de compra.',
        'Ajustes de performance e responsividade em telas pequenas.',
      ],
      highlights: [
        'Experiência localizada que combina velocidade e clareza.',
        'Reaproveitamento de padrões entre Zee.Dog e Zee.Now.',
      ],
    },
  },
  {
    slug: 'blog-zee-now',
    title: 'Blog Zee.Now',
    client: 'Zee.Dog · Brasil',
    year: 2025,
    summary:
      'Blog completo na Deco.cx, com conteúdo editorial, busca e CMS.',
    outcome:
      'Conteúdo e e-commerce no mesmo lugar: o time publica sem depender de deploy.',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Drizzle', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/blog.webp',
    imageAlt: 'Página inicial do blog Zee.Now',
    url: 'https://www.zeenow.com.br/blog',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'O Blog do Zee.Now é uma frente editorial dentro do ecossistema de e-commerce, com conteúdo sobre comportamento, cuidados e produtos para pets.',
        'A publicação precisava ser independente do ciclo de deploy da loja.',
      ],
      challenge:
        'Construir uma experiência editorial com busca, listagem e leitura agradável, mantendo o conteúdo fácil de publicar pelo time.',
      approach: [
        'Estrutura de conteúdo na Deco.cx integrada a um CMS com Drizzle.',
        'Componentes de listagem, categorias e busca.',
        'Layout editorial responsivo com foco em leitura.',
        'Integração com a navegação e a identidade visual do Zee.Now.',
      ],
      highlights: [
        'O time publica conteúdo sem depender de deploy.',
        'Conteúdo e e-commerce no mesmo ecossistema.',
      ],
    },
  },
  {
    slug: 'zee-dog-japao',
    title: 'Zee.Dog Japão',
    client: 'Zee.Dog · Japão',
    year: 2026,
    summary:
      'Loja internacional da Zee.Dog no Japão, na Deco.cx com catálogo e checkout na Shopify.',
    outcome:
      'Expansão para um novo mercado e idioma, mantendo a experiência de marca e a operação de catálogo na Shopify.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-jp.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Japão',
    url: 'https://www.zeedog.jp',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'A Zee.Dog Japão é a operação internacional da marca no mercado japonês.',
        'O projeto combinou a camada de experiência em Deco.cx com o catálogo e o checkout da Shopify.',
      ],
      challenge:
        'Adaptar idioma, moeda, catálogo e jornada de compra para um mercado com expectativas e comportamento próprios.',
      approach: [
        'Interface em japonês e conteúdo localizado na Deco.cx.',
        'Integração com Shopify para catálogo e checkout.',
        'Componentes compartilhados com as demais operações internacionais.',
        'Atenção a performance e consistência visual.',
      ],
      highlights: [
        'Novo mercado sem duplicar a arquitetura do front-end.',
        'Base para a expansão internacional da marca.',
      ],
    },
  },
  {
    slug: 'zee-dog-europa',
    title: 'Zee.Dog Europa',
    client: 'Zee.Dog · Europa',
    year: 2026,
    summary:
      'Loja europeia da Zee.Dog com catálogo em inglês, envio internacional e checkout na Shopify.',
    outcome:
      'Uma operação multi-mercado na Deco.cx, com conteúdo e comércio coordenados entre Brasil e Europa.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-eu.webp',
    imageAlt: 'Página inicial da loja Zee.Dog na Europa',
    url: 'https://www.zeedog.eu',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'A operação europeia da Zee.Dog atende vários países com envio internacional.',
        'O site combina a camada de experiência da Deco.cx com a operação de catálogo e checkout da Shopify.',
      ],
      challenge:
        'Manter uma experiência de compra clara em inglês para públicos de países diferentes, com regras de envio e moeda.',
      approach: [
        'Conteúdo e navegação em inglês.',
        'Integração Shopify para catálogo e checkout.',
        'Componentes reutilizados entre as lojas internacionais.',
        'Foco em clareza de frete, preço e disponibilidade.',
      ],
      highlights: [
        'Operação multi-mercado com uma base de componentes.',
        'Consistência entre Brasil e Europa.',
      ],
    },
  },
  {
    slug: 'zee-dog-australia',
    title: 'Zee.Dog Austrália',
    client: 'Zee.Dog · Austrália',
    year: 2026,
    summary:
      'Loja australiana da Zee.Dog, com catálogo local, moeda própria e checkout na Shopify.',
    outcome:
      'Adaptação de moeda, frete e catálogo para o mercado australiano sem duplicar a arquitetura.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-au.webp',
    imageAlt: 'Página inicial da loja Zee.Dog na Austrália',
    url: 'https://www.zeedog.au',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'A loja australiana da Zee.Dog tem catálogo, moeda e comunicação próprios.',
        'O projeto faz parte da expansão internacional da marca com Deco.cx e Shopify.',
      ],
      challenge:
        'Adaptar a experiência para o mercado australiano, incluindo moeda, frete e expectativas locais.',
      approach: [
        'Conteúdo localizado e navegação em inglês.',
        'Integração Shopify para catálogo e checkout.',
        'Componentes compartilhados com as outras lojas.',
        'Foco em performance e responsividade.',
      ],
      highlights: [
        'Adaptação de mercado sem duplicar código.',
        'Experiência consistente com as outras operações.',
      ],
    },
  },
  {
    slug: 'zee-dog-peru',
    title: 'Zee.Dog Peru',
    client: 'Zee.Dog · Peru',
    year: 2026,
    summary:
      'Loja peruana da Zee.Dog, com preços em soles, entrega local e checkout na Shopify.',
    outcome:
      'Novo mercado na América Latina com a mesma base de componentes e integração Shopify.',
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-pe.webp',
    imageAlt: 'Página inicial da loja Zee.Dog no Peru',
    url: 'https://www.zeedog.pe',
    featured: true,
    caseStudy: {
      role: 'Front-end Pleno',
      context: [
        'A Zee.Dog Peru atende o mercado peruano com preços em soles e entrega local.',
        'O site usa a mesma base de front-end das outras operações internacionais.',
      ],
      challenge:
        'Localizar preço, frete e conteúdo para o Peru mantendo a identidade e a performance.',
      approach: [
        'Conteúdo em espanhol.',
        'Integração Shopify para catálogo e checkout.',
        'Componentes reutilizados e ajustes de layout.',
        'Atenção a clareza de entrega e preço.',
      ],
      highlights: [
        'Novo mercado na América Latina com a mesma base.',
        'Consistência entre as lojas internacionais.',
      ],
    },
  },
  {
    slug: 'nannacay',
    title: 'Nannacay',
    client: 'Nannacay',
    year: 2026,
    summary:
      'Loja da marca de moda Nannacay, construída com Liquid e Shopify.',
    outcome:
      'Projeto de ponta a ponta: tema em Liquid, vitrines, páginas de produto e jornada de compra sob medida na Shopify.',
    stack: ['Liquid', 'Shopify'],
    categories: ['brasil', 'shopify'],
    image: '/images/projects/nannacay.webp',
    imageAlt: 'Página inicial da loja Nannacay',
    url: 'https://www.nannacay.com.br/',
    featured: true,
    caseStudy: {
      role: 'Desenvolvedor Front-end',
      context: [
        'A Nannacay é uma marca de moda brasileira com presença internacional.',
        'O projeto foi o desenvolvimento de um tema Shopify em Liquid, com vitrines, páginas de produto e jornada de compra.',
      ],
      challenge:
        'Traduzir a identidade visual da marca em um tema Shopify completo, sem perder performance e facilidade de manutenção.',
      approach: [
        'Desenvolvimento do tema em Liquid.',
        'Seções e componentes para vitrines, produto e conteúdo editorial.',
        'Layout responsivo e atenção à performance.',
        'Integração com recursos nativos da Shopify.',
      ],
      highlights: [
        'Tema de ponta a ponta em Liquid.',
        'Experiência de marca consistente no Shopify.',
      ],
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

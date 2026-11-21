import type {
  CertificationFact,
  ExperienceFact,
  ProfileFact,
  ProjectFact,
  TechFact,
} from './types'

export const profileFacts: ProfileFact = {
  fullName: 'Luan Argolo Lemos',
  name: 'Luan Lemos',
  email: 'ipsluan@icloud.com',
  phone: '+55 73 99193-3732',
  phoneHref: 'tel:+5573991933732',
  whatsapp:
    'https://wa.me/5573991933732?text=Ol%C3%A1%2C%20Luan!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
  startDate: '2022-06',
  avatar: '/images/profile/avatar.webp',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luanargolo/',
      handle: 'in/luanargolo',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/luanargolodev',
      handle: 'luanargolodev',
    },
  ],
  education: {
    institution: 'Estácio',
    period: '2020 — 2022',
  },
}

export const experienceFacts: ExperienceFact[] = [
  {
    id: 'zeedog-frontend-pleno',
    company: 'Zee.Dog · Grupo PetzCobasi',
    companyUrl: 'https://www.zeedog.com.br',
    start: '2025-05',
    stack: [
      'Deco.cx',
      'Preact',
      'TypeScript',
      'Deno',
      'Tailwind CSS',
      'Shopify',
      'BFF',
    ],
  },
  {
    id: 'zeedog-frontend-junior',
    company: 'Zee.Dog · Grupo PetzCobasi',
    companyUrl: 'https://www.zeedog.com.br',
    start: '2023-05',
    end: '2025-05',
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
  },
  {
    id: 'eplus-frontend-junior',
    company: 'Agência e-Plus',
    start: '2022-06',
    end: '2023-03',
    stack: ['HTML', 'Sass', 'JavaScript', 'React', 'VTEX IO'],
  },
]

export const techFacts: TechFact[] = [
  {
    id: 'frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'next' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Sass', icon: 'sass' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Preact', icon: 'preact' },
      { name: 'Styled Components', icon: 'styled' },
    ],
  },
  {
    id: 'ecommerce',
    items: [
      { name: 'Deco.cx', icon: 'deco' },
      { name: 'VTEX', icon: 'vtex' },
      { name: 'Shopify', icon: 'shopify' },
      { name: 'Liquid', icon: 'liquid' },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'BFF (Backend for Frontend)', icon: 'bff' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Drizzle', icon: 'drizzle' },
    ],
  },
  {
    id: 'analytics',
    items: [
      { name: 'Google Tag Manager', icon: 'googletagmanager' },
      { name: 'Google Analytics 4', icon: 'googleanalytics' },
    ],
  },
  {
    id: 'tools',
    items: [
      { name: 'Deno', icon: 'deno' },
      { name: 'Bun', icon: 'bun' },
      { name: 'Git', icon: 'git' },
    ],
  },
]

export const certificationFacts: CertificationFact[] = [
  {
    id: 'deco-camp-2025',
    title: 'deco.camp 2025',
    issuer: 'deco.cx',
    year: '2025',
    kind: 'education',
  },
  {
    id: 'hackathon-htmx-2025',
    title: '5th Hackathon deco.cx — HTMX Edition',
    issuer: 'deco.cx',
    year: '2025',
    kind: 'participation',
  },
  {
    id: 'pawz-2024',
    title: 'Menção Honrosa — V Hackathon deco.cx',
    issuer: 'deco.cx',
    year: '2024',
    kind: 'recognition',
  },
  {
    id: 'hackathon-2023',
    title: 'Finalista — II Hackathon deco.cx',
    issuer: 'deco.cx',
    year: '2023',
    kind: 'recognition',
  },
]

export const projectFacts: ProjectFact[] = [
  {
    slug: 'zee-dog',
    year: 2025,
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/zeedog.webp',
    url: 'https://www.zeedog.com.br',
    featured: true,
  },
  {
    slug: 'zee-now',
    year: 2025,
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/zeenow.webp',
    url: 'https://www.zeenow.com.br',
    featured: true,
  },
  {
    slug: 'blog-zee-now',
    year: 2025,
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Drizzle', 'Tailwind CSS'],
    categories: ['brasil', 'deco'],
    image: '/images/projects/blog.webp',
    url: 'https://www.zeenow.com.br/blog',
    featured: true,
  },
  {
    slug: 'zee-dog-japao',
    year: 2026,
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-jp.webp',
    url: 'https://www.zeedog.jp',
    featured: true,
  },
  {
    slug: 'zee-dog-europa',
    year: 2026,
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-eu.webp',
    url: 'https://www.zeedog.eu',
    featured: true,
  },
  {
    slug: 'zee-dog-australia',
    year: 2026,
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-au.webp',
    url: 'https://www.zeedog.au',
    featured: true,
  },
  {
    slug: 'zee-dog-peru',
    year: 2026,
    stack: ['Deco.cx', 'Deno', 'Preact', 'Tailwind CSS', 'Shopify'],
    categories: ['internacional', 'shopify', 'deco'],
    image: '/images/projects/zeedog-pe.webp',
    url: 'https://www.zeedog.pe',
    featured: true,
  },
  {
    slug: 'nannacay',
    year: 2026,
    stack: ['Liquid', 'Shopify'],
    categories: ['brasil', 'shopify'],
    image: '/images/projects/nannacay.webp',
    url: 'https://www.nannacay.com.br/',
    featured: true,
  },
]

export const techIcons: Record<string, string> = {
  react: '/icons/tech/react.svg',
  next: '/icons/tech/next.svg',
  typescript: '/icons/tech/typescript.svg',
  javascript: '/icons/tech/javascript.svg',
  html: '/icons/tech/html.svg',
  css: '/icons/tech/css.svg',
  sass: '/icons/tech/sass.svg',
  tailwind: '/icons/tech/tailwind.svg',
  preact: '/icons/tech/preact.svg',
  styled: '/icons/tech/styled.svg',
  deco: '/icons/tech/deco.svg',
  vtex: '/icons/tech/vtex.svg',
  shopify: '/icons/tech/shopify.svg',
  liquid: '/icons/tech/liquid.svg',
  bff: '/icons/tech/bff.svg',
  googletagmanager: '/icons/tech/googletagmanager.svg',
  googleanalytics: '/icons/tech/googleanalytics.svg',
  deno: '/icons/tech/deno.svg',
  bun: '/icons/tech/bun.svg',
  node: '/icons/tech/node.svg',
  drizzle: '/icons/tech/drizzle.svg',
  git: '/icons/tech/git.svg',
}

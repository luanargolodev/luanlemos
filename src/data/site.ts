export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://luanlemos.dev',
  name: 'Luan Lemos',
  title:
    'Luan Lemos — Desenvolvedor Front-end | React, Next.js & E-commerce',
  description:
    'Portfólio de Luan Lemos, desenvolvedor front-end com experiência em e-commerces de alto tráfego. React, Next.js, TypeScript, Tailwind CSS, Deco.cx e VTEX.',
  shortDescription:
    'Desenvolvedor front-end especializado em e-commerce, React, Next.js, Deco.cx e VTEX.',
  keywords: [
    'desenvolvedor front-end',
    'front-end developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Preact',
    'Deno',
    'Deco.cx',
    'VTEX',
    'e-commerce',
    'portfólio',
    'Luan Lemos',
  ],
  locale: 'pt_BR',
  nav: [
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#stack', label: 'Stack' },
    { href: '#contato', label: 'Contato' },
  ],
  ogAlt:
    'Luan Lemos — Desenvolvedor Front-end especializado em React, Next.js e e-commerce.',
} as const

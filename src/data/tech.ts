export interface TechItem {
  name: string
  icon: string
}

export interface TechGroup {
  label: string
  description: string
  items: TechItem[]
}

export const techGroups: TechGroup[] = [
  {
    label: 'Front-end',
    description: 'Interfaces, componentes e design systems.',
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
    label: 'E-commerce',
    description: 'Plataformas e integrações de loja.',
    items: [
      { name: 'Deco.cx', icon: 'deco' },
      { name: 'VTEX', icon: 'vtex' },
      { name: 'Shopify', icon: 'shopify' },
    ],
  },
  {
    label: 'Runtime & ferramentas',
    description: 'Execução, dados e fluxo de trabalho.',
    items: [
      { name: 'Deno', icon: 'deno' },
      { name: 'Bun', icon: 'bun' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Drizzle', icon: 'drizzle' },
      { name: 'Git', icon: 'git' },
    ],
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
  deno: '/icons/tech/deno.svg',
  bun: '/icons/tech/bun.svg',
  node: '/icons/tech/node.svg',
  drizzle: '/icons/tech/drizzle.svg',
  git: '/icons/tech/git.svg',
}

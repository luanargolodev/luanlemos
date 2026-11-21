export interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  start: string
  end?: string
  location: string
  summary: string
  achievements: string[]
  stack: string[]
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Front-end Pleno',
    company: 'Zee.Dog · Grupo PetzCobasi',
    companyUrl: 'https://www.zeedog.com.br',
    start: '2025-05',
    location: 'Brasil · Remoto',
    summary:
      'Desenvolvimento da loja Zee.Dog na Deco.cx, com foco em consistência visual, performance e evolução contínua da experiência de compra.',
    achievements: [
      'Implementação de páginas e componentes reutilizáveis em Preact, TypeScript e Tailwind CSS.',
      'Integrações com o backend da Deco.cx para vitrines, conteúdo e fluxo de compra.',
      'Integrações com Shopify nas lojas internacionais da Zee.Dog (Japão, Europa, Austrália e Peru).',
      'Atuação próxima de design, produto e engenharia na priorização de melhorias da loja.',
    ],
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS', 'Shopify'],
  },
  {
    role: 'Desenvolvedor Front-end Júnior',
    company: 'Zee.Dog · Grupo PetzCobasi',
    companyUrl: 'https://www.zeedog.com.br',
    start: '2023-05',
    end: '2025-05',
    location: 'Brasil · Remoto',
    summary:
      'Evolução da loja em Deco.cx, criando novas experiências e apoiando a padronização do front-end do time.',
    achievements: [
      'Desenvolvimento de vitrines, páginas de campanha e componentes de produto.',
      'Ajustes de performance e acessibilidade em páginas de alto tráfego.',
      'Suporte à migração de experiências para a plataforma Deco.cx.',
    ],
    stack: ['Deco.cx', 'Preact', 'TypeScript', 'Deno', 'Tailwind CSS'],
  },
  {
    role: 'Desenvolvedor Front-end Júnior',
    company: 'Agência e-Plus',
    start: '2022-06',
    end: '2023-03',
    location: 'Brasil',
    summary:
      'Desenvolvimento de landing pages, menus e customizações para lojas VTEX de marcas como Cavenaghi, Openbox, Náutika e Todo Moda.',
    achievements: [
      'Implementação de landing pages de campanha com HTML, Sass, JavaScript e React.',
      'Customizações em VTEX e VTEX IO, incluindo vitrines, busca e quick view.',
      'Contato direto com prazos curtos e múltiplos clientes simultâneos.',
    ],
    stack: ['HTML', 'Sass', 'JavaScript', 'React', 'VTEX IO'],
  },
]

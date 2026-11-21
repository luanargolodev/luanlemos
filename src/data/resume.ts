import { profile } from './profile'
import { site } from './site'

const updatedAt = new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
  year: 'numeric',
}).format(new Date())

export const resume = {
  fullName: profile.fullName,
  title: profile.role,
  location: profile.location,
  availability: profile.availability,
  updatedAt,
  summary:
    'Desenvolvedor Front-end Pleno com 4+ anos de experiência em e-commerce de marcas de alcance nacional e operações internacionais. Atuação de ponta a ponta em lojas como Zee.Dog, Zee.Now e Nannacay, com React.js, Next.js, TypeScript, JavaScript, Preact, Tailwind CSS, Deco.cx, VTEX e Shopify. Experiência com temas Shopify em Liquid, componentes reutilizáveis, performance, acessibilidade e colaboração próxima a design e produto. Busco oportunidades pleno/sênior em times de produto ou e-commerce, em modelo remoto ou híbrido.',
  skillGroups: [
    {
      label: 'Front-end',
      items:
        'React.js, Next.js, TypeScript, JavaScript (ES6+), Preact, HTML5, CSS3, Sass, Tailwind CSS, Styled Components, design responsivo, acessibilidade (WCAG) e performance web.',
    },
    {
      label: 'E-commerce',
      items: 'Deco.cx, VTEX, VTEX IO, Shopify e Liquid.',
    },
    {
      label: 'Runtime e ferramentas',
      items:
        'Deno, Node.js, Bun, Git, GitHub, Drizzle ORM e integração com APIs e CMS.',
    },
    {
      label: 'Metodologias',
      items:
        'Scrum, planejamento de sprint, code review, comunicação, trabalho em equipe e resolução de problemas.',
    },
  ],
  projects: [
    {
      title: 'Zee.Dog Internacional — Japão, Europa, Austrália e Peru',
      period: '2026',
      description:
        'Lojas oficiais da Zee.Dog fora do Brasil, com catálogo, checkout e conteúdo localizados para cada mercado.',
      stack: 'Deco.cx, Shopify, Preact, TypeScript, Deno e Tailwind CSS',
      links: 'zeedog.jp · zeedog.eu · zeedog.au · zeedog.pe',
    },
    {
      title: 'Nannacay — Tema Shopify em Liquid',
      period: '2026',
      description:
        'Desenvolvimento de ponta a ponta do tema da marca de moda, incluindo vitrines, páginas de produto e jornada de compra.',
      stack: 'Shopify e Liquid',
      links: 'nannacay.com.br',
    },
    {
      title: 'Zee.Dog, Zee.Now e Blog Zee.Now',
      period: '2025–atual',
      description:
        'E-commerce e blog na Deco.cx, com componentes reutilizáveis, CMS, integrações de backend e foco em performance.',
      stack: 'Deco.cx, Preact, TypeScript, Deno e Tailwind CSS',
      links: 'zeedog.com.br · zeenow.com.br/blog',
    },
  ],
  links: {
    portfolio: site.url,
    cv: `${site.url}/curriculo`,
    pdf: `${site.url}${profile.cvUrl}`,
    email: profile.email,
    phone: profile.phone,
    linkedin: profile.socials[0].href,
    github: profile.socials[1].href,
  },
} as const

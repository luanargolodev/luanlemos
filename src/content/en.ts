import type { ContentText } from './types'

const en: ContentText = {
  profile: {
    role: 'Mid-level Front-end Developer',
    headline:
      'I build fast, accessible e-commerce experiences with React, Next.js, Deco.cx, VTEX, and Shopify.',
    headlineHighlight: 'fast, accessible e-commerce experiences',
    summary:
      'Mid-level front-end developer with experience in e-commerce for nationally recognized brands and international operations. Currently at Zee.Dog, turning design into fast, accessible, maintainable interfaces.',
    bio: [
      "I'm a mid-level front-end developer focused on e-commerce. Over the past few years, I've built and maintained stores for nationally recognized brands — from storefront to checkout — using React, Preact, TypeScript, Tailwind CSS, Deco.cx, and VTEX.",
      'I enjoy problems that combine product, performance, and detail: a component that has to work across multiple stores, a page that has to load fast on any connection, an integration that cannot fail. I work closely with design and business, with clear communication and autonomy.',
      'I hold a degree in Systems Analysis and Development from Estácio and keep open projects and contributions on GitHub.',
    ],
    location: 'Brazil · Remote',
    availability: 'Open to networking',
    educationCourse: 'Systems Analysis and Development',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Deco.cx',
      'VTEX',
      'Shopify',
      'Liquid',
      'BFF',
      'GTM',
      'GA4',
    ],
  },
  experience: {
    'zeedog-frontend-pleno': {
      role: 'Mid-level Front-end Developer',
      location: 'Brazil · Remote',
      summary:
        'Development of the Zee.Dog store on Deco.cx, focused on visual consistency, performance, and continuous evolution of the shopping experience.',
      achievements: [
        'One of the developers responsible for the BFF across the entire Zee.Dog and Zee.Now ecosystem, centralizing integrations and data consumed by the front-end.',
        'Built reusable pages and components with Preact, TypeScript, and Tailwind CSS.',
        'Integrated with the Deco.cx backend for storefronts, content, and the purchase flow.',
        'Integrated Shopify into the Zee.Dog international stores (Japan, Europe, Australia, and Peru).',
        'Worked closely with design, product, and engineering to prioritize store improvements.',
      ],
    },
    'zeedog-frontend-junior': {
      role: 'Junior Front-end Developer',
      location: 'Brazil · Remote',
      summary:
        'Evolved the store on Deco.cx, creating new experiences and supporting the team’s front-end standardization.',
      achievements: [
        'Built storefronts, campaign pages, and product components.',
        'Improved performance and accessibility on high-traffic pages.',
        'Supported the migration of experiences to the Deco.cx platform.',
      ],
    },
    'eplus-frontend-junior': {
      role: 'Junior Front-end Developer',
      location: 'Brazil',
      summary:
        'Built landing pages, menus, and customizations for VTEX stores of brands such as Cavenaghi, Openbox, Náutika, and Todo Moda.',
      achievements: [
        'Implemented campaign landing pages with HTML, Sass, JavaScript, and React.',
        'Customized VTEX and VTEX IO, including storefronts, search, and quick view.',
        'Worked directly with tight deadlines and multiple clients at the same time.',
      ],
    },
  },
  projects: {
    'zee-dog': {
      title: 'Zee.Dog',
      client: 'Zee.Dog · Brazil',
      summary:
        'A complete e-commerce store on Deco.cx, from storefront to checkout.',
      outcome:
        'Daily operation for a nationally recognized brand: components, content, and performance from end to end.',
      imageAlt: 'Zee.Dog store homepage in Brazil',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Dog is a Brazilian brand of accessories for dogs and cats with an e-commerce operation across multiple channels.',
          'On the front-end team, I helped evolve the main store on Deco.cx, from catalog and storefronts to high-visibility campaigns.',
        ],
        challenge:
          'Evolve a store in production, with many SKUs and teams working in parallel, without losing visual consistency, performance, or accessibility.',
        approach: [
          'Reusable components with Preact, TypeScript, and Tailwind CSS for storefronts and campaign pages.',
          'Integrations with the Deco.cx backend for content, catalog, and the purchase flow.',
          'Partnership with design and product to turn campaigns into experiences consistent with the brand.',
          'Attention to loading states, responsiveness, and interface details.',
        ],
        highlights: [
          'Component base used by other areas of the Zee.Dog ecosystem.',
          'Continuous operation for a nationally recognized brand.',
        ],
      },
    },
    'zee-now': {
      title: 'Zee.Now',
      client: 'Zee.Dog · Brazil',
      summary:
        'A quick-delivery e-commerce experience for the pet market, also on Deco.cx.',
      outcome:
        'Experiences that change by region and delivery window — price, stock, and availability in real time.',
      imageAlt: 'Zee.Now store homepage',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Now is Zee.Dog’s quick-delivery operation, with a shopping experience that changes based on region, stock, and delivery window.',
          'The challenge was making e-commerce feel simple while handling data that changes in real time.',
        ],
        challenge:
          'Communicate availability, price, and delivery time without overloading the interface or losing the brand identity.',
        approach: [
          'Campaign pages and storefronts with regional availability data.',
          'Product and content components shared with the main operation.',
          'Clear visual hierarchy for fast purchase decisions.',
          'Performance and responsiveness adjustments on small screens.',
        ],
        highlights: [
          'A localized experience that combines speed and clarity.',
          'Reuse of patterns between Zee.Dog and Zee.Now.',
        ],
      },
    },
    'blog-zee-now': {
      title: 'Zee.Now Blog',
      client: 'Zee.Dog · Brazil',
      summary:
        'A complete blog on Deco.cx with editorial content, search, and a CMS.',
      outcome:
        'Content and e-commerce in one place: the team publishes without depending on a deploy.',
      imageAlt: 'Zee.Now blog homepage',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'The Zee.Now Blog is an editorial front within the e-commerce ecosystem, with content about behavior, care, and pet products.',
          'Publishing needed to be independent from the store’s deploy cycle.',
        ],
        challenge:
          'Build an editorial experience with search, listing, and comfortable reading, while keeping content easy for the team to publish.',
        approach: [
          'Content structure on Deco.cx integrated with a CMS using Drizzle.',
          'Listing, category, and search components.',
          'Responsive editorial layout focused on reading.',
          'Integration with Zee.Now’s navigation and visual identity.',
        ],
        highlights: [
          'The team publishes content without depending on a deploy.',
          'Content and e-commerce in the same ecosystem.',
        ],
      },
    },
    'zee-dog-japao': {
      title: 'Zee.Dog Japan',
      client: 'Zee.Dog · Japan',
      summary:
        'Zee.Dog’s international store in Japan, on Deco.cx with catalog and checkout on Shopify.',
      outcome:
        'Expansion into a new market and language, keeping the brand experience and the catalog operation on Shopify.',
      imageAlt: 'Zee.Dog store homepage in Japan',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Dog Japan is the brand’s international operation in the Japanese market.',
          'The project combined the experience layer on Deco.cx with Shopify catalog and checkout.',
        ],
        challenge:
          'Adapt language, currency, catalog, and purchase journey to a market with its own expectations and behavior.',
        approach: [
          'Japanese interface and localized content on Deco.cx.',
          'Shopify integration for catalog and checkout.',
          'Components shared with the other international operations.',
          'Attention to performance and visual consistency.',
        ],
        highlights: [
          'A new market without duplicating the front-end architecture.',
          'A foundation for the brand’s international expansion.',
        ],
      },
    },
    'zee-dog-europa': {
      title: 'Zee.Dog Europe',
      client: 'Zee.Dog · Europe',
      summary:
        'Zee.Dog’s European store with an English catalog, international shipping, and Shopify checkout.',
      outcome:
        'A multi-market operation on Deco.cx, with content and commerce coordinated between Brazil and Europe.',
      imageAlt: 'Zee.Dog store homepage in Europe',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Dog’s European operation serves several countries with international shipping.',
          'The site combines the Deco.cx experience layer with Shopify catalog and checkout.',
        ],
        challenge:
          'Keep a clear English shopping experience for audiences in different countries, with shipping and currency rules.',
        approach: [
          'Content and navigation in English.',
          'Shopify integration for catalog and checkout.',
          'Components reused across international stores.',
          'Focus on clear shipping, price, and availability information.',
        ],
        highlights: [
          'A multi-market operation with one component base.',
          'Consistency between Brazil and Europe.',
        ],
      },
    },
    'zee-dog-australia': {
      title: 'Zee.Dog Australia',
      client: 'Zee.Dog · Australia',
      summary:
        'Zee.Dog’s Australian store with a local catalog, its own currency, and Shopify checkout.',
      outcome:
        'Currency, shipping, and catalog adapted to the Australian market without duplicating the architecture.',
      imageAlt: 'Zee.Dog store homepage in Australia',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Dog’s Australian store has its own catalog, currency, and communication.',
          'The project is part of the brand’s international expansion with Deco.cx and Shopify.',
        ],
        challenge:
          'Adapt the experience to the Australian market, including currency, shipping, and local expectations.',
        approach: [
          'Localized content and English navigation.',
          'Shopify integration for catalog and checkout.',
          'Components shared with the other stores.',
          'Focus on performance and responsiveness.',
        ],
        highlights: [
          'Market adaptation without duplicating code.',
          'An experience consistent with the other operations.',
        ],
      },
    },
    'zee-dog-peru': {
      title: 'Zee.Dog Peru',
      client: 'Zee.Dog · Peru',
      summary:
        'Zee.Dog’s Peruvian store with prices in soles, local delivery, and Shopify checkout.',
      outcome:
        'A new market in Latin America using the same component base and Shopify integration.',
      imageAlt: 'Zee.Dog store homepage in Peru',
      caseStudy: {
        role: 'Mid-level Front-end Developer',
        context: [
          'Zee.Dog Peru serves the Peruvian market with prices in soles and local delivery.',
          'The site uses the same front-end base as the other international operations.',
        ],
        challenge:
          'Localize price, shipping, and content for Peru while keeping the identity and performance.',
        approach: [
          'Content in Spanish.',
          'Shopify integration for catalog and checkout.',
          'Reused components and layout adjustments.',
          'Attention to clear delivery and price information.',
        ],
        highlights: [
          'A new market in Latin America with the same base.',
          'Consistency across international stores.',
        ],
      },
    },
    nannacay: {
      title: 'Nannacay',
      client: 'Nannacay',
      summary:
        'Nannacay fashion brand store, built with Liquid and Shopify.',
      outcome:
        'End-to-end project: a Liquid theme, storefronts, product pages, and a custom purchase journey on Shopify.',
      imageAlt: 'Nannacay store homepage',
      caseStudy: {
        role: 'Front-end Developer',
        context: [
          'Nannacay is a Brazilian fashion brand with an international presence.',
          'The project was the end-to-end development of a Shopify theme in Liquid, including storefronts, product pages, and the purchase journey.',
        ],
        challenge:
          'Translate the brand’s visual identity into a complete Shopify theme without losing performance or maintainability.',
        approach: [
          'Theme development in Liquid.',
          'Sections and components for storefronts, product, and editorial content.',
          'Responsive layout with attention to performance.',
          'Integration with native Shopify features.',
        ],
        highlights: [
          'End-to-end theme in Liquid.',
          'A consistent brand experience on Shopify.',
        ],
      },
    },
  },
  tech: {
    frontend: {
      label: 'Front-end',
      description: 'Interfaces, components, and design systems.',
    },
    ecommerce: {
      label: 'E-commerce',
      description: 'Commerce platforms and store integrations.',
    },
    backend: {
      label: 'Backend & data',
      description: 'Orchestration, APIs, and the data layer.',
    },
    analytics: {
      label: 'Analytics & tracking',
      description: 'Events, tags, measurement, and integrations.',
    },
    tools: {
      label: 'Runtime & tooling',
      description: 'Execution and workflow.',
    },
  },
  certifications: {
    'deco-camp-2025': {
      title: 'deco.camp 2025',
      type: 'Education',
      description: 'Immersive program on AI applied to development.',
    },
    'hackathon-htmx-2025': {
      title: '5th Hackathon deco.cx — HTMX Edition',
      type: 'Participation',
      description: 'HTMX and e-commerce experience hackathon.',
    },
    'pawz-2024': {
      title: 'Honorable Mention — V Hackathon deco.cx',
      type: 'Recognition',
      description: 'Pawz project, a virtual blog built with the Zee.Dog team.',
    },
    'hackathon-2023': {
      title: 'Finalist — II Hackathon deco.cx',
      type: 'Recognition',
      description:
        'Represented Agência e-Plus and reached the hackathon final.',
    },
  },
  resume: {
    objective:
      'Mid-level Front-end Developer focused on e-commerce, React.js, Next.js, Deco.cx, VTEX, and Shopify.',
    summary:
      'Mid-level Front-end Developer with 4+ years of experience in e-commerce for nationally recognized brands and international operations. End-to-end work on stores such as Zee.Dog, Zee.Now, and Nannacay, using React.js, Next.js, TypeScript, JavaScript, Preact, Tailwind CSS, Deco.cx, VTEX, Shopify, and BFF. Experience with Shopify Liquid themes, reusable components, performance, accessibility, and close collaboration with design and product. Open to networking and conversations about front-end, e-commerce, and product.',
    keySkills:
      'React.js, Next.js, TypeScript, JavaScript, Preact, Tailwind CSS, HTML5, CSS3, Sass, Deco.cx, VTEX, VTEX IO, Shopify, Liquid, BFF (Backend for Frontend), Google Tag Manager, Google Analytics 4, Deno, Node.js, Git, web performance, accessibility (WCAG), and Front-end development.',
    skillGroups: [
      {
        label: 'Front-end',
        items:
          'React.js, Next.js, TypeScript, JavaScript (ES6+), Preact, HTML5, CSS3, Sass, Tailwind CSS, Styled Components, responsive design, accessibility (WCAG), and web performance.',
      },
      {
        label: 'E-commerce',
        items: 'Deco.cx, VTEX, VTEX IO, Shopify, and Liquid.',
      },
      {
        label: 'Backend & tooling',
        items:
          'BFF (Backend for Frontend), Node.js, Deno, Bun, Drizzle ORM, Git, GitHub, and API/CMS integrations.',
      },
      {
        label: 'Analytics & tracking',
        items:
          'Google Tag Manager, Google Analytics 4, event and tag creation, tool implementations, and integrations.',
      },
      {
        label: 'Methodologies',
        items:
          'Scrum, sprint planning, code review, communication, teamwork, and problem solving.',
      },
    ],
    projects: [
      {
        slug: 'zee-dog-japao',
        period: '2026',
        description:
          'Official Zee.Dog stores outside Brazil, with catalog, checkout, and content localized for each market.',
        stack: 'Deco.cx, Shopify, Preact, TypeScript, Deno, and Tailwind CSS',
        links: 'zeedog.jp · zeedog.eu · zeedog.au · zeedog.pe',
      },
      {
        slug: 'nannacay',
        period: '2026',
        description:
          'End-to-end development of the fashion brand’s theme, including storefronts, product pages, and the purchase journey.',
        stack: 'Shopify and Liquid',
        links: 'nannacay.com.br',
      },
      {
        slug: 'zee-dog',
        period: '2025–present',
        description:
          'E-commerce and blog on Deco.cx, with reusable components, CMS, backend integrations, and a focus on performance.',
        stack: 'Deco.cx, Preact, TypeScript, Deno, and Tailwind CSS',
        links: 'zeedog.com.br · zeenow.com.br/blog',
      },
    ],
    openTo: 'Networking and conversations about front-end, e-commerce, and product',
  },
}

export default en

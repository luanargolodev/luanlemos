const pt = {
  common: {
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    themeToggle: 'Alternar tema',
    theme: 'Tema',
    backToTop: 'Voltar ao topo',
    backToTopShort: 'Topo',
    copy: 'Copiar',
    copied: 'Copiado',
    copiedAnnouncement: 'E-mail copiado para a área de transferência',
    externalLink: '(abre em nova aba)',
    language: 'Idioma',
    languageNav: 'Selecionar idioma',
    currentLanguage: 'Idioma atual',
    curriculum: 'Currículo',
    curriculumWeb: 'Currículo',
    curriculumWebHint: 'Versão web',
    curriculumPdf: 'Currículo',
    curriculumPdfHint: 'Versão PDF',
    present: 'Atual',
    year: 'ano',
    years: 'anos',
    month: 'mês',
    months: 'meses',
    home: 'Início',
    viewSite: 'Ver site',
    viewCode: 'Código',
    viewCase: 'Ver case',
    opensInNewTab: 'abre em nova aba',
  },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    stack: 'Tecnologias',
    contact: 'Contato',
  },
  header: {
    roleTag: '/ front-end',
    cvButton: 'Currículo',
    cvWebTitle: 'Versão web',
    cvWebDescription: 'Ler no navegador, com todos os detalhes',
    cvPdfTitle: 'Versão PDF',
    cvPdfDescription: 'Visualizar o arquivo no navegador',
  },
  footer: {
    tagline:
      '{role} focado em e-commerce, performance e interfaces que funcionam de verdade.',
    navigation: 'Navegação',
    contact: 'Contato',
    curriculumWeb: 'Currículo web',
    curriculumPdf: 'Currículo em PDF',
    rights: '© {year} {name}. Todos os direitos reservados.',
    builtWith: 'Feito com Next.js, TypeScript e Tailwind CSS',
  },
  hero: {
    stats: {
      experience: 'Experiência',
      specialty: 'Especialidade',
      base: 'Base',
    },
    years: '{years}+ anos',
    specialtyValue: 'E-commerce',
    seeProjects: 'Ver projetos',
    cv: 'Currículo',
    linkedin: 'LinkedIn',
    current: 'Atualmente',
    currentRole: 'Front-end Pleno · Zee.Dog',
    base: 'Base',
    focus: 'Foco',
    focusValue: 'E-commerce & performance',
    portfolio: 'portfólio · {year}',
    scroll: 'Role para explorar',
    photoAlt: 'Retrato de {name}',
  },
  home: {
    sections: {
      about: 'sobre',
      experience: 'experiencia',
      projects: 'projetos',
      stack: 'stack',
      certifications: 'certificados',
      contact: 'contato',
    },
  },
  about: {
    index: '01',
    label: 'Sobre',
    title: 'Interfaces que funcionam no mundo real.',
    pageTitle: 'Quem sou, o que faço e como trabalho.',
    pageIntro:
      'Desenvolvedor front-end pleno com foco em e-commerce, interfaces de produto e a parte invisível que faz uma loja funcionar.',
    currently: 'Atualmente',
    currentlyValue: 'Zee.Dog · Front-end Pleno',
    experience: 'Experiência',
    experienceValue: '{duration} em front-end',
    education: 'Formação',
    base: 'Base',
    cta: 'Conhecer o Sobre',
    viewProfile: 'Ver perfil completo',
    readingNow: 'O que estou estudando agora',
    readingNowText:
      'Performance em e-commerce, arquitetura de front-end, acessibilidade e formas de usar IA para melhorar o fluxo de desenvolvimento sem perder qualidade.',
    principlesLabel: 'Como trabalho',
    principlesTitle: 'Princípios que aparecem no código.',
    principles: [
      {
        title: 'Interfaces antes de abstrações',
        description:
          'Começo pelo que a pessoa precisa entender e fazer. Componente e abstração vêm depois — e só quando ajudam o produto a evoluir.',
      },
      {
        title: 'Performance é requisito',
        description:
          'Uma loja bonita que demora para abrir perde a venda. Trato peso, carregamento e responsividade como parte do design, não como acabamento.',
      },
      {
        title: 'Código que o próximo consegue manter',
        description:
          'Prefiro soluções claras e previsíveis. Documentação, consistência e handoff fazem parte de entregar bem, especialmente em times distribuídos.',
      },
    ],
  },
  experience: {
    index: '02',
    label: 'Experiência',
    title: 'Onde construí.',
    pageTitle: 'Experiência e impacto.',
    intro:
      '{duration} de trabalho em front-end, dos primeiros projetos em agência à operação de uma marca de alcance nacional. Abaixo, o que cada etapa me ensinou.',
    timeline: 'Linha do tempo',
    viewAll: 'Ver experiência completa',
    previewDescription:
      'Do primeiro projeto em agência à operação de e-commerce de marcas de alcance nacional.',
    current: 'Atual',
    rolesLabel: 'Experiência',
    summary:
      '{positions} posições · {companies} empresas · {start} — {present}',
    highlights: [
      {
        label: 'BFF',
        title: 'BFF de todo o ecossistema',
        description:
          'Um dos responsáveis pelo BFF de Zee.Dog e Zee.Now, centralizando integrações e dados consumidos pelo front-end.',
      },
      {
        label: 'Internacional',
        title: 'Operações fora do Brasil',
        description:
          'Lojas no Japão, Europa, Austrália e Peru combinando a camada de experiência na Deco.cx com catálogo e checkout na Shopify.',
      },
      {
        label: 'Analytics',
        title: 'Mensuração e tracking',
        description:
          'Google Tag Manager e Google Analytics 4 para criação de eventos, tags, implementações de ferramentas e integrações.',
      },
    ],
  },
  recognitions: {
    index: '05',
    label: 'Reconhecimentos',
    title: 'Certificados e hackathons.',
    description:
      'Formação contínua e desafios fora do trabalho — onde testei ideias rápido, colaborei com outros times e aprendi na prática.',
  },
  projects: {
    index: '03',
    label: 'Projetos',
    title: 'Trabalho selecionado.',
    pageTitle: 'Trabalho em produção.',
    description:
      'Uma seleção do que construí em e-commerce: operações no Brasil e lojas internacionais, com foco em performance, consistência e detalhe.',
    pageIntro:
      'Oito projetos entre Brasil e exterior: lojas, blogs e operações internacionais construídas com React, Deco.cx, VTEX, Shopify e Liquid.',
    viewAll: 'Ver todos os projetos',
    explore: 'Explorar os {count} projetos',
    listLabel: 'Todos os projetos',
    filtersLabel: 'Filtrar projetos',
    filters: {
      all: 'Todos',
      brasil: 'Brasil',
      internacional: 'Internacional',
      shopify: 'Shopify & Liquid',
      deco: 'Deco.cx',
    },
    count: '{count} projetos',
    filterAllAnnouncement: 'Mostrando todos os {count} projetos',
    filterAnnouncement: 'Filtrando projetos por {label}',
    outcome: 'O que ficou',
    cardCaseLabel: 'Ver case {title}',
    cardSiteLabel: 'Ver site de {title}',
    cardCodeLabel: 'Código de {title}',
    github: 'Ver GitHub',
    countLabel: '{count} projetos · Brasil e internacional',
  },
  project: {
    eyebrow: 'Case · {year} · {client}',
    visit: 'Visitar site',
    allProjects: 'Todos os projetos',
    client: 'Cliente',
    year: 'Ano',
    role: 'Papel',
    stack: 'Stack',
    openSite: 'Abrir site',
    context: 'Contexto',
    challenge: 'Desafio',
    approach: 'Abordagem',
    outcome: 'O que ficou',
    previous: 'Projeto anterior',
    next: 'Próximo projeto',
    metaSuffix: 'Case de front-end e e-commerce',
    metaTitle: '{title} — {suffix}',
  },
  stack: {
    index: '04',
    label: 'Tecnologias',
    title: 'Ferramentas do dia a dia.',
    pageTitle: 'Ferramentas que colocam produto no ar.',
    description:
      'A base técnica que uso para colocar interfaces em produção e integrar lojas.',
    pageIntro:
      'Não é uma lista de logos: é o que uso para construir interfaces, integrar lojas e manter o código sustentável.',
    viewAll: 'Ver tecnologias',
    detailedTitle: 'Ferramentas por área.',
    detailedDescription:
      'Agrupadas por onde entram no trabalho: interface, loja, backend e mensuração.',
    practicalLabel: 'Na prática',
    practicalTitle: 'Onde cada parte aparece no trabalho.',
    highlights: [
      {
        title: 'Front-end em produção',
        description:
          'React, Next.js, TypeScript, Preact e Tailwind CSS para interfaces rápidas, acessíveis e fáceis de evoluir.',
      },
      {
        title: 'E-commerce de ponta a ponta',
        description:
          'Deco.cx, VTEX, Shopify e Liquid em lojas nacionais e internacionais, com catálogo, conteúdo e checkout.',
      },
      {
        title: 'BFF e integrações',
        description:
          'Camada de orquestração entre front-end e serviços, centralizando dados e integrações do ecossistema Zee.Dog/Zee.Now.',
      },
      {
        title: 'Analytics e mensuração',
        description:
          'Google Tag Manager e Google Analytics 4 para eventos, tags, implementações de ferramentas e integrações.',
      },
    ],
  },
  contact: {
    index: '06',
    label: 'Contato',
    pageTitle: 'Contato direto.',
    pageIntro:
      'Para networking, conversas sobre front-end, e-commerce e produto — ou para falar de um projeto em específico.',
    eyebrow: 'Networking',
    title: 'Contato direto.',
    description:
      'Para networking, conversas sobre front-end, e-commerce e produto — ou para falar de um projeto em específico.',
    rows: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      curriculum: 'Currículo',
      curriculumValue: 'PDF · 2 páginas',
    },
    availability: 'Aberto a networking',
    heading: 'Vamos conversar',
    sectionDescription:
      'Gosto de conversar sobre front-end, performance e arquitetura de interfaces. Se quiser trocar uma ideia ou falar sobre um projeto, me chama.',
    sendEmail: 'Enviar e-mail',
    whatsapp: 'WhatsApp',
    emailNote:
      'Prefere e-mail? Escreva para {email}. Respondo o mais rápido possível.',
    rowAria: '{label} de Luan Lemos',
    emailLabel: 'E-mail',
    responseNote:
      'Respondo em até 1 dia útil. Para assuntos rápidos, WhatsApp é o caminho mais direto.',
    cvCta: 'Ver currículo',
  },
  cta: {
    eyebrow: 'Próximo passo',
    title: 'Vamos conversar.',
    description:
      'Se você quer trocar uma ideia sobre front-end, e-commerce ou produto, meu e-mail e LinkedIn estão abertos.',
    talk: 'Falar comigo',
    cv: 'Currículo',
    availability: 'Aberto a networking',
  },
  cv: {
    back: 'Voltar ao portfólio',
    download: 'Baixar PDF',
    updated: 'Currículo · atualizado em {date}',
    specialty: 'Especialidade',
    summary: 'Resumo Profissional',
    keySkills: 'Competências Principais',
    experience: 'Experiência Profissional',
    projects: 'Projetos Selecionados',
    skills: 'Habilidades Técnicas',
    education: 'Formação Acadêmica',
    certifications: 'Certificações e Reconhecimentos',
    stack: 'Stack',
    links: 'Links',
    footerBefore: 'Aberto a networking e conversas sobre front-end, e-commerce e produto. Este currículo também está disponível em',
    footerAnd: 'e em PDF em',
    printHint: 'Versão para impressão e ATS.',
  },
  llms: {
    profile: 'Perfil',
    experience: 'Experiência',
    projects: 'Projetos selecionados',
    pages: 'Páginas',
    stack: 'Tecnologias',
    ats: 'Competências para ATS',
    certifications: 'Certificados e reconhecimentos',
    links: 'Links',
    languages: 'Idiomas',
  },
  notFound: {
    eyebrow: '404',
    explore: 'Continue explorando',
    title: 'Página não encontrada.',
    description:
      'O link pode ter mudado ou nunca ter existido. Volte ao início para continuar explorando o portfólio.',
    back: 'Voltar ao início',
  },
  meta: {
    home: {
      title:
        'Luan Lemos — Desenvolvedor Front-end Pleno | React, Next.js & E-commerce',
      description:
        'Portfólio de Luan Lemos, desenvolvedor front-end pleno com experiência em e-commerce. React, Next.js, TypeScript, Tailwind CSS, Deco.cx, VTEX e Shopify.',
    },
    about: {
      title: 'Sobre — Luan Lemos | Desenvolvedor Front-end Pleno',
      description:
        'Conheça Luan Lemos: desenvolvedor front-end pleno com foco em e-commerce, interfaces de produto, performance, acessibilidade e código sustentável.',
    },
    experience: {
      title: 'Experiência — Luan Lemos | Front-end, BFF e E-commerce',
      description:
        'Trajetória de Luan Lemos como desenvolvedor front-end: Zee.Dog, Zee.Now, BFF do ecossistema, lojas Deco.cx/Shopify, VTEX e reconhecimentos.',
    },
    projects: {
      title: 'Projetos — Luan Lemos | E-commerce, React e Shopify',
      description:
        'Cases de Luan Lemos em e-commerce: Zee.Dog, Zee.Now, operações internacionais Shopify, blog na Deco.cx e tema Liquid para Nannacay.',
    },
    stack: {
      title: 'Tecnologias — Luan Lemos | React, Next.js, BFF, GTM e GA4',
      description:
        'Tecnologias de Luan Lemos: React, Next.js, TypeScript, Tailwind CSS, Deco.cx, VTEX, Shopify, Liquid, BFF, Google Tag Manager e Google Analytics 4.',
    },
    contact: {
      title: 'Contato — Luan Lemos | Desenvolvedor Front-end Pleno',
      description:
        'Fale com Luan Lemos por e-mail, LinkedIn, GitHub ou WhatsApp. Currículo web e PDF disponíveis.',
    },
    resume: {
      title: 'Currículo — Luan Argolo Lemos | Desenvolvedor Front-end Pleno',
      description:
        'Currículo de Luan Argolo Lemos, desenvolvedor front-end pleno com experiência em e-commerce, React, Next.js, Deco.cx, VTEX e Shopify.',
    },
    project: {
      titleSuffix: 'Case de front-end e e-commerce',
    },
    keywords:
      'desenvolvedor front-end, desenvolvedor front-end pleno, front-end pleno, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Preact, Deno, Deco.cx, VTEX, Shopify, Liquid, BFF, Google Tag Manager, Google Analytics, e-commerce, portfólio, currículo, Luan Lemos, Luan Argolo Lemos',
    ogAlt:
      'Luan Lemos — Desenvolvedor Front-end Pleno especializado em React, Next.js e e-commerce.',
    siteDescription:
      'Portfólio de Luan Lemos, desenvolvedor front-end pleno com experiência em e-commerce.',
  },
  a11y: {
    breadcrumb: 'Breadcrumb',
    mainNav: 'Navegação principal',
    footerNav: 'Navegação do rodapé',
    socialLinks: 'Redes sociais',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageSelector: 'Selecionar idioma',
    currentPage: 'Página atual',
    opensInNewTab: 'abre em nova aba',
    pdfHint: 'Documento em PDF',
    stats: 'Números do perfil',
  },
}

export default pt
export type Messages = typeof pt

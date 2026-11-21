import type { Messages } from './pt'

const en: Messages = {
  common: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeToggle: 'Toggle theme',
    theme: 'Theme',
    backToTop: 'Back to top',
    backToTopShort: 'Top',
    copy: 'Copy',
    copied: 'Copied',
    copiedAnnouncement: 'Email copied to clipboard',
    externalLink: '(opens in a new tab)',
    language: 'Language',
    languageNav: 'Select language',
    currentLanguage: 'Current language',
    curriculum: 'CV',
    curriculumWeb: 'CV',
    curriculumWebHint: 'Web version',
    curriculumPdf: 'CV',
    curriculumPdfHint: 'PDF version',
    present: 'Present',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    home: 'Home',
    viewSite: 'View site',
    viewCode: 'Code',
    viewCase: 'View case',
    opensInNewTab: 'opens in a new tab',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },
  header: {
    roleTag: '/ front-end',
    cvButton: 'CV',
    cvWebTitle: 'Web version',
    cvWebDescription: 'Read in the browser with every detail',
    cvPdfTitle: 'PDF version',
    cvPdfDescription: 'Open the PDF file in your browser',
  },
  footer: {
    tagline:
      '{role} focused on e-commerce, performance, and interfaces that actually work.',
    navigation: 'Navigation',
    contact: 'Contact',
    curriculumWeb: 'Web CV',
    curriculumPdf: 'CV as PDF',
    rights: '© {year} {name}. All rights reserved.',
    builtWith: 'Built with Next.js, TypeScript, and Tailwind CSS',
  },
  hero: {
    stats: {
      experience: 'Experience',
      specialty: 'Specialty',
      base: 'Based in',
    },
    years: '{years}+ years',
    specialtyValue: 'E-commerce',
    seeProjects: 'View projects',
    cv: 'CV',
    linkedin: 'LinkedIn',
    current: 'Currently',
    currentRole: 'Mid-level Front-end · Zee.Dog',
    base: 'Based in',
    focus: 'Focus',
    focusValue: 'E-commerce & performance',
    portfolio: 'portfolio · {year}',
    scroll: 'Scroll to explore',
    photoAlt: 'Portrait of {name}',
  },
  home: {
    sections: {
      about: 'about',
      experience: 'experience',
      projects: 'projects',
      stack: 'stack',
      certifications: 'certifications',
      contact: 'contact',
    },
  },
  about: {
    index: '01',
    label: 'About',
    title: 'Interfaces that work in the real world.',
    pageTitle: 'Who I am, what I do, and how I work.',
    pageIntro:
      'Mid-level front-end developer focused on e-commerce, product interfaces, and the invisible layer that makes a store work.',
    currently: 'Currently',
    currentlyValue: 'Zee.Dog · Mid-level Front-end',
    experience: 'Experience',
    experienceValue: '{duration} in front-end',
    education: 'Education',
    base: 'Based in',
    cta: 'More about me',
    viewProfile: 'View full profile',
    readingNow: "What I'm studying now",
    readingNowText:
      'E-commerce performance, front-end architecture, accessibility, and ways to use AI to improve the development workflow without losing quality.',
    principlesLabel: 'How I work',
    principlesTitle: 'Principles you can see in the code.',
    principles: [
      {
        title: 'Interfaces before abstractions',
        description:
          'I start with what people need to understand and do. Components and abstractions come later — and only when they help the product evolve.',
      },
      {
        title: 'Performance is a requirement',
        description:
          'A beautiful store that takes forever to load loses the sale. I treat weight, loading, and responsiveness as part of the design, not as a finishing touch.',
      },
      {
        title: 'Code the next person can maintain',
        description:
          'I prefer clear, predictable solutions. Documentation, consistency, and handoff are part of shipping well, especially in distributed teams.',
      },
    ],
  },
  experience: {
    index: '02',
    label: 'Experience',
    title: "Where I've built.",
    pageTitle: 'Experience and impact.',
    intro:
      '{duration} of front-end work, from early agency projects to running the storefront of a nationally recognized brand. Below is what each step taught me.',
    timeline: 'Timeline',
    viewAll: 'View full experience',
    previewDescription:
      'From an early agency project to running e-commerce for nationally recognized brands.',
    current: 'Current',
    rolesLabel: 'Experience',
    summary: '{positions} roles · {companies} companies · {start} — {present}',
    highlights: [
      {
        label: 'BFF',
        title: 'BFF for the whole ecosystem',
        description:
          'One of the people responsible for the Zee.Dog and Zee.Now BFF, centralizing integrations and data consumed by the front-end.',
      },
      {
        label: 'International',
        title: 'Operations outside Brazil',
        description:
          'Stores in Japan, Europe, Australia, and Peru combining the Deco.cx experience layer with Shopify catalog and checkout.',
      },
      {
        label: 'Analytics',
        title: 'Measurement and tracking',
        description:
          'Google Tag Manager and Google Analytics 4 for events, tags, tool implementations, and integrations.',
      },
    ],
  },
  recognitions: {
    index: '05',
    label: 'Recognition',
    title: 'Certificates and hackathons.',
    description:
      'Continuous learning and challenges outside work — where I tested ideas quickly, collaborated with other teams, and learned by doing.',
  },
  projects: {
    index: '03',
    label: 'Projects',
    title: 'Selected work.',
    pageTitle: 'Work in production.',
    description:
      'A selection of what I have built in e-commerce: operations in Brazil and international stores, focused on performance, consistency, and detail.',
    pageIntro:
      'Eight projects across Brazil and abroad: stores, blogs, and international operations built with React, Deco.cx, VTEX, Shopify, and Liquid.',
    viewAll: 'View all projects',
    explore: 'Explore all {count} projects',
    listLabel: 'All projects',
    filtersLabel: 'Filter projects',
    filters: {
      all: 'All',
      brasil: 'Brazil',
      internacional: 'International',
      shopify: 'Shopify & Liquid',
      deco: 'Deco.cx',
    },
    count: '{count} projects',
    filterAllAnnouncement: 'Showing all {count} projects',
    filterAnnouncement: 'Filtering projects by {label}',
    outcome: 'Outcome',
    cardCaseLabel: 'View {title} case',
    cardSiteLabel: 'Visit the {title} website',
    cardCodeLabel: '{title} code',
    github: 'View GitHub',
    countLabel: '{count} projects · Brazil and international',
  },
  project: {
    eyebrow: 'Case study · {year} · {client}',
    visit: 'Visit site',
    allProjects: 'All projects',
    client: 'Client',
    year: 'Year',
    role: 'Role',
    stack: 'Stack',
    openSite: 'Open site',
    context: 'Context',
    challenge: 'Challenge',
    approach: 'Approach',
    outcome: 'Outcome',
    previous: 'Previous project',
    next: 'Next project',
    metaSuffix: 'Front-end and e-commerce case study',
    metaTitle: '{title} — {suffix}',
  },
  stack: {
    index: '04',
    label: 'Stack',
    title: 'Everyday tools.',
    pageTitle: 'Tools that ship products.',
    description:
      'The technical foundation I use to put interfaces into production and integrate stores.',
    pageIntro:
      "It's not a list of logos: it's what I use to build interfaces, integrate stores, and keep the code maintainable.",
    viewAll: 'View full stack',
    detailedTitle: 'Tools by area.',
    detailedDescription:
      'Grouped by where they fit in the work: interface, store, backend, and measurement.',
    practicalLabel: 'In practice',
    practicalTitle: 'Where each part shows up in the work.',
    highlights: [
      {
        title: 'Front-end in production',
        description:
          'React, Next.js, TypeScript, Preact, and Tailwind CSS for fast, accessible interfaces that are easy to evolve.',
      },
      {
        title: 'End-to-end e-commerce',
        description:
          'Deco.cx, VTEX, Shopify, and Liquid across Brazilian and international stores, with catalog, content, and checkout.',
      },
      {
        title: 'BFF and integrations',
        description:
          'An orchestration layer between front-end and services, centralizing data and integrations across the Zee.Dog/Zee.Now ecosystem.',
      },
      {
        title: 'Analytics and measurement',
        description:
          'Google Tag Manager and Google Analytics 4 for events, tags, tool implementations, and integrations.',
      },
    ],
  },
  contact: {
    index: '06',
    label: 'Contact',
    pageTitle: 'Direct contact.',
    pageIntro:
      'For networking, conversations about front-end, e-commerce, and product — or to talk about a specific project.',
    eyebrow: 'Networking',
    title: 'Direct contact.',
    description:
      'For networking, conversations about front-end, e-commerce, and product — or to talk about a specific project.',
    rows: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      curriculum: 'CV',
      curriculumValue: 'PDF · 2 pages',
    },
    availability: 'Open to networking',
    heading: "Let's talk",
    sectionDescription:
      'I enjoy talking about front-end, performance, and interface architecture. If you want to exchange ideas or discuss a project, reach out.',
    sendEmail: 'Send email',
    whatsapp: 'WhatsApp',
    emailNote:
      'Prefer email? Write to {email}. I reply as soon as possible.',
    rowAria: '{label} — Luan Lemos',
    emailLabel: 'Email',
    responseNote:
      'I reply within one business day. For quick questions, WhatsApp is the fastest route.',
    cvCta: 'View CV',
  },
  cta: {
    eyebrow: 'Next step',
    title: "Let's talk.",
    description:
      'If you want to exchange ideas about front-end, e-commerce, or product, my email and LinkedIn are open.',
    talk: 'Get in touch',
    cv: 'CV',
    availability: 'Open to networking',
  },
  cv: {
    back: 'Back to portfolio',
    download: 'Download PDF',
    updated: 'CV · updated {date}',
    specialty: 'Specialty',
    summary: 'Professional Summary',
    keySkills: 'Core Skills',
    experience: 'Professional Experience',
    projects: 'Selected Projects',
    skills: 'Technical Skills',
    education: 'Education',
    certifications: 'Certifications and Recognition',
    stack: 'Stack',
    links: 'Links',
    footerBefore:
      'Open to networking and conversations about front-end, e-commerce, and product. This CV is also available at',
    footerAnd: 'and as a PDF at',
    printHint: 'Print- and ATS-friendly version.',
  },
  llms: {
    profile: 'Profile',
    experience: 'Experience',
    projects: 'Selected projects',
    pages: 'Pages',
    stack: 'Stack',
    ats: 'ATS keywords',
    certifications: 'Certifications and recognition',
    links: 'Links',
    languages: 'Languages',
  },
  notFound: {
    eyebrow: '404',
    explore: 'Keep exploring',
    title: 'Page not found.',
    description:
      'The link may have changed or never existed. Go back to the beginning to keep exploring the portfolio.',
    back: 'Back to home',
  },
  meta: {
    home: {
      title:
        'Luan Lemos — Mid-level Front-end Developer | React, Next.js & E-commerce',
      description:
        'Portfolio of Luan Lemos, a mid-level front-end developer with e-commerce experience. React, Next.js, TypeScript, Tailwind CSS, Deco.cx, VTEX, and Shopify.',
    },
    about: {
      title: 'About — Luan Lemos | Mid-level Front-end Developer',
      description:
        'Meet Luan Lemos: a mid-level front-end developer focused on e-commerce, product interfaces, performance, accessibility, and maintainable code.',
    },
    experience: {
      title: 'Experience — Luan Lemos | Front-end, BFF & E-commerce',
      description:
        "Luan Lemos' front-end career: Zee.Dog, Zee.Now, the ecosystem BFF, Deco.cx/Shopify stores, VTEX, and recognition.",
    },
    projects: {
      title: 'Projects — Luan Lemos | E-commerce, React & Shopify',
      description:
        "Luan Lemos' e-commerce case studies: Zee.Dog, Zee.Now, international Shopify operations, a Deco.cx blog, and a Liquid theme for Nannacay.",
    },
    stack: {
      title: 'Stack — Luan Lemos | React, Next.js, BFF, GTM & GA4',
      description:
        "Luan Lemos' stack: React, Next.js, TypeScript, Tailwind CSS, Deco.cx, VTEX, Shopify, Liquid, BFF, Google Tag Manager, and Google Analytics 4.",
    },
    contact: {
      title: 'Contact — Luan Lemos | Mid-level Front-end Developer',
      description:
        'Contact Luan Lemos by email, LinkedIn, GitHub, or WhatsApp. Web and PDF CVs are available.',
    },
    resume: {
      title: 'CV — Luan Argolo Lemos | Mid-level Front-end Developer',
      description:
        'CV of Luan Argolo Lemos, a mid-level front-end developer with e-commerce experience in React, Next.js, Deco.cx, VTEX, and Shopify.',
    },
    project: {
      titleSuffix: 'Front-end and e-commerce case study',
    },
    keywords:
      'front-end developer, mid-level front-end developer, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Preact, Deno, Deco.cx, VTEX, Shopify, Liquid, BFF, Google Tag Manager, Google Analytics, e-commerce, portfolio, CV, resume, Luan Lemos, Luan Argolo Lemos',
    ogAlt:
      'Luan Lemos — Mid-level Front-end Developer specialized in React, Next.js, and e-commerce.',
    siteDescription:
      'Portfolio of Luan Lemos, a mid-level front-end developer with e-commerce experience.',
  },
  a11y: {
    breadcrumb: 'Breadcrumb',
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    socialLinks: 'Social links',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSelector: 'Select language',
    currentPage: 'Current page',
    opensInNewTab: 'opens in a new tab',
    pdfHint: 'PDF document',
    stats: 'Profile numbers',
  },
}

export default en

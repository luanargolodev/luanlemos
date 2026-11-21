export interface Certification {
  title: string
  issuer: string
  year: string
  type: 'Formação' | 'Participação' | 'Reconhecimento'
  description: string
  url?: string
}

export const certifications: Certification[] = [
  {
    title: 'deco.camp 2025',
    issuer: 'deco.cx',
    year: '2025',
    type: 'Formação',
    description: 'Imersão em IA aplicada ao desenvolvimento.',
  },
  {
    title: '5th Hackathon deco.cx — HTMX Edition',
    issuer: 'deco.cx',
    year: '2025',
    type: 'Participação',
    description: 'Hackathon de HTMX e experiências de e-commerce.',
  },
  {
    title: 'Menção Honrosa — V Hackathon deco.cx',
    issuer: 'deco.cx',
    year: '2024',
    type: 'Reconhecimento',
    description: 'Projeto Pawz, blog virtual com o time da Zee.Dog.',
  },
  {
    title: 'Finalista — II Hackathon deco.cx',
    issuer: 'deco.cx',
    year: '2023',
    type: 'Reconhecimento',
    description: 'Participação pelo time da Agência e-Plus, chegando à final.',
  },
]

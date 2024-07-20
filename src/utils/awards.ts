import { StaticImageData } from 'next/image'
import ii_hackathon_deco from '../assets/prizes/ii-hackathon-deco.jpeg'
import v_hackathon_deco from '../assets/prizes/v-hackathon-deco.png'

export interface AwardsProps {
  id: number
  title: string
  image: StaticImageData
  description: string
}

export const awards: AwardsProps[] = [
  {
    id: 0,
    title: 'II Hackathon deco.cx',
    image: ii_hackathon_deco,
    description: 'Durante os dias 17, 18 e 19 de março de 2023, participei do II Hackathon da deco.cx e fui um dos finalistas.'
  },
  {
    id: 1,
    title: 'V Hackathon deco.cx',
    image: v_hackathon_deco,
    description: 'Durante os dias 12, 13 e 14 de julho de 2024, participei do V Hackathon da deco.cx e fui um dos finalistas.'
  },
]
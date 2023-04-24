import { StaticImageData } from 'next/image'
import decoImg from '../assets/prizes/deco.jpeg'

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
    image: decoImg,
    description: 'Durante os dias 17, 18 e 19 de março de 2023, participei do II Hackathon da deco.cx e fui um dos finalistas.'
  },
]
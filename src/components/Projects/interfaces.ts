import { StaticImageData } from 'next/image'

export interface ProjectProps {
  id: number
  image: StaticImageData
  title: string
  description: string
  techs: string[]
}

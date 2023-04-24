import gitSvg from '../assets/skills/git.svg'
import htmlSvg from '../assets/skills/html.svg'
import cssSvg from '../assets/skills/css.svg'
import javascriptSvg from '../assets/skills/javascript.svg'
import reactSvg from '../assets/skills/react.svg'
import typescriptSvg from '../assets/skills/typescript.svg'
import styledcomponentsSvg from '../assets/skills/styled-components.svg'
import tailwindcssSvg from '../assets/skills/tailwindcss.svg'
import vtexSvg from '../assets/skills/vtex.svg'

export interface SkillProps {
  id: number
  name: string
  icon: string
}

export const skills: SkillProps[] = [
  {
    id: 0,
    name: 'VTEX',
    icon: vtexSvg,
  },
  {
    id: 1,
    name: 'Git',
    icon: gitSvg,
  },
  {
    id: 2,
    name: 'HTML',
    icon: htmlSvg,
  },
  {
    id: 3,
    name: 'CSS',
    icon: cssSvg,
  },
  {
    id: 4,
    name: 'JavaScript',
    icon: javascriptSvg,
  },
  {
    id: 5,
    name: 'TypeScript',
    icon: typescriptSvg,
  },
  {
    id: 6,
    name: 'React',
    icon: reactSvg,
  },
  {
    id: 7,
    name: 'Styled Components',
    icon: styledcomponentsSvg,
  },
  {
    id: 8,
    name: 'Tailwind CSS',
    icon: tailwindcssSvg,
  },
]

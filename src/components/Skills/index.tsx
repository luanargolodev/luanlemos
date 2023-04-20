import Title from '../Title'
import Image from 'next/image'

import { skills, SkillProps } from '../../utils/skills'

export default function Skills() {
  return (
    <section className="mt-16">
      <Title title="Tecnologias" />

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {skills.map((skill: SkillProps) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center w-[88px] h-[120px]"
          >
            <Image src={skill.icon} alt={skill.name} className="w-20 h-20" />
            <span className="mt-2 text-xs uppercase text-[#BDEBEA] text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

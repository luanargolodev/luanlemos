import Title from '../Title'
import { ProjectProps } from './interfaces'
import Image from 'next/image'

import { projects } from '../../utils/projects'

export default function Projects() {
  return (
    <section className="mt-16 scroll-smooth" id="projects">
      <Title title="Projetos" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: ProjectProps) => (
          <div
            key={project.id}
            className="bg-[#222525] rounded-lg shadow-lg p-4"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg"
            />

            <h3 className="text-xl font-medium mt-4 uppercase">
              {project.title}
            </h3>

            <div className="flex mt-3">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-b from-[#00F5A0] to-[#00D9F5] uppercase text-gray-700 rounded px-4 py-1 text-sm mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[#BDEBEA] mt-5 tracking-[0.04em] text-[#BDEBEA]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import Title from '../Title'
import { ProjectProps } from './interfaces'
import Image, { StaticImageData } from 'next/image'
import Modal from '../Modal'
import useModal from '@/hooks/useModal'
import Button from '../Button'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

import { projects } from '../../utils/projects'

import linkSvg from '../../assets/icons/link.svg'

export default function Projects() {
  const { isOpen, toggle } = useModal()
  const [imageModal, setImageModal] = useState<StaticImageData | string>('')

  const handleClick = (id: number) => () => {
    const project = projects.find((project) => project.id === id)

    if (project) {
      window.open(project.link, '_blank')
    }
  }

  const handleClickImage = (id: number) => () => {
    toggle()
    setImageModal(projects[id].image)
  }

  return (
    <section className="mt-16 scroll-smooth relative" id="projects">
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
              className="h-[184px] cursor-pointer rounded-lg object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              onClick={handleClickImage(project.id)}
              id={project.id.toString()}
            />

            <Tooltip
              anchorId={project.id.toString()}
              place="top"
              content="Clique para visualizar a imagem"
              variant="info"
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

            <p className="text-[#BDEBEA] mt-5 tracking-[0.04em] mb-4 text-[#BDEBEA]">
              {project.description}
            </p>

            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleClick(project.id)}
            >
              <Image src={linkSvg} alt="Link" className="w-6 h-6" />
              Ver projeto
            </span>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="fixed inset-0 bg-black/50">
          <div
            className="absolute inset-0 flex items-center justify-center mx-3"
            onClick={toggle}
          >
            <Image
              src={imageModal}
              alt="Project"
              className="relative h-[500px] rounded-lg object-contain"
            />
            <div
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={toggle}
            >
              <span>Fechar</span>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  )
}

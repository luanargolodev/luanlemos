import { TitleProps } from './interfaces'

export default function Title({ title }: TitleProps) {
  return <h3 className="text-2xl font-semibold mb-5">{title}</h3>
}

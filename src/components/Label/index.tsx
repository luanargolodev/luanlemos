import { LabelProps } from './interfaces'

export default function Label({ id, title }: LabelProps) {
  return (
    <label className="mt-5 text-sm text-[#BDEBEA]" htmlFor={id}>
      {title}
    </label>
  )
}

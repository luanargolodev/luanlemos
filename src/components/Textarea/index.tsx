import { TextareaProps } from './interfaces'

export default function Textarea({ id, name, placeholder }: TextareaProps) {
  return (
    <textarea
      className="mt-1 h-[165px] pl-4 pt-1 border-[1px] focus:outline-none bg-transparent border-[#BDEBEA] rounded"
      id={id}
      name={name}
      placeholder={placeholder}
    />
  )
}

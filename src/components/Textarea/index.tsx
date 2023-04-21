import { TextareaProps } from './interfaces'

export default function Textarea({ id, name, ...rest }: TextareaProps) {
  return (
    <textarea
      {...rest}
      className="mt-1 h-[165px] pl-4 pt-1 border-[1px] focus:outline-none bg-transparent border-[#BDEBEA] rounded"
      id={id}
      name={name}
    />
  )
}

import { InputProps } from './interfaces'

export default function Input({ id, type, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="mt-1 h-[48px] pl-4 border-[1px] focus:outline-none bg-transparent border-[#BDEBEA] rounded"
      type={type}
      id={id}
      name={id}
    />
  )
}

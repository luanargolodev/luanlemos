import { ButtonProps } from './interfaces'

export default function Button({ title }: ButtonProps) {
  return (
    <button className="w-[134px] h-[45px] bg-gradient-to-b from-[#00F5A0] to-[#00D9F5] rounded-[6px] text-[#252728]">
      {title}
    </button>
  )
}

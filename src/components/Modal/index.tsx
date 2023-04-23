import { ModalProps } from './interfaces'

export default function Modal({ children, isOpen, toggle }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div onClick={toggle}>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  )
}

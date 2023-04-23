import { ReactNode } from 'react'

export interface ModalProps {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}

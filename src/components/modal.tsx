import { X } from "lucide-react"
import { PropsWithChildren } from "react"

const ModalPortal = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur">
      {children}
    </div>
  )
}

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div className="space-y-2">{children}</div>
}

interface ModalContentProps {
  children: React.ReactNode
  onCloseClick: () => void
}

const ModalContent = ({ children, onCloseClick }: ModalContentProps) => {
  return (
    <div className="relative flex w-[640px] flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
      <ModalClose onClick={onCloseClick} /> 
      {children}
    </div>
  )
}

interface ModalCloseProps {
  onClick: () => void
}

const ModalClose = ({ onClick }: ModalCloseProps) => {
  return (
    <button onClick={onClick} className="absolute right-6 top-6">
      <X className="size-5 text-zinc-400" />
    </button>
  )
}

interface ModalProps {
  children: React.ReactNode
  onCloseClick: () => void
}

const Modal = ({ children, onCloseClick }: ModalProps) => {
  return (
    <ModalPortal>
      <ModalContent onCloseClick={onCloseClick}>{children}</ModalContent>
    </ModalPortal>
  )
}

const ModalTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

const ModalDescription = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-zinc-400">{children}</p>
}

export { Modal, ModalHeader, ModalTitle, ModalDescription }

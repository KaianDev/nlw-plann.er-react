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
  size?: "sm" | "lg"
}

const ModalContent = ({
  children,
  size = "lg",
  onCloseClick,
}: ModalContentProps) => {
  const sizeVariants = {
    sm: "",
    lg: "w-[640px]",
  }

  return (
    <div
      className={`relative flex flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape ${sizeVariants[size]}`}
    >
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
  size?: "sm" | "lg"
  onCloseClick: () => void
}

const Modal = ({ children, onCloseClick, size = "lg" }: ModalProps) => {
  return (
    <ModalPortal>
      <ModalContent onCloseClick={onCloseClick} size={size}>
        {children}
      </ModalContent>
    </ModalPortal>
  )
}

const ModalTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-lg font-semibold text-start">{children}</h2>
}

const ModalDescription = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-zinc-400">{children}</p>
}

export { Modal, ModalHeader, ModalTitle, ModalDescription }

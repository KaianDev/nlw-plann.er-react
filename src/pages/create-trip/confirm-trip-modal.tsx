import { Mail, User } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../../components/modal"

interface ConfirmTripModalProps {
  handleCloseConfirmTripModal: () => void
  handleCreateTripSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const ConfirmTripModal = ({
  handleCloseConfirmTripModal,
  handleCreateTripSubmit,
}: ConfirmTripModalProps) => {
  return (
    <Modal onCloseClick={handleCloseConfirmTripModal}>
      <ModalHeader>
        <ModalTitle>Confirmar criação da viagem</ModalTitle>
        <ModalDescription>
          Para concluir a criação da viagem para{" "}
          <span className="font-semibold text-zinc-100">
            Florianópolis, Brasil{" "}
          </span>{" "}
          nas datas de{" "}
          <span className="font-semibold text-zinc-100">
            6 a 27 de Agosto de 2024{" "}
          </span>{" "}
          preencha seus dados abaixo:
        </ModalDescription>
      </ModalHeader>
      <form onSubmit={handleCreateTripSubmit} className="space-y-3">
        <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <User className="size-5 text-zinc-400" />
          <input
            name="name"
            placeholder="Seu nome completo"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>
        <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <Mail className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail pessoal"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}

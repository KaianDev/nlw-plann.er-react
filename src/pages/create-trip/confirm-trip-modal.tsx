import { Mail, User } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../../components/modal"
import { Input } from "../../components/input"

interface ConfirmTripModalProps {
  handleCloseConfirmTripModal: () => void
  handleCreateTripSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export const ConfirmTripModal = ({
  handleCloseConfirmTripModal,
  handleCreateTripSubmit,
  setOwnerName,
  setOwnerEmail,
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
        <Input
          icon={User}
          name="name"
          placeholder="Seu nome completo"
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <Input
          icon={Mail}
          name="email"
          type="email"
          onChange={(e) => setOwnerEmail(e.target.value)}
          placeholder="Seu e-mail pessoal"
        />
        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}

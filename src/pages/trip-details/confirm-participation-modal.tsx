import { Mail, User } from "lucide-react"
import { Input } from "../../components/input"
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../../components/modal"
import { Button } from "../../components/button"

interface ConfirmParticipationModalProps {
  handleCloseConfirmParticipationModal: () => void
}

export const ConfirmParticipationModal = ({
  handleCloseConfirmParticipationModal,
}: ConfirmParticipationModalProps) => {
  return (
    <Modal onCloseClick={handleCloseConfirmParticipationModal}>
      <ModalHeader>
        <ModalTitle>Confirmar participação</ModalTitle>
        <ModalDescription>
          Você foi convidado(a) para participar de uma viagem para{" "}
          <span className="font-semibold text-zinc-100">
            Florianópolis, Brasil <br />
          </span>{" "}
          nas datas de{" "}
          <span className="font-semibold text-zinc-100">
            6 a 27 de Agosto de 2024{" "}
          </span>
          .
        </ModalDescription>
      </ModalHeader>
      <ModalDescription>
        Para confirmar sua participação, preencha os dados abaixo:
      </ModalDescription>
      <form className="space-y-3">
        <Input icon={User} name="name" placeholder="Seu nome completo" />
        <Input icon={Mail} name="email" type="email" placeholder="Seu e-mail" />
        <Button size="full">Confirmar minha presença</Button>
      </form>
    </Modal>
  )
}

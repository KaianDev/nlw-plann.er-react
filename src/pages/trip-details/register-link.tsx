import { Link2, Tag } from "lucide-react"

import { Button } from "../../components/button"
import { Input } from "../../components/input"
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../../components/modal"

interface RegisterLinkProps {
  handleCloseRegisterLinkModal: () => void
  handleRegisterLinkSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const RegisterLink = ({
  handleCloseRegisterLinkModal,
  handleRegisterLinkSubmit,
}: RegisterLinkProps) => {
  return (
    <Modal onCloseClick={handleCloseRegisterLinkModal}>
      <ModalHeader>
        <ModalTitle>Cadastrar link</ModalTitle>
        <ModalDescription>
          Todos os convidados podem visualizar os links importantes.
        </ModalDescription>
      </ModalHeader>
      <form onSubmit={handleRegisterLinkSubmit} className="space-y-3">
        <Input name="title" placeholder="Título do link" icon={Tag} />
        <Input name="url" placeholder="URL" icon={Link2} />
        <Button size="full">Salvar link</Button>
      </form>
    </Modal>
  )
}

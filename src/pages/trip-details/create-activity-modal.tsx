import { Calendar, Tag } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../components/modal"
import { Input } from "../../components/input"

interface CreateActivityModalProps {
  handleCloseCreateActivityModal: () => void
}

export const CreateActivityModal = ({
  handleCloseCreateActivityModal,
}: CreateActivityModalProps) => {
  return (
    <Modal onCloseClick={handleCloseCreateActivityModal}>
      <ModalHeader>
        <ModalTitle>Cadastrar Atividade</ModalTitle>
        <ModalDescription>
          Todos convidados podem visualizar as atividades
        </ModalDescription>
      </ModalHeader>
      <form className="space-y-3">
        <Input name="title" placeholder="Qual a atividade" icon={Tag} />
        <Input name="datetime" type="datetime-local" icon={Calendar} />
        <Button type="submit" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  )
}

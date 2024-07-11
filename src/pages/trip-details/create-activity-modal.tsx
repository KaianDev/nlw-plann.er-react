import { Calendar, Tag } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../components/modal"
import { Input } from "../../components/input"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"

interface CreateActivityModalProps {
  handleCloseCreateActivityModal: () => void
}

export const CreateActivityModal = ({
  handleCloseCreateActivityModal,
}: CreateActivityModalProps) => {
  const { tripId } = useParams()

  const handleCreateActivitySubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get("title")?.toString()
    const occurs_at = data.get("occurs_at")?.toString()

    if (!title || !occurs_at) return

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    })

    handleCloseCreateActivityModal()
  }

  return (
    <Modal onCloseClick={handleCloseCreateActivityModal}>
      <ModalHeader>
        <ModalTitle>Cadastrar Atividade</ModalTitle>
        <ModalDescription>
          Todos convidados podem visualizar as atividades
        </ModalDescription>
      </ModalHeader>
      <form onSubmit={handleCreateActivitySubmit} className="space-y-3">
        <Input name="title" placeholder="Qual a atividade" icon={Tag} />
        <Input name="occurs_at" type="datetime-local" icon={Calendar} />
        <Button type="submit" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  )
}

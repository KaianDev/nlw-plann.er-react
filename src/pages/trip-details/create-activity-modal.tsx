import { toast } from "sonner"
import { Calendar, Tag } from "lucide-react"
import { useParams } from "react-router-dom"

import { Button } from "../../components/button"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../components/modal"
import { Input } from "../../components/input"

import { useActivityMutation } from "../../hooks/tanstack"

interface CreateActivityModalProps {
  handleCloseCreateActivityModal: () => void
}

export const CreateActivityModal = ({
  handleCloseCreateActivityModal,
}: CreateActivityModalProps) => {
  const { tripId } = useParams()

  const mutation = useActivityMutation()

  const handleCreateActivitySubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get("title")?.toString()
    const occurs_at = data.get("occurs_at")?.toString()

    if (!title || !occurs_at) return
    await mutation.mutateAsync(
      {
        tripId: tripId!,
        title,
        occurs_at,
      },
      {
        onSuccess: () => {
          toast("Nova atividade adicionada com sucesso!")
        },
        onError: (error) => {
          if (error instanceof Error) {
            return toast(error.message)
          }
          toast("Erro ao adicionar nova atividade")
        },
      },
    )

    console.log(mutation.isError)

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

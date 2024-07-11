import { Calendar, Tag } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../components/modal"

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
        <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <Tag className="size-5 text-zinc-400" />
          <input
            name="title"
            placeholder="Qual a atividade?"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>
        <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <Calendar className="size-5 text-zinc-400" />
          <input
            type="datetime-local"
            name="email"
            placeholder="Seu e-mail pessoal"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>
        <Button type="submit" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  )
}

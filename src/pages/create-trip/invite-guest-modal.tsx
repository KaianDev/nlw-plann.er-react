import { AtSign, Plus, X } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../components/modal"

interface InviteGuestModalProps {
  emailsToInvites: string[]
  handleAddEmailToInvite: (e: React.FormEvent<HTMLFormElement>) => void
  handleCloseGuestModal: () => void
  handleRemoveEmailToInvite: (email: string) => void
}

export const InviteGuestModal = ({
  emailsToInvites,
  handleCloseGuestModal,
  handleRemoveEmailToInvite,
  handleAddEmailToInvite,
}: InviteGuestModalProps) => {
  return (
    <Modal onCloseClick={handleCloseGuestModal}>
      <ModalHeader>
        <ModalTitle>Selecionar convidados</ModalTitle>
        <ModalDescription>
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </ModalDescription>
      </ModalHeader>

      <div className="flex flex-wrap gap-2">
        {emailsToInvites.map((email) => (
          <div
            key={email}
            className="flex items-center rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-400"
          >
            <span>{email}</span>
            <button onClick={() => handleRemoveEmailToInvite(email)}>
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-zinc-800" />

      <form
        onSubmit={handleAddEmailToInvite}
        className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5"
      >
        <div className="flex flex-1 items-center gap-2.5">
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="w-full bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        <Button type="submit">
          Convidar
          <Plus size={20} />
        </Button>
      </form>
    </Modal>
  )
}

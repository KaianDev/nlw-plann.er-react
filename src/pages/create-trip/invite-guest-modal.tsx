import { AtSign, Plus, X } from "lucide-react"

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={handleCloseGuestModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

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
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
          >
            Convidar
            <Plus size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

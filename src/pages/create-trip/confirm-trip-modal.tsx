import { Mail, User, X } from "lucide-react"

interface ConfirmTripModalProps {
  handleCloseConfirmTripModal: () => void
  handleCreateTripSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const ConfirmTripModal = ({
  handleCloseConfirmTripModal,
  handleCreateTripSubmit,
}: ConfirmTripModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button onClick={handleCloseConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

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
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  )
}

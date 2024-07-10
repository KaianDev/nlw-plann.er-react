import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlusIcon,
  Settings2,
  X,
  AtSign,
  Plus,
  User,
  Mail,
} from "lucide-react"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateTripPage = () => {
  const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvites, setEmailsToInvites] = useState([
    "diego@acme.com",
    "kaian@acme.com",
  ])

  const handleOpenGuestInput = () => setIsGuestInputOpen(true)
  const handleCloseGuestInput = () => setIsGuestInputOpen(false)

  const handleOpenGuestModal = () => setIsGuestModalOpen(true)
  const handleCloseGuestModal = () => setIsGuestModalOpen(false)

  const handleOpenConfirmTripModal = () => setIsConfirmTripModalOpen(true)
  const handleCloseConfirmTripModal = () => setIsConfirmTripModalOpen(false)

  const handleAddEmailToInvite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get("email")?.toString()

    if (!email) return

    if (emailsToInvites.includes(email)) return

    setEmailsToInvites((prev) => [...prev, email])

    e.currentTarget.reset()
  }

  const handleRemoveEmailToInvite = (removeEmail: string) => {
    setEmailsToInvites((prev) => prev.filter((email) => email !== removeEmail))
  }

  const handleCreateTripSubmit = () => {
    navigate("trip/123")
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                disabled={isGuestInputOpen}
                className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                disabled={isGuestInputOpen}
                className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
              />
            </div>
            <div className="h-6 w-px bg-zinc-800" />
            {isGuestInputOpen ? (
              <button
                type="button"
                onClick={handleCloseGuestInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleOpenGuestInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight size={20} />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
              <button
                onClick={handleOpenGuestModal}
                type="button"
                className="flex flex-1 items-center gap-2"
              >
                <UserRoundPlusIcon className="size-5 text-zinc-400" />
                {emailsToInvites.length > 0 ? (
                  <span className="w-full text-start text-lg text-zinc-100">
                    {emailsToInvites.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="w-full text-start text-lg text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="h-6 w-px bg-zinc-800" />
              <button
                onClick={handleOpenConfirmTripModal}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
      )}

      {isConfirmTripModalOpen && (
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
      )}
    </div>
  )
}

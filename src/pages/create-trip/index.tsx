import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestModal } from "./invite-guest-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDateStep } from "./steps/destination-and-date-step"
import { InviteGuestStep } from "./steps/invite-guest-step"

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

  const handleCreateTripSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            handleCloseGuestInput={handleCloseGuestInput}
            handleOpenGuestInput={handleOpenGuestInput}
          />

          {isGuestInputOpen && (
            <InviteGuestStep
              emailsToInvites={emailsToInvites}
              handleOpenConfirmTripModal={handleOpenConfirmTripModal}
              handleOpenGuestModal={handleOpenGuestModal}
            />
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
        <InviteGuestModal
          emailsToInvites={emailsToInvites}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleCloseGuestModal={handleCloseGuestModal}
          handleRemoveEmailToInvite={handleRemoveEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          handleCloseConfirmTripModal={handleCloseConfirmTripModal}
          handleCreateTripSubmit={handleCreateTripSubmit}
        />
      )}
    </div>
  )
}

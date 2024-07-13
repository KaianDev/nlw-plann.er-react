import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DateRange } from "react-day-picker"
import { toast } from "sonner"

import { InviteGuestModal } from "./invite-guest-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { InviteGuestStep } from "./steps/invite-guest-step"
import { DestinationAndDateStep } from "./steps/destination-and-date-step"
import { useTripMutation } from "../../hooks/tanstack"

export const CreateTripPage = () => {
  const navigate = useNavigate()
  const mutation = useTripMutation()

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [ownerEmail, setOwnerEmail] = useState("")
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

  const [emailsToInvites, setEmailsToInvites] = useState<string[]>([])

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

  const handleCreateTripSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!destination) {
      return toast("Informe o destino da viagem")
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return toast("Informe a data de início e fim da viagem")
    }

    if (emailsToInvites.length === 0) {
      return toast("Adicione pelo menos um convidado")
    }

    if (!ownerName || !ownerEmail) {
      return toast("Informe o nome e/ou email do dono da viagem")
    }

    const trip = {
      destination,
      owner_name: ownerName,
      owner_email: ownerEmail,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvites,
    }

    const tripId = await mutation.mutateAsync(trip, {
      onSuccess: () => {
        toast("Viagem criada com sucesso")
      },
      onError: () => {
        toast("Ocorreu um erro, verifique os dados e tente novamente")
      },
    })

    navigate(`/trip/${tripId}`)
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
            destination={destination}
            isGuestInputOpen={isGuestInputOpen}
            eventStartAndEndDates={eventStartAndEndDates}
            setEventStartAndEndDates={setEventStartAndEndDates}
            handleCloseGuestInput={handleCloseGuestInput}
            handleOpenGuestInput={handleOpenGuestInput}
            setDestination={setDestination}
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
          destination={destination}
          eventStartAndEndDates={eventStartAndEndDates}
          handleCloseConfirmTripModal={handleCloseConfirmTripModal}
          handleCreateTripSubmit={handleCreateTripSubmit}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}

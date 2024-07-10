import { ArrowRight, UserRoundPlusIcon } from "lucide-react"
import { Button } from "../../../components/button"

interface InviteGuestStepProps {
  emailsToInvites: string[]
  handleOpenConfirmTripModal: () => void
  handleOpenGuestModal: () => void
}

export const InviteGuestStep = ({
  emailsToInvites,
  handleOpenConfirmTripModal,
  handleOpenGuestModal,
}: InviteGuestStepProps) => {
  return (
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
      <Button onClick={handleOpenConfirmTripModal}>
        Confirmar viagem
        <ArrowRight size={20} />
      </Button>
    </div>
  )
}

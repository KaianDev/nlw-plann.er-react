import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"

import { Button } from "../../../components/button"

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  handleCloseGuestInput: () => void
  handleOpenGuestInput: () => void
}

export const DestinationAndDateStep = ({
  isGuestInputOpen,
  handleCloseGuestInput,
  handleOpenGuestInput,
}: DestinationAndDateStepProps) => {
  return (
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
        <Button
          variant="secondary"
          type="button"
          onClick={handleCloseGuestInput}
        >
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      ) : (
        <Button type="button" onClick={handleOpenGuestInput}>
          Continuar
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  )
}

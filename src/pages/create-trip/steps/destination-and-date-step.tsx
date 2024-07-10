import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"

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
  )
}

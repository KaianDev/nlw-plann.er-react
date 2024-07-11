import { useState } from "react"
import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { Button } from "../../../components/button"
import { Modal, ModalHeader, ModalTitle } from "../../../components/modal"

import "react-day-picker/dist/style.css"

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

  const handleCloseDatePicker = () => setIsDatePickerOpen(false)
  const handleOpenDatePicker = () => setIsDatePickerOpen(true)

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d 'de' LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d 'de' LLL"))
      : "Quando?"

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
      <button
        disabled={isGuestInputOpen}
        onClick={handleOpenDatePicker}
        className="flex w-[240px] items-center gap-2 text-lg text-zinc-400"
      >
        <Calendar size={20} />
        <span className="text-start flex-1">{displayedDate}</span>
      </button>
      {isDatePickerOpen && (
        <Modal size="sm" onCloseClick={handleCloseDatePicker}>
          <ModalHeader>
            <ModalTitle>Selecione a data</ModalTitle>
          </ModalHeader>
          <DayPicker
            mode="range"
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
          />
        </Modal>
      )}

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

import { DateRange } from "react-day-picker"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Mail, User } from "lucide-react"

import { Button } from "../../components/button"
import {
  Modal,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../../components/modal"
import { Input } from "../../components/input"

interface ConfirmTripModalProps {
  destination: string
  eventStartAndEndDates: DateRange | undefined
  handleCloseConfirmTripModal: () => void
  handleCreateTripSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export const ConfirmTripModal = ({
  destination,
  eventStartAndEndDates,
  handleCloseConfirmTripModal,
  handleCreateTripSubmit,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) => {
  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d 'de' LLLL", { locale: ptBR })
          .concat(" até ")
          .concat(
            format(eventStartAndEndDates.to, "d 'de' LLLL", { locale: ptBR }),
          )
      : null

  return (
    <Modal onCloseClick={handleCloseConfirmTripModal}>
      <ModalHeader>
        <ModalTitle>Confirmar criação da viagem</ModalTitle>
        <ModalDescription>
          Para concluir a criação da viagem para{" "}
          <span className="font-semibold text-zinc-100">{destination}</span> nas
          datas de{" "}
          <span className="font-semibold text-zinc-100">{displayedDate}</span>{" "}
          preencha seus dados abaixo:
        </ModalDescription>
      </ModalHeader>
      <form onSubmit={handleCreateTripSubmit} className="space-y-3">
        <Input
          icon={User}
          name="name"
          placeholder="Seu nome completo"
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <Input
          icon={Mail}
          name="email"
          type="email"
          onChange={(e) => setOwnerEmail(e.target.value)}
          placeholder="Seu e-mail pessoal"
        />
        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}

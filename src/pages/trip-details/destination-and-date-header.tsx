import { MapPin, Calendar, Settings2 } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { format } from "date-fns"

import { Button } from "../../components/button"
import { useTrip } from "../../hooks/tanstack"

export const DestinationAndDateHeader = () => {
  const { tripId } = useParams<{ tripId: string }>()
  const navigate = useNavigate()

  if (!tripId) return navigate("/")

  const { data: trip, isError, isLoading } = useTrip(tripId!)

  if (isError) return <p>Erro ao carregar viagem</p>

  const displayedDate = trip
    ? format(trip.starts_at, "d 'de' LLL")
        .concat(" até ")
        .concat(format(trip.ends_at, "d 'de' LLL"))
    : null

  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-6 shadow-shape">
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <>
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <span className="text-zinc-100">{trip?.destination}</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <span className="text-zinc-100">{displayedDate}</span>
            </div>
            <div className="h-6 w-px bg-zinc-800" />
            <Button variant="secondary">
              Alterar local/data
              <Settings2 size={20} />
            </Button>
          </div>
        </>
      )}
    </header>
  )
}

import { MapPin, Calendar, Settings2 } from "lucide-react"

import { Button } from "../../components/button"

export const DestinationAndDateHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-6 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Tóquio, Japão</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>
        <div className="h-6 w-px bg-zinc-800" />
        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      </div>
    </header>
  )
}

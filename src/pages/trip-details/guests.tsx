import { CircleDashed, UserCog } from "lucide-react"

import { Button } from "../../components/button"

export const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-semibold text-zinc-100">
              Jessica White
            </span>

            <span className="block truncate text-xs text-zinc-400">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-semibold text-zinc-100">
              Dr. Rita Pacocha
            </span>

            <span className="block truncate text-xs text-zinc-400">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog size={20} />
        Gerenciar convidados
      </Button>
    </div>
  )
}

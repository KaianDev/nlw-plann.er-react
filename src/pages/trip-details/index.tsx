import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react"
import { useState } from "react"

export const TripDetailsPage = () => {
  const [isAddActivityModalOpen, setIsAddActivityModalOpen] = useState(true)

  const handleOpenActivityModal = () => setIsAddActivityModalOpen(true)
  const handleCloseActivityModal = () => setIsAddActivityModalOpen(false)

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
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
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
          >
            {" "}
            Alterar local/data
            <Settings2 size={20} />
          </button>
        </div>
      </header>

      <main className="flex gap-16 px-6">
        {/* Activities */}
        <section className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              type="button"
              onClick={handleOpenActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
            >
              <Plus size={20} />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
                  <CircleCheck className="text-lime-300" />
                  <span className="text-sm text-zinc-100">
                    Academia em grupo
                  </span>
                  <span className="ml-auto text-sm text-zinc-400">8:00h</span>
                </div>
                <div className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
                  <CircleCheck className="text-lime-300" />
                  <span className="text-sm text-zinc-100">Corrida de Kart</span>
                  <span className="ml-auto text-sm text-zinc-400">14:00h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aside */}
        <aside className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-semibold text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/104700011sadsadasdasda
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-semibold text-zinc-100">
                    Regras da casa
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700"
            >
              <Plus size={20} />
              Cadastrar novo link
            </button>
          </div>

          <div className="h-px w-full bg-zinc-800" />

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

            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700"
            >
              <UserCog size={20} />
              Gerenciar convidados
            </button>
          </div>
        </aside>

        {/* Modal */}
        {isAddActivityModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur">
            <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                  <button onClick={handleCloseActivityModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Todos convidados podem visualizar as atividades
                </p>
              </div>

              <form className="space-y-3">
                <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
                  <Tag className="size-5 text-zinc-400" />
                  <input
                    name="title"
                    placeholder="Qual a atividade?"
                    className="w-full bg-transparent outline-none placeholder:text-zinc-400"
                  />
                </div>
                <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
                  <Calendar className="size-5 text-zinc-400" />
                  <input
                    type="datetime-local"
                    name="email"
                    placeholder="Seu e-mail pessoal"
                    className="w-full bg-transparent outline-none placeholder:text-zinc-400"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 hover:bg-lime-400"
                >
                  Salvar atividade
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

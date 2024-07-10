import { useState } from "react"

import { CreateActivityModal } from "./create-activity-modal"
import { ImportantLinks } from "./important-links"
import { Guests } from "./guests"
import { DestinationAndDateHeader } from "./destination-and-date-header"
import { Activities } from "./activities"
import { Plus } from "lucide-react"

export const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  const handleOpenCreateActivityModal = () => setIsCreateActivityModalOpen(true)
  const handleCloseCreateActivityModal = () =>
    setIsCreateActivityModalOpen(false)

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <section className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              type="button"
              onClick={handleOpenCreateActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
            >
              <Plus size={20} />
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </section>

        <aside className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </aside>

        {isCreateActivityModalOpen && (
          <CreateActivityModal
            handleCloseCreateActivityModal={handleCloseCreateActivityModal}
          />
        )}
      </main>
    </div>
  )
}

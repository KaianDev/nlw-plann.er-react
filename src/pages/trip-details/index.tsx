import { useState } from "react"
import { Plus } from "lucide-react"

import { CreateActivityModal } from "./create-activity-modal"
import { ImportantLinks } from "./important-links"
import { Guests } from "./guests"
import { DestinationAndDateHeader } from "./destination-and-date-header"
import { Activities } from "./activities"
import { Button } from "../../components/button"
import { RegisterLink } from "./register-link"
import { ConfirmParticipationModal } from "./confirm-participation-modal"

export const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)
  const [isRegisterLinkModalOpen, setIsRegisterLinkModalOpen] = useState(false)
  const [isConfirmParticipationModalOpen, setIsConfirmParticipationModalOpen] =
    useState(false)

  const handleOpenCreateActivityModal = () => setIsCreateActivityModalOpen(true)
  const handleCloseCreateActivityModal = () =>
    setIsCreateActivityModalOpen(false)

  const handleOpenRegisterLinkModal = () => setIsRegisterLinkModalOpen(true)
  const handleCloseRegisterLinkModal = () => setIsRegisterLinkModalOpen(false)

  // const handleOpenConfirmParticipationModal = () =>
  //   setIsConfirmParticipationModalOpen(true)
  const handleCloseConfirmParticipationModal = () =>
    setIsConfirmParticipationModalOpen(false)

  const handleRegisterLinkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(Object.fromEntries(data))
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <section className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={handleOpenCreateActivityModal}>
              <Plus size={20} />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </section>

        <aside className="w-80 space-y-6">
          <ImportantLinks
            handleOpenRegisterLinkModal={handleOpenRegisterLinkModal}
          />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </aside>

        {isCreateActivityModalOpen && (
          <CreateActivityModal
            handleCloseCreateActivityModal={handleCloseCreateActivityModal}
          />
        )}

        {isRegisterLinkModalOpen && (
          <RegisterLink
            handleRegisterLinkSubmit={handleRegisterLinkSubmit}
            handleCloseRegisterLinkModal={handleCloseRegisterLinkModal}
          />
        )}

        {isConfirmParticipationModalOpen && (
          <ConfirmParticipationModal
            handleCloseConfirmParticipationModal={
              handleCloseConfirmParticipationModal
            }
          />
        )}
      </main>
    </div>
  )
}

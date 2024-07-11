import { CircleCheck } from "lucide-react"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useParams } from "react-router-dom"

import { api } from "../../lib/axios"

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export const Activities = () => {
  const { tripId } = useParams<{ tripId: string }>()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then((response) => {
      setActivities(response.data.activities)
    })
  }, [tripId])

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">
              Dia {format(category.date, "d")}
            </span>
            <span className="text-xs text-zinc-500">
              {format(category.date, "EEEE")}
            </span>
          </div>
          {category.activities.length === 0 && (
            <p className="text-sm text-zinc-500">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}

          {category.activities.map((activity) => (
            <div
              key={activity.id}
              className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape"
            >
              <CircleCheck className="text-lime-300" />
              <span className="text-sm text-zinc-100">{activity.title}</span>
              <span className="ml-auto text-sm text-zinc-400">
                {format(activity.occurs_at, "HH:mm", { locale: ptBR })}h
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

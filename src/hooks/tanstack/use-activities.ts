import { useQuery } from "@tanstack/react-query"

import { Activities } from "../../types/trips"
import { api } from "../../lib/axios"

export const useActivities = (trips: string) => {
  const getActivities = async (tripId: string) => {
    const response = await api.get(`/trips/${tripId}/activities`)
    return response.data.activities as Activities[]
  }

  return useQuery({
    queryKey: ["activities", { trips }],
    queryFn: () => getActivities(trips),
  })
}

import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { Activities } from "../../types/trips"
import { api } from "../../lib/axios"

export const useActivities = (trips: string) => {
  const getActivities = async (tripId: string) => {
    try {
      const response = await api.get(`/trips/${tripId}/activities`)
      return response.data.activities as Activities[]
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
      throw new Error("Erro ao carregar atividades")
    }
  }

  return useQuery({
    queryKey: ["activities", { trips }],
    queryFn: () => getActivities(trips),
  })
}

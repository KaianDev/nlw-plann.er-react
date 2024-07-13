import { AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"

import { api } from "../../lib/axios"
import { Trip } from "../../types/trips"

export const useTrip = (tripId: string) => {
  const getTrip = async (tripId: string) => {
    try {
      const response = await api.get(`/trips/${tripId}`)
      return response.data.trip as Trip
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
      throw new Error("Erro ao carregar viagem")
    }
  }

  return useQuery({
    queryKey: ["trip", { tripId }],
    queryFn: () => getTrip(tripId),
  })
}

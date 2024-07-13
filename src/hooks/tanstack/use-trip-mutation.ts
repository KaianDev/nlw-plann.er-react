import { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"

import { api } from "../../lib/axios"
import { Trip } from "../../types/trips"

type CreateTripProps = Omit<Trip, "id">

export const useTripMutation = () => {
  const createTrip = async (data: CreateTripProps) => {
    try {
      const response = await api.post("/trips", data)
      return response.data.tripId as string
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
      throw new Error("Erro ao criar viagem")
    }
  }

  return useMutation({
    mutationFn: createTrip,
    onError: (error) => {
      console.log(error)
    },
  })
}

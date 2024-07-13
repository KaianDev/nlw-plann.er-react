import { useMutation } from "@tanstack/react-query"

import { api } from "../../lib/axios"
import { queryClient } from "../../lib/tanstack"
import { AxiosError } from "axios"

interface AddActivityProps {
  tripId: string
  title: string
  occurs_at: string
}

export const useActivityMutation = () => {
  const addActivity = async ({
    tripId,
    title,
    occurs_at,
  }: AddActivityProps) => {
    try {
      await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at,
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
    }
  }

  return useMutation({
    mutationFn: addActivity,
    onSuccess: () => {
      console.log("SUCESSO")
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      })
    },
  })
}

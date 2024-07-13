import { useMutation } from "@tanstack/react-query"

import { api } from "../../lib/axios"
import { queryClient } from "../../lib/tanstack"

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
    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    })
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

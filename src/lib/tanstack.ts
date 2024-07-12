import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { api } from "./axios"

export const queryClient = new QueryClient()

interface Activities {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

interface UseActivitiesProps {
  tripId: string
}

const getActivities = async (tripId: string) => {
  const response = await api.get(`/trips/${tripId}/activities`)
  return response.data as {
    activities: Activities[]
  }
}

interface AddActivityProps {
  tripId: string
  title: string
  occurs_at: string
}

const addActivity = async ({ tripId, title, occurs_at }: AddActivityProps) => {
  return await api.post(`/trips/${tripId}/activities`, {
    title,
    occurs_at,
  })
}

export const useActivities = ({ tripId }: UseActivitiesProps) =>
  useQuery({
    queryKey: ["activities", { tripId }],
    queryFn: () => getActivities(tripId),
  })


export const useActivityMutation = () =>
  useMutation({
    mutationFn: addActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities"],
      })
    },
  })

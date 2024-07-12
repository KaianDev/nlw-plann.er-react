import { PropsWithChildren } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/tanstack"

export const TanstackProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

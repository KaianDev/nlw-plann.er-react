import { PropsWithChildren } from "react"
import { TanstackProvider } from "./tanstack"

export const Providers = ({ children }: PropsWithChildren) => {
  return <TanstackProvider>{children}</TanstackProvider>
}

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import { TripDetailsPage } from "./pages/trip-details"
import { Providers } from "./providers"
import { Toaster } from "sonner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trip/:tripId",
    element: <TripDetailsPage />,
  },
])

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
      <Toaster />
    </Providers>
  )
}

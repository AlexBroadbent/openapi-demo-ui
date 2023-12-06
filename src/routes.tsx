import { Box } from "@mui/joy"
import { createBrowserRouter, Outlet } from "react-router-dom"

import Cities, { citiesLoader } from "./pages/Home"
import City, { cityLoader } from "./pages/City"
import { ErrorBoundary } from "./pages/ErrorBoundary"
import Route, { routeLoader } from "./pages/Route"

const Layout = () => (
  <Box sx={{ mx: 2, mt: 1 }}>
    <Outlet />
  </Box>
)

export default () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          loader: citiesLoader,
          element: <Cities />,
        },
        {
          path: "cities/:cityId",
          loader: cityLoader,
          element: <City />,
        },
        {
          path: "routes/:fromId/:toId",
          loader: routeLoader,
          element: <Route />,
        },
      ],
    },
  ])

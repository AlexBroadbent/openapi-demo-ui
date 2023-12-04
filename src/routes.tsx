import { Box } from "@mui/joy"
import { Outlet, createBrowserRouter } from "react-router-dom"

import Cities, { citiesLoader } from "./pages/Cities"
import City, { cityLoader } from "./pages/City"
import { ErrorBoundary } from "./pages/ErrorBoundary"
import Home from "./pages/Home"
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
          element: <Home />,
        },
        {
          path: "cities",
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

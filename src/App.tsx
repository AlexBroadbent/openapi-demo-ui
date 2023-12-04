import { CssBaseline } from "@mui/joy"
import { RouterProvider } from "react-router-dom"

import { Header } from "./components/Header"
import createRouter from "./routes"

export default () => {
  const router = createRouter()

  return (
    <>
      <CssBaseline />
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

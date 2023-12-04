import { Button, Stack, Typography } from "@mui/joy"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorBoundary = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    let message = "Error"
    switch (error.status) {
      case 400:
        message = "You aren't authorized to see this"
        break
      case 401:
      case 403:
        message = "You aren't authorized to see this"
        break
      case 404:
        message = "Page not found"
        break
      case 500:
        message = "Something went wrong on our side, try again in a minute"
    }

    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mt: 5 }}
      >
        <Typography level="h2">Uh oh, something went wrong</Typography>
        {error.data && <Typography level="body-lg">{error.data}</Typography>}
        {!error.data && <Typography level="body-lg">{message}</Typography>}
        <Button variant="soft" href="/">Go Home</Button>
      </Stack>
    )
  }

  throw error
}

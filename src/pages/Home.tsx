import { Box, Link, Typography } from "@mui/joy"

export default () => (
  <Box sx={{ my: 2 }}>
    <Typography level="h4">Welcome to the OpenAPI Demo</Typography>

    <Typography level="body-lg" sx={{ mt: 3 }}>
      App for the OpenAPI Demo, using the cities and routes APIs.
    </Typography>

    <Link level="body-lg" href="/cities" sx={{ mt: 3 }}>
      View all cities
    </Link>
  </Box>
)

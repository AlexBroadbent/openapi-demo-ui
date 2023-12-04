import { Button, Sheet, Stack, Typography } from "@mui/joy"

export const Header = () => (
  <Sheet
    invertedColors
    color="primary"
    variant="solid"
    sx={{ flexGrow: 1, py: 0.6, px: 1 }}
  >
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Button component="a" href="/" variant="outlined">
        <Typography level="h4" color="primary" sx={{ fontWeight: "bold" }}>
          OpenAPI Demo
        </Typography>
      </Button>
      <Button component="a" variant="solid" href="/cities">
        Cities
      </Button>
    </Stack>
  </Sheet>
)

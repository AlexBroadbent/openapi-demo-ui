import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/joy"
import { LoaderFunctionArgs, json, useLoaderData } from "react-router-dom"

import { Breadcrumb, Breadcrumbs } from "../components"
import { getAllCities, getCity } from "../models/cities"
import { CityDetails, getDetails } from "../models/details"
import { City } from "../types/openapi-schema"

type LoaderResult = {
  city: City
  details: CityDetails
  routes: City[]
}

export const cityLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.cityId) throw Error("No cityId parameter")

  const city = await getCity(params.cityId)
  const details = getDetails(params.cityId)

  const cities = await getAllCities()
  const routes = cities.filter((c) => c.id !== params.cityId)

  return json<LoaderResult>({ city, details, routes })
}

export default () => {
  const { city, details, routes } = useLoaderData() as LoaderResult

  return (
    <Box>
      <Breadcrumbs>
        <Breadcrumb text={city.name} />
      </Breadcrumbs>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container xs={12} sx={{ flexGrow: 1 }}>
            <Grid container xs={7} direction="column">
              <Stack direction="column">
                <Typography level="h1">{city.name}</Typography>
                <Typography level="h3" sx={{ mt: 1 }}>
                  in {city.country} {details.emoji}
                </Typography>
                <Typography level="h3" sx={{ mt: 4 }}>
                  Attractions in {city.name}:
                </Typography>
                <List size="md">
                  {details.attractions.map(
                    (attraction: CityDetails["attractions"][number]) => (
                      <ListItem key={attraction}>
                        <Typography level="title-md">{attraction}</Typography>
                      </ListItem>
                    ),
                  )}
                </List>
              </Stack>
            </Grid>
            <Grid container xs={5}>
              <img
                alt={city.name}
                src={details.imageUrl}
                style={{ width: "100%", maxHeight: 300, maxWidth: 600 }}
              />
            </Grid>
          </Grid>
          <Typography level="h3" sx={{ mt: 4, fontWeight: "bold" }}>
            Route to:
          </Typography>
        </CardContent>
        <CardActions buttonFlex="0 1 120px">
          {routes.map((routeTo: City) => (
            <Button
              component="a"
              key={routeTo.id}
              href={`/routes/${city.id}/${routeTo.id}`}
              sx={{ fontSize: "1.2rem" }}
            >
              {routeTo.name}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Box>
  )
}

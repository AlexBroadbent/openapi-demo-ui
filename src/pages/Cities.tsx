import { Box, Grid, Typography } from "@mui/joy"
import { json, useLoaderData } from "react-router-dom"

import { CityCard } from "../components"
import { getAllCities } from "../models/cities"
import { getDetails } from "../models/details"
import { City } from "../types/openapi-schema"

export const citiesLoader = async () => {
  const cities = await getAllCities()
  return json<City[]>(cities)
}

export default () => {
  const cities = useLoaderData() as City[]

  return (
    <Box>
      <Typography level="h4" sx={{ my: 4 }}>
        All Cities
      </Typography>

      <Grid container spacing={2}>
        {cities.map((city: City) => (
          <CityCard key={city.id} city={city} details={getDetails(city.id)} />
        ))}
      </Grid>
    </Box>
  )
}

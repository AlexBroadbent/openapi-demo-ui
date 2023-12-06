import { Box, Card, CardContent, Stack, Typography } from "@mui/joy"
import { json, LoaderFunctionArgs, useLoaderData } from "react-router-dom"

import { Breadcrumb, Breadcrumbs, DistanceText, RouteMap } from "../components"
import { CityDetails, getDetails } from "../models/details"
import { getRoute, GetRouteResult } from "../models/routes"

type LoaderResult = {
  fromDetails: CityDetails
  toDetails: CityDetails
  route: GetRouteResult
}

export const routeLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.fromId) throw Error("No fromId parameter")
  if (!params.toId) throw Error("No toId parameter")

  const route = await getRoute(params.fromId, params.toId)
  const fromDetails = getDetails(params.fromId)
  const toDetails = getDetails(params.toId)

  return json<LoaderResult>({ route, fromDetails, toDetails })
}

export default () => {
  const { route, fromDetails, toDetails } = useLoaderData() as LoaderResult

  return (
    <Box>
      <Breadcrumbs>
        <Breadcrumb text="Route" />
        <Breadcrumb
          text={route.fromCity.name}
          link={`/cities/${route.fromCity.id}`}
        />
        <Breadcrumb
          text={route.toCity.name}
          link={`/cities/${route.toCity.id}`}
        />
      </Breadcrumbs>

      <Card sx={{ m: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ mt: 2 }}
          >
            <Typography
              level="h1"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {route.fromCity.name}
              <br />
              {getDetails(route.fromCity.id).emoji}
            </Typography>

            <Typography
              level="h1"
              alignItems="center"
              sx={{ height: "100%", textAlign: "center" }}
            >
              to
            </Typography>

            <Typography
              level="h1"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {route.toCity.name}
              <br />
              {getDetails(route.toCity.id).emoji}
            </Typography>
          </Stack>

          <Typography
            level="h3"
            sx={{ mt: 4, mb: 4, textAlign: "center", flexGrow: 1 }}
          >
            <DistanceText miles={route.miles} />
          </Typography>

          <RouteMap
            fromCity={route.fromCity}
            fromDetails={fromDetails}
            toCity={route.toCity}
            toDetails={toDetails}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

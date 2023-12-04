import { Box, Card, CardContent, Stack, Typography } from "@mui/joy"
import { LoaderFunctionArgs, json, useLoaderData } from "react-router-dom"

import { Breadcrumb, Breadcrumbs, DistanceText, RouteMap } from "../components"
import { CityDetails, getDetails } from "../models/details"
import { GetRouteResult, getRoute } from "../models/routes"

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

      <Card>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Typography level="h2" sx={{ textAlign: "center" }}>
              {route.fromCity.name}
              <br />
              {getDetails(route.fromCity.id).emoji}
            </Typography>

            <Typography
              level="h3"
              display="flex"
              alignItems="center"
              sx={{ height: "100%", textAlign: "center" }}
            >
              to
            </Typography>

            <Typography level="h2" sx={{ textAlign: "center" }}>
              {route.toCity.name}
              <br />
              {getDetails(route.toCity.id).emoji}
            </Typography>
          </Stack>

          <Typography
            level="title-md"
            sx={{ my: 2, textAlign: "center", flexGrow: 1 }}
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

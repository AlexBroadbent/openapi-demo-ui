import { Box } from "@mui/joy"
import { latLng, Routing } from "leaflet"
import "leaflet-routing-machine"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

import type { CityDetails } from "../models/details"
import type { City } from "../types/openapi-schema"

const Route: React.FC<{
  fromCity: City
  fromDetails: CityDetails
  toCity: City
  toDetails: CityDetails
}> = ({ fromCity, fromDetails, toCity, toDetails }) => {
  const map = useMap()

  const from = Routing.waypoint(
    latLng(fromDetails.lat, fromDetails.lng),
    `${fromCity.name}, ${fromCity.country}`,
  )
  const to = Routing.waypoint(
    latLng(toDetails.lat, toDetails.lng),
    `${toCity.name}, ${toCity.country}`,
  )

  const route = Routing.control({
    waypoints: [from, to],
    lineOptions: {
      extendToWaypoints: false,
      missingRouteTolerance: 0,
      styles: [{ color: "#0000FF" }],
    },
    show: false,
    showAlternatives: false,
  })
  route.addTo(map)
  route.hide()

  return null
}

export const RouteMap: React.FC<{
  fromCity: City
  fromDetails: CityDetails
  toCity: City
  toDetails: CityDetails
}> = ({ fromCity, fromDetails, toCity, toDetails }) => (
  <Box
    id="map"
    sx={{ minHeight: 300, p: 2, mb: 2, flexGrow: 1, height: "500px" }}
  >
    <MapContainer
      center={[50, 10]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "500px" }}
    >
      <TileLayer
        // eslint-disable-next-line max-len
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLng(fromDetails.lat, fromDetails.lng)}>
        <Popup>
          {fromCity.name}, {fromCity.country} {fromDetails.emoji}
        </Popup>
      </Marker>
      <Marker position={latLng(toDetails.lat, toDetails.lng)}>
        <Popup>
          {toCity.name}, {toCity.country} {toDetails.emoji}
        </Popup>
      </Marker>
      <Route
        fromCity={fromCity}
        fromDetails={fromDetails}
        toCity={toCity}
        toDetails={toDetails}
      />
    </MapContainer>
  </Box>
)

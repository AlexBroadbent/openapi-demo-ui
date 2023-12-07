import type { City, Route } from "../types/openapi-schema"
import { apiClient } from "./client"

export type GetRouteResult = {
  miles: Route["miles"]
  fromCity: City
  toCity: City
}

export const getRoute = async (
  from: City["id"],
  to: City["id"],
): Promise<GetRouteResult> => {
  const route = await apiClient.GET("/route", {
    params: { query: { from, to } },
    headers: {
      "X-API-Key": "test",
      Accept: "application/json",
    },
  })
  if (route.response.status !== 200 || !route.data)
    throw new Response("Cannot fetch route", { status: route.response.status })

  const fromCity = await apiClient.GET("/city/{id}", {
    params: { path: { id: from } },
    headers: {
      "X-API-Key": "test",
      Accept: "application/json",
    },
  })
  if (fromCity.response.status !== 200 || !fromCity.data)
    throw new Response("Cannot fetch 'from' city", {
      status: fromCity.response.status,
    })

  const toCity = await apiClient.GET("/city/{id}", {
    params: { path: { id: to } },
    headers: {
      "X-API-Key": "test",
      Accept: "application/json",
    },
  })
  if (toCity.response.status !== 200 || !toCity.data)
    throw new Response("Cannot fetch 'to' city", {
      status: toCity.response.status,
    })

  return {
    miles: route.data.miles,
    fromCity: fromCity.data,
    toCity: toCity.data,
  }
}

import type { City } from "../types/openapi-schema"
import { apiClient } from "./client"

export const getAllCities = async () => {
  const res = await apiClient.GET("/city", {
    headers: {
      "X-API-Key": "test",
      Accept: "application/json",
    },
  })

  if (res.response.status !== 200 || !res.data?.data)
    throw new Error("Cannot fetch cities")

  return res.data.data
}

export const getCity = async (id: City["id"]) => {
  const res = await apiClient.GET("/city/{id}", {
    params: { path: { id } },
    headers: {
      "X-API-Key": "test",
      Accept: "application/json",
    },
  })

  if (res.response.status !== 200 || !res.data?.data)
    throw new Response("Cannot fetch city", { status: res.response.status })

  return res.data.data
}

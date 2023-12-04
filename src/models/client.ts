import createClient from "openapi-fetch"

import type { paths } from "../types/openapi-schema"

export const apiClient = createClient<paths>({
  baseUrl: "http://0.0.0.0:8000/v1",
})

import type {
    components,
    paths,
  } from "../../../openapi-demo/src/types/generated/openapi-schema"
  
  export { components, paths }
  
  export type City = components["schemas"]["City"]
  export type Route = components["schemas"]["Route"]
  
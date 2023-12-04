import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy"
import React from "react"

import { CityDetails } from "../models/details"
import { City } from "../types/openapi-schema"

export const CityCard: React.FC<{
  city: City
  details: CityDetails
}> = ({ city, details }) => (
  <Card sx={{ m: 1, width: 300 }}>
    <CardOverflow>
      <AspectRatio ratio="2">
        <img
          alt="City Image"
          height="140"
          loading="lazy"
          src={details.imageUrl}
        />
      </AspectRatio>
    </CardOverflow>
    <CardContent>
      <Typography level="h2">{city.name}</Typography>
      <Typography level="title-lg" color="neutral" sx={{ mt: 1 }}>
        {city.country} {details.emoji}
      </Typography>
    </CardContent>
    <CardActions>
      <Button component="a" href={`/cities/${city.id}`} color="primary">
        View Routes
      </Button>
    </CardActions>
  </Card>
)

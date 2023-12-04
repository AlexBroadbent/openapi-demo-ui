import React from "react"

const miFormatter = new Intl.NumberFormat("en-GB", {
  style: "unit",
  unit: "mile",
  unitDisplay: "short",
  maximumFractionDigits: 0,
})

const kmFormatter = new Intl.NumberFormat("en-GB", {
  style: "unit",
  unit: "kilometer",
  unitDisplay: "short",
  maximumFractionDigits: 0,
})

export const DistanceText: React.FC<{ miles: number }> = ({ miles }) =>
  `${miFormatter.format(miles)} / ${kmFormatter.format(miles * 1.60934)}`

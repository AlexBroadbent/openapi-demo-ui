import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/joy"
import { FC, ReactNode } from "react"

export const Breadcrumb: FC<{ text: string; link?: string }> = ({
  text,
  link,
}) =>
  link ? (
    <Link underline="hover" href={link}>
      {text}
    </Link>
  ) : (
    <Typography color="neutral">{text}</Typography>
  )

export const Breadcrumbs: FC<{ children: ReactNode }> = ({ children }) => (
  <MuiBreadcrumbs aria-label="breadcrumbs" sx={{ mb: 2 }}>
    <Link underline="hover" href="/">
      OpenAPI Demo
    </Link>
    {children}
  </MuiBreadcrumbs>
)

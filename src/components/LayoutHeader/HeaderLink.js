import React from "react"
import { Link } from "gatsby"

export default function HeaderLink({ to, title }) {
  return <Link to={to}>{title}</Link>
}

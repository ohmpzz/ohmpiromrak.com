import React from "react"

import { rhythm } from "../../utils/typography"

function GetInTouch({ email, title }) {
  return (
    <a
      css={{
        fontSize: rhythm(2 / 4),
        width: "35px",
        height: "35px",
        boxShadow: `none`,
        border: "1px solid",
        borderRadius: "8px",
        padding: ".25rem",
        transition:
          "background 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "&:hover": {
          background: "#6880a110",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
      href={`mailto:${email}`}
    >
      {title}
    </a>
  )
}

export default GetInTouch

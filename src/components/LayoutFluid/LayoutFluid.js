import React from "react"
import LayoutHeader from "../LayoutHeader"
import { rhythm } from "../../utils/typography"

import SEO from "../SEO"

function LayoutFluid(props) {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
      }}
    >
      <SEO />
      <header>
        <LayoutHeader />
      </header>
      <main>{props.children}</main>
      <footer
        style={{
          marginTop: rhythm(2),
          marginBottom: rhythm(1),
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()}, Created with ❤️ by
        {` `}
        <a href="https://github.com/ohmpzz" rel="nofollow noreferrer">
          Ohm Piromrak
        </a>
      </footer>
    </div>
  )
}

export default LayoutFluid

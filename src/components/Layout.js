import React from "react"
import { Link } from "gatsby"
import LayoutHeader from "./LayoutHeader"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    let header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: ` ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <LayoutHeader />
          {header}
        </header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(1),
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}, Personal blog by
          {` `}
          <a href="https://github.com/ohmpzz" rel="nofollow noreferrer">
            Ohm Piromrak
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout

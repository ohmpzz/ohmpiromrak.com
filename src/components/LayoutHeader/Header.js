import React from "react"
import styled from "@emotion/styled"

import HeaderLink from "./HeaderLink"

export default function Header() {
  const Nav = styled.nav`
    padding: 20px 20px 0;
    background: #fff;
    background: rgba(255, 255, 255, 0.9);
    margin: 0 auto;
    text-align: right;
    z-index: 100;
  `
  return (
    <Nav>
      <HeaderLink to="/" title="Me" />
      <a href="https://github.com/ohmpzz" rel="noreferrer nofollow">
        GitHub
      </a>
    </Nav>
  )
}

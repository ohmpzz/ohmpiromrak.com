import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

const Img = styled("img")`
  height: ${rhythm(2)};
  filter: grayscale(96%);
  flex: 0 0 auto;
  margin: 16px;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: grayscale(30%);
  }
`

function IconSkill({ publicURL, name }) {
  return <Img src={publicURL} alt={name} title={name} />
}

export default IconSkill

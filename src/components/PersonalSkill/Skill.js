import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IconSkill from "./IconSkill"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import { gutter, mq } from "../../utils/presets"

export default function Skill() {
  const data = useStaticQuery(graphql`
    query Logo {
      allFile(filter: { relativePath: { regex: "/skill-logo/" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `)

  const Grid = styled(`div`)`
    column-count: 3;
    column-gap: ${gutter.default};
    ${mq.mobile} {
      column-count: 4;
    }
    ${mq.tablet} {
      column-count: 8;
    }
    ${mq.xl} {
      column-gap: ${gutter.tablet};
    }
  `

  const GridItem = styled(`div`)`
    break-inside: avoid;
    position: relative;
    margin-bottom: ${gutter.default};
    ${mq.xl} {
      margin-bottom: ${gutter.tablet};
    }
  `

  return (
    <div
      style={{
        textAlign: `center`,
      }}
    >
      <h2 style={{ fontSize: rhythm(2 / 4) }}>Skills</h2>
      <Grid>
        {data.allFile.nodes.map(i => {
          return (
            <GridItem key={i.name}>
              <IconSkill key={i.name} {...i} />
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

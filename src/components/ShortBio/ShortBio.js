import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import GetInTouch from "./GetInTouch"
import { rhythm } from "../../utils/typography"

export default function ShortBio() {
  const data = useStaticQuery(graphql`
    query ShortBioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(
            width: 250
            height: 250
            traceSVG: { background: "#fbfafc", color: "#dbd4e2" }
          ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `)

  const { author, email } = data.site.siteMetadata

  return (
    <div>
      <div
        css={{
          margin: `${rhythm(1.5)} 0`,
          justifyContent: `center`,
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          title={`This is ${author}`}
          css={{
            marginBottom: 0,
            minWidth: 250,
            borderRadius: `100%`,
            "&:hover": {
              img: {
                opacity: "1 !important",
                transition: "none !important",
              },
              "img + picture > img": {
                opacity: "0 !important",
              },
              span: {
                opacity: "1 !important",
              },
            },
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div css={{ textAlign: `center` }}>
        <h1 css={{ fontSize: rhythm(1), textAlign: `center` }}>{author}</h1>
        <p>Software Engineer passionate about Web Development.</p>
        <GetInTouch email={email} title="Get in touch via email" />
      </div>
    </div>
  )
}

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image, title, slug }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || siteMetadata.description
  const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null
  const url = `${siteMetadata.siteUrl}${slug}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title,
          }
        : {
            title: `${siteMetadata.title} — A blog by Ohm Piromrak`,
          })}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: `og:title`,
          content: title || siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title || siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: metaImage,
                },
                {
                  name: "twitter:image",
                  content: metaImage,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: "",
  title: "",
  slug: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO

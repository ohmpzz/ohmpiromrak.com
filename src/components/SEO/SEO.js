import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image, title, slug }) {
  const {
    site: { siteMetadata },
    image: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        image: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(height: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
  const metaImage = image
    ? `${siteMetadata.siteUrl}/${image}`
    : `${siteMetadata.siteUrl}${childImageSharp.fixed.src}`
  const metaUrl = `${siteMetadata.siteUrl}${slug}`
  const metaTitle = title || siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>
        {title || `${siteMetadata.title} - I make things with words and code.`}
      </title>
      {/* General tags */}
      <meta name="description" content={metaDescription} />
      {/* <meta name="image" content={metaImage} /> */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="title" content={metaTitle} />
      <meta name="author" content="Ohm Piromrak" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:site_name" content="Ohm Piromrak" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
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

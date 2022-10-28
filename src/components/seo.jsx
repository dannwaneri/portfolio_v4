import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import defaultOgImage from "../../static/generic.png";



const SEO = ({
  title,
  description,
  lang,
  meta,
  canonical,
  blogOgImage,
  coverImage,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            lastBuildDate
            siteUrl
            twitterUsername
            siteLanguage
            siteLocale
            image
          }
        }
      }
    `)

    const metaDescription = description || site.siteMetadata.description
    const ogImage = blogOgImage || coverImage || site.siteMetadata.image  
    const ogImageUrl = `${site.siteMetadata.siteUrl}${ogImage}`

return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImageUrl,
        },
      ].concat(meta)}
    >
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}


SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

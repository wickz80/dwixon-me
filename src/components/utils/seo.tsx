/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"

interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: any
}

interface SEOQueryResult {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const SEOQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO: React.FunctionComponent<SEOProps> = props => {
  const data: SEOQueryResult = useStaticQuery(SEOQuery)

  const description = props.description || data.site.siteMetadata.description
  const lang = props.lang || "en"
  const meta = props.meta || []

  return (
    // tslint:disable-next-line
    <Helmet
      htmlAttributes={{ lang }}
      title={props.title}
      titleTemplate={`%s | dwixon.me`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: description,
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
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

export default SEO

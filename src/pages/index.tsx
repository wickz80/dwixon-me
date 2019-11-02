import * as React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { graphql } from "gatsby";
import LongDate from "../components/utils/long-date";

export const queryArticles = graphql`
  query FeaturedArticleQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`

export interface FeaturedArticleProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            html: string
            frontmatter: {
              date: string,
              path: string,
              title: string
            }
          }
        }
      ]
    }
  }
}

const IndexPage: React.FunctionComponent<FeaturedArticleProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const article = edges[0].node
  return (

    <Layout>
      <SEO title="home" />

      <div className="blog-post">
        <h1>{article.frontmatter.title}</h1>
        <LongDate date={article.frontmatter.date} />
        <br />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

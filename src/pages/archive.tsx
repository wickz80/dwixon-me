import * as React from "react"
import Layout from "../components/layouts/layout"
import ArticleListItem from "../components/common/article-list-item"
import { graphql } from "gatsby"
import SEO from "../components/utils/seo"

export const queryArticles = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            author
          }
        }
      }
    }
  }
`

export interface ArchiveProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              date: string
              path: string
              title: string
              author: string
            }
          }
        }
      ]
    }
  }
}

const Archive: React.FunctionComponent<ArchiveProps> = ({ data }: ArchiveProps) => (
  <Layout>
    <SEO title="archive" />
    {data.allMarkdownRemark.edges.map(article => (
      <ArticleListItem {...article.node.frontmatter} key={article.node.id} />
    ))}
  </Layout>
)

export default Archive

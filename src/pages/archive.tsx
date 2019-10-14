import * as React from "react"
import Layout from "../components/layouts/layout"
import ArticleTitle from "../components/common/article-title";
import { graphql } from "gatsby";

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

const Archive: React.FunctionComponent<ArchiveProps> = ({data}: ArchiveProps) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(article => (
      <ArticleTitle article={article.node.frontmatter} key={article.node.id} />
    ))}
  </Layout>
)

export default Archive

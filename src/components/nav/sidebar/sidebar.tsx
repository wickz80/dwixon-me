import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SidebarListItem from "./sidebar-list-item"
import "./styles.scss"

export interface Article {
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

export const Sidebar: React.FunctionComponent = () => (
  <div className="sidebar-main">
    <div className="sidebar-title">
      <strong>You might also like...</strong>
      <div
        style={{
          paddingTop: "1rem"
        }}
      >
        <StaticQuery
          query={graphql`
            query SidebarQuery {
              allMdx {
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
          `}
          render={props => (
            <div>
              {props.allMdx.edges.map((article: Article) => (
                <SidebarListItem {...article.node.frontmatter} key={article.node.id} />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  </div>
)

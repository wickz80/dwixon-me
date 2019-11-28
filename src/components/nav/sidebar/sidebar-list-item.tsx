import * as React from "react"
import { Link } from "gatsby"

interface ArticleProps {
  date: string
  path: string
  title: string
  author: string
}

export const SidebarListItem: React.FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <div className="sidebar-item">
    <Link
      to={props.path}
      style={{
        color: "rgba(0,0,0,0.7)"
      }}
    >
      <h6
        style={{
          paddingLeft: "1rem",
          marginBottom: ".3rem"
        }}
      >
        <strong>{props.title}</strong>
      </h6>
    </Link>
    <p
      style={{
        paddingLeft: "1.9rem",
        fontWeight: 600
      }}
    >
      {new Date(props.date).toLocaleDateString()}
    </p>
  </div>
)

export default SidebarListItem

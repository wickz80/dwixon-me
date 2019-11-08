import * as React from "react"

interface ArticleProps {
  date: string
  path: string
  title: string
  author: string
}

export const SidebarListItem: React.FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <div
    style={{
      borderBottom: "1px solid darkgray",
      paddingTop: "15px",
      marginRight: "15px"
    }}
  >
    <a style={{ color: "#6364ca" }} href={props.path}>
      <h6><strong>{props.title}</strong></h6>
    </a>
    <p
      style={{
        paddingLeft: "10px",
        fontWeight: 600
      }}
    >{(new Date(props.date).toLocaleDateString())}</p>
    <br />
  </div>
)

export default SidebarListItem

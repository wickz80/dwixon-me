import * as React from "react"
import { ArticleSubtitle } from "./article-subtitle"

interface ArticleProps {
  date: string
  path: string
  title: string
  author: string
}

export const ArticleListItem: React.FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <div>
    <a
      style={{
        color: "black",
        fontFamily: `"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI"`,
        fontSize: "14px"
      }}
      href={props.path}
    >
      <h4>{props.title}</h4>
    </a>
    <ArticleSubtitle author={props.author} date={props.date} />
    <hr />
  </div>
)

export default ArticleListItem

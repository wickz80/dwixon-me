import * as React from "react"
import { ArticleSubtitle } from "./article-subtitle";

interface ArticleProps {
  date: string,
  path: string,
  title: string,
  author: string,
}

export const ArticleTitle: React.FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <div>
    <a
      style={{ color: "black" }}
      href={props.path}
    >
      <h4>{props.title}</h4>
    </a>
    <ArticleSubtitle
      author={props.author}
      date={props.date}
    />
    <br />
  </div>
)

export default ArticleTitle

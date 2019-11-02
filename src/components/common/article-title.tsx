import * as React from "react"
import LongDate from "../utils/long-date";

interface ArticleProps {
  article: {
    date: string,
    path: string,
    title: string,
  }
}

const ArticleTitle: React.FunctionComponent<ArticleProps> = (data) => (
  <div>
    <a
      style={{ color: "black" }}
      href={data.article.path}
    >
      <h4>{data.article.title}</h4>
    </a>
    <LongDate date={data.article.date} />
    <br />
  </div>
)

export default ArticleTitle

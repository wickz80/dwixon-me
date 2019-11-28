import React from "react"
import LongDate from "../utils/long-date"

interface Props {
  date: string
  author: string
}

export const ArticleSubtitle = (props: Props) => (
  <p className="article-metadata">
    <strong>{LongDate(props.date)}</strong>
    <i>
      {" by "}
      <strong>{props.author}</strong>
    </i>
  </p>
)

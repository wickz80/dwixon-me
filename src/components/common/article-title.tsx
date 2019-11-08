import React from "react"

export const ArticleTitle = (props: { title: string }) => (
  <h1 style={{
    fontWeight: 550,
    textTransform: "lowercase",
    fontFamily: "'Futura PT',-apple-system,'BlinkMacSystemFont','Segoe UI'"
  }}>
    {props.title}

  </h1>
)
import * as React from "react"

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
      style={{color: "black"}} 
      href={data.article.path}
    >
      <h4>{data.article.title}</h4>
    </a>
    
    <h6 
      style={{
        paddingLeft: "10px"
      }}
    >
      {new Date(data.article.date).toLocaleDateString(
      "en-US", 
      { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" }
      )}
    </h6>
    
    <br />
  </div>
)

export default ArticleTitle

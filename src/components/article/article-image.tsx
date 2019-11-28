import * as React from "react"

interface ImageProps {
  src: string
}

export const ArticleImage: React.FunctionComponent<ImageProps> = props => (
  <img
    src={props.src}
    style={{
      maxWidth: "-webkit-fill-available",
      paddingBottom: "10px"
    }}
  />
)

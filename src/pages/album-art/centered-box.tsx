import * as React from "react"


export const CenteredBox: React.FunctionComponent = ({ children }) => {
  return (
    <div style={{
      background: "#f8f9fa",
      padding: "3rem",
      borderRadius: "0.5rem",
      textAlign: "center"
    }}
    >
      {children}
    </div>
  )
}


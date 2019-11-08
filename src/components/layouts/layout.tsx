import * as React from "react"
import "../../styles/_imports.scss"
import Header from "../common/header"

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="site-container">
      <Header />

      <div className="content-wrap">
        <div className="container">
          <main className="pt-4">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout

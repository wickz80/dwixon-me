import * as React from "react"
import "../../styles/_imports.scss"
import Header from "../common/header"
import "./styles.scss"
import { Sidebar } from "../../components/common/sidebar"

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="site-container">
      <Header />

      <div className="content-wrap">

        <div className="container">
          <div className="row">

            <div className="col-md-3" id="sidebar-container">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <main className="article-container">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout

import * as React from "react"
import "./styles/_imports.scss"
import TopNav from "../nav/top-nav/top-nav"
import "./styles/styles.scss"
import { Sidebar } from "../nav/sidebar/sidebar"

interface Props {
  noMainContent?: boolean
}

const Layout: React.FunctionComponent<Props> = ({ children, noMainContent }) => {
  return (
    <div className="site-container">
      <TopNav />
      <div className="content-wrap">
        <div className={noMainContent ? "container nomax" : "container"}>
          {noMainContent ? (
            children
          ) : (
            <div className="row">
              <div className="col-md-3" id="sidebar-container">
                <Sidebar />
              </div>
              <div className="col-md-9">
                <main className="article-container">{children}</main>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Layout

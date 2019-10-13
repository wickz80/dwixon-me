import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import "../../styles/_imports.scss"
import Footer from "../common/footer"
import Header from "../common/header"

interface SiteTitleQueryResult {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FunctionComponent = ({ children }) => {
  const data: SiteTitleQueryResult = useStaticQuery(siteTitleQuery)

  return (
    <div className="site-container">
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="content-wrap">
        <div className="container">
          <main className="pt-4">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout

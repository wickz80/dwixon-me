import * as React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Gatsby Typescript Boilerplate" />

    <section>
      <div className="row">
        <div className="col-md-12">
          <h1>
            brave new world
          </h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

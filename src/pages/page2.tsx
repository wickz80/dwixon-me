import * as React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Second page" />

    <h1>Second page</h1>
    <p>Another one</p>
  </Layout>
)

export default SecondPage

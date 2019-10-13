import * as React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import Image from "../components/common/image"

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Gatsby Typescript Boilerplate" />

    <section>
      <div className="row">
        <div className="col-md-12">
          <h1>Gatsby Typescript Boilerplate</h1>
          <p>
            <ul>
              <li>Gatsby</li>
              <li>Typescript</li>
              <li>TSLint</li>
              <li>Prettier</li>
              <li>SASS</li>
              <li>Bootstrap</li>
            </ul>
          </p>
          <p style={{ maxWidth: `230px`, marginBottom: `1.45rem` }}>
            <Image />
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

import * as React from "react";

import Layout from "../components/layouts/layout";
import SEO from "../components/utils/seo";

const NotFoundPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="404: Page not found" />

    <h1>Waat...</h1>
    <p>Page does not exist</p>
  </Layout>
);

export default NotFoundPage;

const path = require(`path`)
const webpack = require("webpack")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
              author
            }
            body
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/article.tsx`),
      context: node,
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: require.resolve("bootstrap"),
            use: loaders.null()
          }
        ]
      }
    })
  }
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: "popper.js",
        Bootstrap: "bootstrap.js"
      })
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src")
      }
    }
  })
}

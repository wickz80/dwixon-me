const path = require(`path`)
const webpack = require('webpack')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/article.tsx`),
    })
  })
}


exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: require.resolve('bootstrap'),
            use: loaders.null()
          },
          {
            test: require.resolve('jquery'),
            use: loaders.null()
          }
        ]
      }
    })
  }
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: 'popper.js',
        Bootstrap: 'bootstrap.js'
      })
    ]
  })
}
import * as React from "react"
import Layout from "../layouts/layout"
import SEO from "../utils/seo"
import { ArticleSubtitle } from "./article-subtitle"
import { ArticleTitle } from "./article-title"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface ArticleProps {
  pageContext: {
    frontmatter: {
      date: string
      path: string
      title: string
      author: string
    }
    body: string
  }
}

export default ({ pageContext }: ArticleProps) => {
  const { frontmatter } = pageContext // data.mdx holds your post data
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <ArticleTitle title={frontmatter.title} />
        <ArticleSubtitle author={frontmatter.author} date={frontmatter.date} />
        <br />
      </div>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Layout>
  )
}

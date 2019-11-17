import * as React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/utils/seo";
import { ArticleSubtitle } from "../components/article/article-subtitle";
import { ArticleTitle } from "../components/article/article-title";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface ArticleProps {
  pageContext: {
    frontmatter: {
      date: string;
      path: string;
      title: string;
      author: string;
    };
    body: string;
  };
}

export default ({ pageContext }: ArticleProps) => {
  const { frontmatter } = pageContext; // data.mdx holds your post data
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
  );
};

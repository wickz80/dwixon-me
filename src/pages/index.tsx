import * as React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/utils/seo";
import { graphql } from "gatsby";
import { ArticleSubtitle } from "../components/article/article-subtitle";
import { ArticleTitle } from "../components/article/article-title";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const queryArticles = graphql`
  query FeaturedArticleQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1) {
      edges {
        node {
          id
          body
          frontmatter {
            date
            path
            title
            author
          }
        }
      }
    }
  }
`;

export interface FeaturedArticleProps {
  children: any;
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string;
            body: string;
            frontmatter: {
              date: string;
              path: string;
              title: string;
              author: string;
            };
          };
        }
      ];
    };
  };
}

const IndexPage: React.FunctionComponent<FeaturedArticleProps> = ({ data }) => {
  const { edges } = data.allMdx;
  const article = edges[0].node;
  const { frontmatter } = article;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <ArticleTitle title={frontmatter.title} />
        <ArticleSubtitle author={frontmatter.author} date={frontmatter.date} />
        <br />
      </div>
      <MDXRenderer>{article.body}</MDXRenderer>
    </Layout>
  );
};

export default IndexPage;

import React from "react";
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import  SEO  from "../components/seo"
import {
  HeadTag,
  ParagraphStyle,
  StyledLink,
    BlogHeader,
    BlogTitle,
    BlogDes,
    DivStyle,
  DivTag ,
} from '../components/Blog/blog.style'


export default function BlogPage({data}) {
  const posts = data.posts.edges;
  return (
    <>
   <Layout>
  <div>
      <DivStyle>
      <DivTag></DivTag>
    <HeadTag>Blog</HeadTag>
    <ParagraphStyle>A collection of my somewhat (un)organized musings.</ParagraphStyle>
    {posts.map(post =>
          <article key={post.node.frontmatter.slug}>
          <StyledLink  to={"/blog/" + post.node.frontmatter.slug}>
          <BlogHeader>
            <BlogTitle>{post.node.frontmatter.title}</BlogTitle>
            <BlogDes>{post.node.frontmatter.description}</BlogDes>
          </BlogHeader>
          </StyledLink>
          </article>
          )}
  </DivStyle>
    </div>
  </Layout>
  </>
  );
}

export const Head = ({data}) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  return (
  <SEO title='Blog' canonical={siteUrl} />
)}

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      siteUrl
    }
  }
 posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        frontmatter {
          title
          slug
          description
        }
      }
    }
  }
}
`


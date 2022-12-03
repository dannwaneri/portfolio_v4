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
  const posts = data.allMarkdownRemark.edges
  return (
    <>
   <Layout>
  <div>
      <DivStyle>
      <DivTag></DivTag>
    <HeadTag>Blog</HeadTag>
    <ParagraphStyle>: A compendium of my rather haphazard reflections.</ParagraphStyle>
    {posts.map(({ node }) =>
          <article key={node.fields.slug}>
          <StyledLink  to={node.fields.slug}>
          <BlogHeader>
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
            <BlogDes>{node.frontmatter.description}</BlogDes>
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
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      frontmatter: { published: { eq: true }, newsletter: { ne: true } }
    }
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          published
        }
      }
    }
  }
}
`


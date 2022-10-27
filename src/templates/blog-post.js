import React from "react";
import { graphql } from 'gatsby'
/**import SEO from "react-seo-component" **/
// import { useSiteMetadata } from "../components/hooks/use-site-metadata";
import Layout from "../components/Layout"
import {
  DivStyle,
  DivTag,
  TemTitle
} from "../components/Blog/blog.style"

import  SEO  from "../components/seo"

const  BlogPost  = ({data}) => {
  const post = data.markdownRemark;
    return (
        <Layout>
          <DivStyle>
        <DivTag></DivTag>
          <article>
            <header>
            <TemTitle>
                {post.frontmatter.title}
            </TemTitle>
            <p style={{opacity: 0.5,marginTop:-0.5}}>
            Published <span>{post.frontmatter.date}</span>    <span>{post.frontmatter.readTime}min read</span>
          </p>
          </header>
          {/**<TemDes>{post.frontmatter.description}</TemDes>**/}
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            </article>
            </DivStyle>
        </Layout>
    )
}
export default  BlogPost 


export const Head = ({ data}) => {
  const post = data.markdownRemark;
  const siteUrl = data.site.siteMetadata.siteUrl
  const defaultCanonical = siteUrl + "/blog/" + post.frontmatter.slug
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      canonical={defaultCanonical}
        coverImage={post.frontmatter.coverImage}
    />
  )
}



export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter : {slug: { eq: $id }}) {
      frontmatter { 
          title
          description
          slug
          date(formatString: "MMMM Do, YYYY")
          readTime
          coverImage {
            publicURL
          }
      }
      html
      excerpt
    }
  }
`
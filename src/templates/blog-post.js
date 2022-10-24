import React from "react";
import { graphql } from 'gatsby'
/**import SEO from "react-seo-component" **/
import { useSiteMetadata } from "../components/hooks/use-site-metadata";
import Layout from "../components/Layout"
import {
  DivStyle,
  DivTag,
  TemTitle
} from "../components/Blog/blog.style"

import { SEO } from "../components/seo"

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


export const Head = ({ data: { markdownRemark: post } }) => {
  const {
        siteUrl,
     } = useSiteMetadata();
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      url= {siteUrl + "/blog/" + post.frontmatter.slug}
    />
  )
}



export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter : {slug: { eq: $id }}) {
      frontmatter { 
          title
          description
          date(formatString: "MMMM Do, YYYY")
          readTime
      }
      html
      excerpt
    }
  }
`
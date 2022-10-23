import React from "react";
import { graphql } from 'gatsby'
import SEO from "react-seo-component"
import { useSiteMetadata } from "../components/hooks/use-site-metadata";
import Layout from "../components/Layout"
import {
  DivStyle,
  DivTag,
  TemTitle
} from "../components/Blog/blog.style"


const  BlogPost  = ({data}) => {
  const post = data.markdownRemark;
  const {
        title: siteTitle,
       siteUrl,
      siteLanguage,
       siteLocale,
       twitterUsername,
        name,
     } = useSiteMetadata();
    return (
      <>
      <SEO
       title={post.frontmatter.title}
        titleTemplate={siteTitle}
       description={post.frontmatter.description}
      pathname={`${siteUrl}${post.frontmatter.slug}`}
       article={true}
      siteLanguage={siteLanguage}
       siteLocale={siteLocale}
      twitterUsername={twitterUsername}
        author={name}
        publishedDate={post.frontmatter.date}
       modifiedDate={new Date(Date.now()).toISOString()}
     />
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
        </>
    )
}
export default  BlogPost 


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
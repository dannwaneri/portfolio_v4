import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import {
  DivStyle,
  DivTag,
  TemTitle,
  TemDes,
  TemParaone,
  TempParatwo
} from "../components/Blog/blog.style"


const  BlogPost  = ({data}) => {
  const post = data.markdownRemark
    
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
    }
  }
`
import React from "react";
import { graphql } from "gatsby"
import {motion} from "framer-motion";
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


const containerVariants = {
  hidden:{
      opacity: 0,
  },
  visible:{
      opacity: 1,
      transition:{
          delay:1.4, duration:1.5
      }
  },
  exit:{
      x:'-100vw',
      transition:{
          ease:'easeInOut'
      }
  }
}





export default function BlogPage({data}) {
  const posts = data.posts.edges;
 /**  const {
    title,
    description,
    siteUrl,
   siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();**/
  return (
    <>
    {/**<SEO
        title={`blogs`}
        titleTemplate={title}
       description={description}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
  />**/}
   <Layout>
  <motion.div 
    variant={containerVariants} 
    initial="hidden"
    animate="visible"
    exit="exit"
    >
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
    </motion.div>
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


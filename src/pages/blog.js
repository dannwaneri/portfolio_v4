import React from "react";
import { graphql } from "gatsby"
import {motion} from "framer-motion";
import Layout from '../components/Layout'
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
  return (
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
  );
}


export const pageQuery = graphql`
query MyQuery {
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


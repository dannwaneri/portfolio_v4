import React  from "react";
import {motion} from "framer-motion";
import { graphql } from "gatsby"
/**import SEO from "react-seo-component";**/
import Layout from '../components/Layout'
import { useSiteMetadata } from "../components/hooks/use-site-metadata";
import { SEO } from "../components/seo"

import {
  ParagraphStyle,
  HeadTag,
  SpanTag, 
    LinkWrapper,
    UlStyle,
    SpanStyle,
    DottedLine,
    DateWrapper,
} from '../components/Projects/Project.style';

const containerVariants = {
  hidden:{
      opacity: 0,
  },
  visible:{
      opacity: 1,
      transition:{
          delay:1.5, duration:1.5
      }
  },
  exit:{
      x:'-100vw',
      transition:{
          ease:'easeInOut'
      }
  }
}



export default function ProjectPage(props) {
  const projects = props.data.allMongodb21PortfolioprojectProjects.edges;
  /**const {
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
        title={`Projects`}
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
    <HeadTag>Projects</HeadTag>
    <ParagraphStyle>
    Internet thingies built with React, Next.js Node.js, and TypeScript.
</ParagraphStyle>
<UlStyle>
{projects.map(projects =>
          <LinkWrapper key={projects.node.id} href='/'>
            <SpanTag>{ projects.node.name }</SpanTag>
            <SpanStyle>{projects.node.description }</SpanStyle>
            <DottedLine/>
            <DateWrapper>{projects.node.date}</DateWrapper>
          </LinkWrapper>
           )}
      </UlStyle>
</motion.div>
    </Layout>
    </>
  );
}


export const Head = () => (
  <SEO title='Project | Daniel Nwaneri ' />
)

export const pageQuery = graphql`
  query {
    allMongodb21PortfolioprojectProjects{
      edges {
        node {
          id
          name
          description
          date
        }
      }
    }
  }
`
import React  from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout'
import  SEO  from "../components/seo"

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

export default function ProjectPage(props) {
  const projects = props.data.allMongodb21PortfolioprojectProjects.edges;
  return (
    <>
   <Layout>
    <div>
    <HeadTag>Projects</HeadTag>
    <ParagraphStyle>
    Internet contraptions constructed with React, Next.js Node.js, and TypeScript.
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
</div>
    </Layout>
    </>
  );
}


export const Head = ({data}) => {
const siteUrl = data.site.siteMetadata.siteUrl
return(
  <SEO title='Project' canonical={siteUrl} />
)}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
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

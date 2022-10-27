import React from "react";
import { graphql } from "gatsby"
/**import SEO from "react-seo-component";**/
import Layout from '../components/Layout'
import Home from "../components/Home/Home.component"
/**import { useSiteMetadata } from "../components/hooks/use-site-metadata";**/
import  SEO  from "../components/seo"

export default function HomePage() {
  /**const {
        title,
        description,
        siteUrl,
       siteLanguage,
        siteLocale,
        twitterUsername,
        image
      } = useSiteMetadata();**/
  return (
    <>
    {/**<SEO
        title={`Home`}
        titleTemplate={title}
       description={description}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        image={image}
  />**/}
   <Layout>
    <Home/>
    </Layout>
    </>
  );
}


export const Head = ({data}) => {
  const siteUrl = data.site.siteMetadata.siteUrl
  return (
  <SEO title='Home' canonical={siteUrl} />
)}



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }

    `
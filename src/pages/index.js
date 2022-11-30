import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout'
import Home from "../components/Home/Home.component"
import  SEO  from "../components/seo"

export default function HomePage({data}) {
  const siteUrl = data.site.siteMetadata.siteUrl
  return (
    <>
   <Layout>
   <SEO title='Home' canonical={siteUrl} />
    <Home/>
    </Layout>
    </>
  );
}


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
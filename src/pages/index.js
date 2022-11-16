import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout'
import Home from "../components/Home/Home.component"
import  SEO  from "../components/seo"

export default function HomePage() {
  return (
    <>
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
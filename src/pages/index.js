import React from "react";
import SEO from "react-seo-component";
import Layout from '../components/Layout'
import Home from "../components/Home/Home.component"
import { useSiteMetadata } from "../components/hooks/use-site-metadata";

export default function HomePage() {
  const {
        title,
        description,
        siteUrl,
       siteLanguage,
        siteLocale,
        twitterUsername,
      } = useSiteMetadata();
  return (
    <>
    <SEO
        title={`Home`}
        titleTemplate={title}
       description={description}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
   <Layout>
    <Home/>
    </Layout>
    </>
  );
}
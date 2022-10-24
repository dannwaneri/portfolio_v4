import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            name
            description
            lastBuildDate
            siteUrl
            twitterUsername
            siteLanguage
            siteLocale
            image
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
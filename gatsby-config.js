/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
**/

require("dotenv").config({
  path: `.env`,
})

const siteMetadata = {
    title: `Daniel Nwaneri`,
    description: `Daniel Nwaneri is a Backend developer who specializes in JavaScript, Nodejs and  backend web development`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    image: `${__dirname}/src/static/image/generic.png`,
    siteUrl: `https://www.danielnwaneri.me/`,
    twitterUsername: `@dannwaneri`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-slug`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
          dbName: `21-PORTFOLIO-PROJECT`,
          collection: 'projects',
          server: {
              address: process.env.MONGO_CLUSTER_ADDRESS,
              port: 27017
          },
          auth: {
              user: process.env.MONGO_USER,
              password:  process.env.MONGO_PASSWORD
          },
          extraParams: {
            replicaSet: process.env.MONGO_REPLICA_SET,
              ssl: true,
              authSource: `admin`,
              useUnifiedTopology: true,
              retryWrites: true,
              preserveObjectIds: true
          },
          preserveObjectIds: true,
      }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Daniel Nwaneri`,
      short_name: `Daniel Nwaneri`,
      start_url: `/`,
      background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
      icon: `${__dirname}/src/static/image/favicon-dark.png`
    },
  },
  ],
}

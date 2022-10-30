/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
**/

require("dotenv").config({
  path: `.env`,
})


module.exports = {
  siteMetadata :{
    title: `Daniel Nwaneri`,
    description: `Daniel Nwaneri is a Backend developer who specializes in JavaScript, Nodejs and  backend web development`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    siteUrl: `https://www.danielnwaneri.me/`,
    twitterUsername: `@dannwaneri`,
    image:`static/005cefcd4b211f1d91ce75741b6bdf31/generic.png`
},
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
        name: 'assets',
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
      icon: `static/c3412c3d7bf2e80b6fea4e3481b4428c/favicon-dark.png`
    },
  },
  ],
}

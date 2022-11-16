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
    author: {
      name: `Daniel Nwaneri`,
      summary: `who helps developers improve their productivity by sharing pragmatic advice & applicable knowledge on Javascript  and Typescript.`,
    },
    description: `Daniel Nwaneri is a Backend developer who specializes in JavaScript, Nodejs and  backend web development`,
    siteUrl: `https://www.danielnwaneri.me`,
    social : {
    twitter: `dannwaneri`,
    },
},
  plugins: [
    `gatsby-plugin-image`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
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
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: false
    },
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
      icon: `content/assets/favicon-dark.png`
    },
  },
  ],
}

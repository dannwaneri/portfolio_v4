/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
**/

module.exports = {
  siteMetadata: {
    title: `dan nwaneri- Backend Developer `,
    author: {
      name: `dan nwaneri`
    },
    description: `This is my personal website`,
    siteUrl: `https://www.danielnwaneri.me/`,
    social: {
      twitter: `dannwaneri`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
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
              address: "nodeexpressproject-shard-00-01.rl7wb.mongodb.net",
              port: 27017
          },
          auth: {
              user: 'Penuel',
              password: 'knJ0z9GcUxVIBYwc'
          },
          extraParams: {
            replicaSet: 'nodeexpressproject-shard-0',
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
      name: `dan nwaneri`,
      short_name: `dan nwaneri`,
      start_url: `/`,
      background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
      icon: `content/assets/favicon-dark.png`
    },
  },
  ],
}

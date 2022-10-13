const path = require('path')
const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
   const result = await  graphql(`
           {
             allMarkdownRemark{
              edges{
                node{
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
          `)
 result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
              path:`/blog/${node.frontmatter.slug}/`,
              component: blogPost,
              context: {
                id:node.frontmatter.slug,
              },
            })
          })
  }


  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }


const path = require('path')
const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
   const result = await  graphql(`
           {
            posts: allMarkdownRemark{
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    published
                  }
                }
              }
            }
          }
          `)

if (result.errors) {
  throw result.errors
}

// Create blog posts pages.
const posts = result.data.posts.edges
const publishedPosts = posts.filter((edge) => edge.node.frontmatter.published)
const unpublishedPosts = posts.filter(
  (edge) => !edge.node.frontmatter.published
)

publishedPosts.forEach((post, index) => {
  const previous =
    index === publishedPosts.length - 1
      ? null
      : publishedPosts[index + 1].node
  const next = index === 0 ? null : publishedPosts[index - 1].node

  createPage({
    path: `/blog${node.fields.slug}`,
    component: blogPost,
    context: {
      slug: post.node.fields.slug,
      previous,
      next,
    },
  })
})

unpublishedPosts.forEach((post) => {
  createPage({
    path: /blog${node.fields.slug},
    component: blogPost,
    context: {
      slug: post.node.fields.slug,
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

  

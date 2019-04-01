/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allNodeArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(result => {
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      let slug = node.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/\./g, "")
      createPage({
        path: `/faculty/${slug}`,
        component: path.resolve(`./src/templates/professor.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}

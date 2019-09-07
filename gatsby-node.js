const path = require('path')
exports.createPages = async ({actions , graphql}) =>{
    const { createPage } = actions;
    const tourTemplate = path.resolve(`src/templates/tour-template.js`);
    const {data} = await graphql(`
    query{
        tours:allContentfulTour{
          edges{
            node{
              slug
            }
          }
        }
      }
  `)
  data.tours.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `tours/${edge.node.slug}`,
      component: tourTemplate,
      context: {
        slug: edge.node.slug
      },
    })
    })
}
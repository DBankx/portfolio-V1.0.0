const path = require("path");

module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField}  = actions;

    if(node.internal.type === "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath, ".md");

        // adding the slug to markdown nodes
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const blogTemplatePath = path.resolve("./src/template/blog.js")
    const res = await graphql(`
  query{
  allMarkdownRemark{
    totalCount
    edges{
      node{  
      	fields {
          slug
        }
      }
    }
  }
}
  `)
    res.data.allMarkdownRemark.edges.forEach(blog => {
        createPage({
            component: blogTemplatePath,
            path: `/blog/${blog.node.fields.slug}`,
            context: {
                slug: blog.node.fields.slug
            }
        })
    })
}
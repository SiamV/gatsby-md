const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query MyQuery {
            allMarkdownRemark {
            nodes {
                frontmatter {
                url
                folder
                }
            }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        const { url, folder } = node.frontmatter
        actions.createPage({
            path: `/${folder}/${url}`,
            component: path.resolve("./src/templates/single-page.js"),
            context: { url: url }
        })

    })
}

// Есть разные методы работы с этим файлом. См доки. Один из них createPages

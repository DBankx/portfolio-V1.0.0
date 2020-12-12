import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, useStaticQuery, Link} from "gatsby";

export default function Blog(){
//     const data = useStaticQuery(graphql`
//         query{
//   allMarkdownRemark{
//     totalCount
//     edges{
//       node{
//         frontmatter{
//           title,
//           date
//         }
//         id,
//         excerpt,
//         fields {
//         slug
//         }
//       }
//     }
//   }
// }
//     `)
//     console.log(data.allMarkdownRemark.edges);
    return (
        <Layout>
            <SEO title="Blogs" />
            <p>hey</p>
        </Layout>
    )
}
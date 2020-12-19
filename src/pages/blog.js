import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, useStaticQuery, Link} from "gatsby";

export default function Blog(){
    const data = useStaticQuery(graphql`
        query{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
          tags
          excerpt
          cover {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
        fields {
          slug
        }
      }
    }
  }
}
    `)
    console.log(data.allMarkdownRemark.edges);
    
    return (
        <Layout>
            <SEO title="Blogs" />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">Blog</h1>
            </div> 
            <div className="news-grid pb-0">
                {data.allMarkdownRemark.edges.map((blog) => (
                    <article className="news-item box" key={blog.node.id}>
                        <div className="news-item__image-wrap overlay overlay--45">
                            <div className="news-item__date">{blog.node.frontmatter.date}</div>
                            <a className="news-item__link" href={`/blog/${blog.node.fields.slug}`}></a>
                            <img className="cover lazyload" src={blog.node.frontmatter.cover.childImageSharp.fluid.src} alt="" />
                        </div>
                        <div className="news-item__caption">
                            <h2 className="title title--h4">{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.excerpt}</p>
                        </div>
                        <div className="news-item__tags">
                            <ul>
                                {blog.node.frontmatter.tags.map((tag) => (
                                    <li key={tag}>#{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </Layout>
    )
}
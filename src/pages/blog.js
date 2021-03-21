import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, useStaticQuery, Link} from "gatsby";
import {getImage, GatsbyImage} from "gatsby-plugin-image";

export default function Blog(){
    const data = useStaticQuery(graphql`
        query{
  allMarkdownRemark(
  sort: { fields: [frontmatter___date], order: DESC }
  ) {
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
    
    return (
        <Layout>
            <SEO title="Blog" description="I like talking about various web technologies and other stuff related to typescript and asp.net core and other trends like graphql, server-side rendering and programming languages etc. This blog expresses my views of various technologies and scenarios I have come across in realtime." keywords={[
                "Software developer",
                "Software engineer",
                "Asp.net core",
                "Javascript",
                "Typescript",
                "Web dev",
                "Python",
                "C#",
                "Node js",
                "React",
                "React js",
                "Vue"
            ]} />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">Blog</h1>
            </div> 
            <div className="news-grid pb-0">
                {data.allMarkdownRemark.edges.map((blog) => (
                    <article className="news-item box" key={blog.node.id}>
                        <div className="blog-content">
                        <div className="news-item__image-wrap overlay overlay--45">
                            <div className="news-item__date">{blog.node.frontmatter.date}</div>
                            <Link className="news-item__link" to={`/blog/${blog.node.fields.slug}`}></Link>
                            <GatsbyImage image={getImage(blog.node.frontmatter.cover)} className="cover" data-zoom alt="blog-cover" />
                        </div>
                        <div className="news-item__caption ">
                            <h2 className="title title--h4">{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.excerpt}</p>
                        </div>
                        </div>
                        <div className="news-item__tags blog-footer">
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
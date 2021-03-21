import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import 'gatsby-remark-vscode/styles.css';
import {getImage, GatsbyImage} from "gatsby-plugin-image";

export const query = graphql`
query (
  $slug: String!
){
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
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
    html
  }
}
`

export default function Blog(props){
 const {frontmatter, html} = props.data.markdownRemark;
 const blogImage = getImage(frontmatter.cover);
    return (
        <Layout>
            <SEO title={frontmatter.title} keywords={frontmatter.tags} />
            <div className="pb-3">
                <header className="header-post">
                    <div className="header-post__date">{frontmatter.date}</div>
                    <h1 className="title title--h1">{frontmatter.title}</h1>
                    <div className="caption-post">
                        <p>{frontmatter.excerpt}</p>
                    </div>
                    <div className="header-post__image-wrap">
                        <GatsbyImage  image={blogImage} className="cover" data-zoom  alt={`${frontmatter.title}-blog`}  data-zoom />
                    </div>
                </header>
                <article className="caption-post" dangerouslySetInnerHTML={{ __html: html }} /> 
                <footer className="footer-post">
                    <a className="footer-post__share" href="http://facebook.com"><i className="font-icon icon-facebook"></i><span>Facebook</span></a>
                    <a className="footer-post__share" href="http://twitter.com"><i className="font-icon icon-twitter"></i><span>Twitter</span></a>
                    <a className="footer-post__share" href="http://linkedin.com"><i className="font-icon icon-linkedin2"></i><span>Linkedin</span></a>
                </footer>
            </div>
        </Layout>
    )
}
import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {graphql} from "gatsby";

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
      excerpt
      cover {
            childImageSharp {
              fluid {
                src
              }
            }
          }
    }
    html
  }
}
`

export default function Blog(props){
 const {frontmatter, html} = props.data.markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="pb-3">
                <header className="header-post">
                    <div className="header-post__date">{frontmatter.date}</div>
                    <h1 className="title title--h1">{frontmatter.title}</h1>
                    <div className="caption-post">
                        <p>{frontmatter.excerpt}</p>
                    </div>
                    <div className="header-post__image-wrap">
                        <img className="cover lazyload" data-zoom src={frontmatter.cover.childImageSharp.fluid.src} alt="" />
                    </div>
                </header>
               <div className="caption-post" dangerouslySetInnerHTML={{__html: html}}>
                   
               </div> 
                <footer className="footer-post">
                    <a className="footer-post__share" href="http://facebook.com"><i className="font-icon icon-facebook"></i><span>Facebook</span></a>
                    <a className="footer-post__share" href="http://twitter.com"><i className="font-icon icon-twitter"></i><span>Twitter</span></a>
                    <a className="footer-post__share" href="http://linkedin.com"><i className="font-icon icon-linkedin2"></i><span>Linkedin</span></a>
                </footer>
            </div>

            <div className="box-inner box-inner--rounded">
                <h2 className="title title--h3">Comments <span className="color--light">(3)</span></h2>

                
            </div>
        </Layout>
    )
}
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideBar from "./sidebar";
import Menu from "./menu";
import Footer from "./footer";
import "../assets/styles/style.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          location
          phone
          emailAddress
          position
          birthDay
          author
          linkedin
          twitter
          facebook
          github
        }
      }
    }
  `)

    const {location, facebook, birthDay, emailAddress, position, phone, author, linkedin, twitter, github} = data.site.siteMetadata
    
    
    
  return (
      <main className="main">
        <div className="container gutter-top">
          <div className="row sticky-parent">
              <SideBar facebook={facebook} author={author} email={emailAddress} position={position} phone={phone} birthDay={birthDay} location={location} linkedin={linkedin} twitter={twitter} github={github} />
              <div className="col-12 col-md-12 col-xl-9">
                  <div className="box shadow pb-0">
                     <Menu />
                      {children}
                  </div>
                  <Footer />
              </div>
              
          </div>
        </div>
      </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import github from "../images/icons/github.svg";
import externalLink from "../images/icons/foreign.svg";
import info from "../images/icons/info.svg";
import {useMediaQuery} from "react-responsive";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

export default function Portfolio(){
   const isMobile = useMediaQuery({query: "(max-width: 500px)"});
    return (
        <Layout>
            <SEO title="portfolio" description="My portfolio contains all my personal projects i took up and are super proud to call mine. I took on these projects as challenges and was proud to beat each and every single hurdle that came my way. Please if you like what you see feel free to contact me for work" />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">Portfolio</h1>
            </div>
            
        {/* Project */}
       <div>
      

           <div className="row mb-5">
                <div className="col-md-6 col-sm-12 order-sm-first">
                    <p style={{color: "#304CFD"}}>Featured Project</p>
                    <h3 className="title title--h3 timeline__title">
                       Qlip.gg 
                    </h3>
                    <div className="project-explain-box explain-right">
                        <p>A gaming clip video sharing application where gamers can share their one minute awesome gameplay footage.</p>
                    </div>
                    <ul className="project-tech-list">
                        <li>Asp.net core</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Azure</li>
                    </ul>
                    <ul className="project-links">
                        <li data-toggle="tooltip" data-placement="bottom" title="Github"><a href="https://github.com/DBankx/qlip" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={github} alt="github" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="View project"><a href="https://qlip.azurewebsites.net/" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={externalLink} alt="link" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="Demo details"><button type="button" id="qlip" title="Demo login" className="info-btn" data-container="body" data-toggle="popover" data-placement="top" data-html={true} data-content={`*The details below is for demo use only Email: mick@email.com
                password: Pa$$w0rd`}>
                            <img src={info} alt="" style={{width: "18px"}} />
                        </button></li>
                    </ul>
                </div>
               
                <div className="col-md-6 col-sm-12 project-img-container order-sm-last">
                        <StaticImage layout="constrained" placeholder="blurred" data-zoom src="../images/projects/qlip.png" alt="qlip" />
                </div>

            </div>

           {isMobile && (
               <hr className="soft-line mb-5" />
           )} 
           
            <div className="row mb-5">
                    <div className="col-md-6 col-sm-12 order-last">
                    <p style={{color: "#304CFD"}}>Featured Project</p>
                    <h3 className="title title--h3 timeline__title">
                        Intaviewer
                    </h3>
                    
                    <div className="project-explain-box">
                        <p>A powerful buisness to busniess interviewing platform for recruitment agencies. Built with the dev team at Talenture group.</p>
                    </div>
                    <ul className="project-tech-list">
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Mongo</li>
                        <li>Aws</li>
                    </ul>

                    <ul className="project-links">
                        <li data-toggle="tooltip" data-placement="bottom" title="Private github repo!"><a href="https://github.com/DBankx/DEVTREE" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={github} alt="github" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="View project"><a href="https://intaviewer.com" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={externalLink} alt="link" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="Demo details"><button type="button" id="intaviewer" title="Demo login" className="info-btn" data-container="body" data-toggle="popover" data-placement="top" data-html={true} data-content={`Demo login details not available as this web app is owned by talenture group`}>
                            <img src={info} alt="" style={{width: "18px"}} />
                        </button></li>
                    </ul>
                </div>

                <div className="col-md-6 mt-sm-3 col-sm-12 project-img-container order-first">
                    <StaticImage layout="constrained" placeholder="blurred" data-zoom src="../images/projects/intaviewer.png" alt="intaviewer" />
                </div>

            </div>

           {isMobile && (
               <hr className="soft-line mb-5" />
           )}

           <div className="row mb-5">
               <div className="col-md-6 col-sm-12 order-sm-last order-md-first">
                   <p style={{color: "#304CFD"}}>Featured Project</p>
                   <h3 className="title title--h3 timeline__title">
                       Devtree

                   </h3>
                   <div className="project-explain-box explain-right">
                       <p>A social network app for developers built with the "MERN" stack that includes authentication, dashboards, profiles, forum posts and follow features.</p>
                   </div>
                   <ul className="project-tech-list">
                       <li>Node.js</li>
                       <li>Express</li>
                       <li>React</li>
                       <li>Mongo</li>
                   </ul>

                   <ul className="project-links">
                       <li data-toggle="tooltip" data-placement="bottom" title="Github"><a href="https://github.com/DBankx/DEVTREE" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={github} alt="github" /></a></li>
                       <li data-toggle="tooltip" data-placement="bottom" title="View project"><a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={externalLink} alt="link" /></a></li>
                       <li data-toggle="tooltip" data-placement="bottom" title="Demo details"><button type="button" id="devtree" title="Demo login" className="info-btn" data-container="body" data-toggle="popover" data-placement="top" data-html={true} data-content={`*The details below is for demo use only username: initial5
                password: initial5`}>
                           <img src={info} alt="" style={{width: "18px"}} />
                       </button></li>
                   </ul>
               </div>

               <div className="mt-sm-3 col-md-6 col-sm-12 project-img-container order-sm-first order-md-last">
                   <StaticImage width={400} height={400} layout="constrained" placeholder="blurred" data-zoom src="../images/projects/devtree.png" alt="devtree" />
               </div>

           </div>

           
           
       </div>
            
            <Link to="/all-projects" className="btn btn-project" href=""><i className="font-icon icon-chevron-right" />View all projects</Link>
            
            <div className="text-center mt-5 pb-5">
                <h5 className="title title--h5 timeline__title mb-3">
                    Github Contributions
                </h5> 
            <img data-zoom src="https://ghchart.rshah.org/dbankx" alt="Github contribution chart" />
            
            </div>
        </Layout> 
    )
}
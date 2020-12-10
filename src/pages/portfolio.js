import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import devtree from "../assets/images/devtree.png";
import github from "../assets/icons/github.svg";
import externalLink from "../assets/icons/foreign.svg";
import info from "../assets/icons/info.svg";
import qlip from "../assets/images/qlip.png";
import intaviewer from "../assets/images/intaviewer.png";

export default function Portfolio(){
   
    return (
        <Layout>
            <SEO title="portfolio" />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">Portfolio</h1>
            </div>
            
        {/* Project */}
        <div className="project-box">
            <div className="project-content">
                <p style={{color: "#304CFD"}}>Featured Project</p>
            <h3 className="title title--h3 timeline__title">
                Devtree
                
            </h3>
                
            <div className="project-explain-box">
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
         
            <div className="project-box-image">
            <div className="project-showcase">
                <a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="project-link-before">
                    <img src={devtree} alt="" />
                </a>
            </div>
            </div>
            
        </div>


            <div className="project-box box-right">
                <div className="project-content project-right">
                    <p style={{color: "#304CFD"}}>Featured Project</p>
                    <h3 className="title title--h3 timeline__title">
                       Qlip.gg 
                    </h3>

                    <div className="project-explain-box explain-right">
                        <p>A gaming clip video sharing application where gamers can share their one minute awesome gameplay footage.</p>
                    </div>
                    <ul className="project-tech-list tech-right">
                        <li>Asp.net core</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>MySql</li>
                    </ul>

                    <ul className="project-links links-right">
                        <li data-toggle="tooltip" data-placement="bottom" title="Github"><a href="https://github.com/DBankx/DEVTREE" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={github} alt="github" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="View project"><a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={externalLink} alt="link" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="Demo details"><button type="button" id="devtree" title="Demo login" className="info-btn" data-container="body" data-toggle="popover" data-placement="top" data-html={true} data-content={`*The details below is for demo use only username: initial5
                password: initial5`}>
                            <img src={info} alt="" style={{width: "18px"}} />
                        </button></li>
                    </ul>
                </div>

                <div className="project-box-image image-left">
                    <div className="project-showcase">
                        <a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="project-link-before">
                            <img src={qlip} alt="" />
                        </a>
                    </div>
                </div>

            </div>

            
            <div className="project-box">
                <div className="project-content">
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
                        <li data-toggle="tooltip" data-placement="bottom" title="Github"><a href="https://github.com/DBankx/DEVTREE" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={github} alt="github" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="View project"><a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="project-icon" src={externalLink} alt="link" /></a></li>
                        <li data-toggle="tooltip" data-placement="bottom" title="Demo details"><button type="button" id="devtree" title="Demo login" className="info-btn" data-container="body" data-toggle="popover" data-placement="top" data-html={true} data-content={`*The details below is for demo use only username: initial5
                password: initial5`}>
                            <img src={info} alt="" style={{width: "18px"}} />
                        </button></li>
                    </ul>
                </div>

                <div className="project-box-image">
                    <div className="project-showcase">
                        <a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="project-link-before">
                            <img src={intaviewer} alt="" />
                        </a>
                    </div>
                </div>

            </div>
            
            
        </Layout> 
    )
}
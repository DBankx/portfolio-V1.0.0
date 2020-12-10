import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";
import folder from "../assets/icons/folder.svg";
import github from "../assets/icons/github.svg";
import foreign from "../assets/icons/foreign.svg";

export default function AllProjects(){
    return (
        <Layout>
            <SEO title="All Projects" />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">All Projects</h1>
            </div>
            <Link to="/portfolio"><i className="font-icon icon-chevron-left" /> Back to portfolio</Link>
            <div className="all-projects-container row">
                <div className="col-12 col-lg-4 col-md-4 col-sm-6">
                    <div className="folder-block">
                        <div className="folder-content">
                        <div className="folder-top">
                            <img src={folder} alt="" className="folder"/>
                            <div>
                                <a><img src={github} alt="" className="folder-top-link" /></a>
                                <a><img src={foreign} alt="" className="folder-top-link" /></a>
                            </div>
                        </div>
                        <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                            Devtree
                        </h3>
                        <p>A social network app for developers built with the "MERN" stack that includes authentication, dashboards, profiles, forum posts and follow features.</p>
                        </div>
                        <div className="folder-footer">
                        <ul className="project-tech-list all-projects-tech">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Mongo</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-6">
                    <div className="folder-block">
                        <div className="folder-content">
                        <div className="folder-top">
                            <img src={folder} alt="" className="folder"/>
                            <div>
                                <a><img src={github} alt="" className="folder-top-link" /></a>
                                <a><img src={foreign} alt="" className="folder-top-link" /></a>
                            </div>
                        </div>
                        <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                            Qlip
                        </h3>
                        <p>A gaming clip video sharing application where gamers can share their one minute awesome gameplay footage.</p>
                        </div>
                        <footer className="folder-footer">
                        <ul className="project-tech-list all-projects-tech">
                            <li>Dotnet</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Azure</li>
                        </ul>
                        </footer>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-6">
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a><img src={github} alt="" className="folder-top-link" /></a>
                                    <a><img src={foreign} alt="" className="folder-top-link" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Job finder
                            </h3>
                            <p>A job finding application that utilizes the github api.</p>
                        </div>
                        <footer className="folder-footer">
                            <ul className="project-tech-list all-projects-tech">
                                <li>React</li>
                                <li>Redux</li>
                                <li>Axios</li>
                                <li>Scss</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-6">
                    a
                </div>
            </div>
        </Layout>
    )
}
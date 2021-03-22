import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";
import folder from "../images/icons/folder.svg";
import github from "../images/icons/github.svg";
import externalLink from "../images/icons/foreign.svg";

export default function AllProjects(){
    return (
        <Layout>
            <SEO title="All Projects" description="This is contains the majority of projects i have hosted on github for people to review and see" />
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">All Projects</h1>
            </div>
            <Link to="/portfolio"><i className="font-icon icon-chevron-left" /> Back to portfolio</Link>
            <div className="all-projects-container row gutter">
                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                        <div className="folder-top">
                            <img src={folder} alt="" className="folder"/>
                            <div>
                                <a href="https://github.com/DBankx/DEVTREE" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                <a href="https://royal-eds-71788.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={externalLink} alt="link" /></a>
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
                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                        <div className="folder-top">
                            <img src={folder} alt="" className="folder"/>
                            <div>
                                <a href="https://github.com/DBankx/Qlip" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                {/*<a><img src={foreign} alt="" className="folder-top-link" /></a>*/}
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
                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a href="https://github.com/DBankx/talenture-application" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                    <a href="https://talenture-job.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={externalLink} alt="link" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Job finder
                            </h3>
                            <p>A job finding application that utilizes the github api. The application was built for the application to a job prospect.</p>
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
                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a href="https://github.com/DBankx/heimdall-test" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                    <a href="https://heimdall-frontend.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={externalLink} alt="link" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                               Heimdall Library 
                            </h3>
                            <p>A library book borrowing platform that utilizes typescript and nodejs. The application was built for the application to a job prospect.</p>
                        </div>
                        <footer className="folder-footer">
                            <ul className="project-tech-list all-projects-tech">
                                <li>NodeJs</li>
                                <li>Mobx</li>
                                <li>React</li>
                                <li>Typescript</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a href="https://github.com/DBankx/Yak-News" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                    <a href="https://tranquil-wave-91007.herokuapp.com/" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={externalLink} alt="link" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Yak News
                            </h3>
                            <p>Your source of news all in one place. This application utilizes multiple news api's and display their data in a beautiful and oderly manner.</p>
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

                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a href="https://github.com/DBankx/Rater" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Rater
                            </h3>
                            <p>A movie rating website where all users can display their biases on diffrent kinds of movies.</p>
                        </div>
                        <footer className="folder-footer">
                            <ul className="project-tech-list all-projects-tech">
                                <li>Html</li>
                                <li>Node.js</li>
                                <li>Ejs</li>
                                <li>Express</li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>
                                    <a href="https://github.com/DBankx/Reactivity" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Reactivity
                            </h3>
                            <p>An activity suggestion website, where users can post an activity, join activity, real-time chat and follow other users</p>
                        </div>
                        <footer className="folder-footer">
                            <ul className="project-tech-list all-projects-tech">
                                <li>C#</li>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>MySql</li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-6" style={{marginBottom: "2em"}}>
                    <div className="folder-block">
                        <div className="folder-content">
                            <div className="folder-top">
                                <img src={folder} alt="" className="folder"/>
                                <div>

                                    <a href="https://github.com/DBankx/ChatterBox" rel="noreferrer noopener" target="_blank"><img className="folder-top-link" src={github} alt="github" /></a>
                                </div>
                            </div>
                            <h3 style={{marginTop: "0.6em"}} className="title title--h3 timeline__title">
                                Chatterbox
                            </h3>
                            <p>A room based chat application utilizing microsoft signalr web scokets.</p>
                        </div>
                        <footer className="folder-footer">
                            <ul className="project-tech-list all-projects-tech">
                                <li>C#</li>
                                <li>React</li>
                                <li>SignalR</li>
                                <li>Mobx</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}
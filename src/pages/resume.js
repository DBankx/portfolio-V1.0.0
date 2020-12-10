import React, {Fragment} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import educationIcon from "../assets/icons/icon-education.svg";
import experienceIcon from "../assets/icons/icon-experience.svg";
import marker from "../assets/icons/maps-and-flags.svg";
import officeBuilding from "../assets/icons/office-building.svg";

export default function Resume(){
    return (
        <Layout>
            <SEO title="Resume" />
            <Fragment>
                <div className="pb-3">
                    <h1 className="title title--h1 first-title title__separate">Resume</h1>
                </div>

                <div className="pb-0">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="title title--h3"><img className="title-icon" src={educationIcon} alt="" /> Education</h2>
                            <div className="timeline">
                                
                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">De Montfort University</h5>
                                    <span className="timeline__period">2016 — 2019</span>
                                    <span style={{display: "block"}}><img src={marker} alt="" style={{width: "20px"}} /> Leicester, UK</span>
                                    <p className="timeline__description">Built a firm foundation in the practice and theory of core computing principles, with a focus on software development, database design, web technologies and security.</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">Bridge House College</h5>
                                    <span className="timeline__period">2015 — 2016</span>
                                    <span style={{display: "block"}}><img src={marker} alt="" style={{width: "20px"}} />Lagos, Nigeria </span>
                                    <p className="timeline__description">Joined this institution to obtain a university foundation program (UFP) certificate to gain quality higher education in a top university in the United kingdom.</p>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">Chrisland High School</h5>
                                    <span className="timeline__period">2009 — 2015</span>
                                    <span style={{display: "block"}}><img src={marker} alt="" style={{width: "20px"}} />Lagos, Nigeria </span>
                                    <p className="timeline__description">General studies to engage and me during my teenage years and prepare me to face life challenges.</p>
                                </article>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <h2 className="title title--h3"><img className="title-icon" src={experienceIcon} alt="" /> Experience</h2>
                            <div className="timeline">
                                
                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">Front-end web developer (Intern)</h5>
                                    <span className="timeline__period">2020 — Present</span>
                                    <span style={{display: "block"}}><img src={officeBuilding} alt="" style={{width: "20px"}} />
                                    <a style={{marginLeft: "0.2em"}} href="https://talenture.co.uk/" rel="noreferrer noopener" target="_blank">Talenture Group</a>
                                    </span>
                                    <div className="timeline__description">
                                        <ul style={{margin: "0", padding: "0"}}>
                                            <li>Helped in the development of an interviewing software by implementing the Api into the front-end infrastructure using react and redux</li>
                                            <li>Created new screens from the designs i was given</li>
                                            <li>Added responsive behaviours to make the web app feel more modern</li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="timeline__item">
                                    <h5 className="title title--h5 timeline__title">Full-stack freelance developer</h5>
                                    <span className="timeline__period">2018 — 2019</span>
                                    <span style={{display: "block"}}><img src={marker} alt="" style={{width: "20px"}} />Leicester, UK</span>
                                    <div className="timeline__description">
                                        <ul style={{margin: "0", padding: "0"}}>
                                            <li>Created and managed websites for numerous clients to meet
                                                their business needs.</li>
                                            <li>Used ASP.NET core web api for the backend processing and
                                                JS react front end to display the data & client interactions.</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{marginBottom: "2em"}}>
                    <a href="#"  style={{textDecoration: "none"}}><i className="font-icon icon-download" /> Download CV</a>
                    </div>

                    <div className="box-inner box-inner--rounded">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h2 className="title title--h3">Design Skills</h2>
                                <div className="box box__second">
                                    
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Web Design</span><span>60%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Web Design</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Figma</span><span>75%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Figma</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Gimp</span><span>60%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Gimp</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Illustrator</span><span>50%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Illustrator</span></div>
                                    </div>

                                    
                                </div>

                                
                            </div>

                            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                                <h2 className="title title--h3">Coding Skills</h2>
                                <div className="box box__second">
                                    
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Python</span><span>50%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Python</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Javascript</span><span>80%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Javascript</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Semantic HTML</span><span>90%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Semantic HTML</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Asp.net core</span><span>75%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Asp.net core</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>Node.js</span><span>75%</span></div>
                                        </div>
                                        <div className="progress-text"><span>Node.js</span></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-text"><span>React</span><span>85%</span></div>
                                        </div>
                                        <div className="progress-text"><span>React</span></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Layout>
    )
}
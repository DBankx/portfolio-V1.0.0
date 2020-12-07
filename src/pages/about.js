import React, {Fragment} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import designLogo from "../assets/icons/icon-design.svg";
import developmentLogo from "../assets/icons/icon-dev.svg";
import rocket from "../assets/icons/space-shuttle.svg";
import bellLogo from "../assets/icons/astronaut.svg";

export default function About(){
    return (
        <Layout>
            <SEO title="About me" />
            <Fragment>
                <div className="pb-0 pb-sm-2">
                    <h1 className="title title--h1 first-title title__separate">About Me</h1>
                    <p>Hello!, I'm a full-stack engineer from Lagos, Nigeria who is capable of delivering market ready enterprise web applications and sites. I enjoy turning complex problems into simple, beautiful and intuitive code. I am a quick and sharp learner that can adapt to any of your needs using the right development tools for your specific use case to present worthy and beautiful applications.</p>
                    <p>My job is to build your website or web application so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the simplest and most creative way possible. </p>

                    <div className="box-inner pb-0">
                        <h2 className="title title--h3">What I'm Doing</h2>
                        <div className="row">
                            
                            <div className="col-12 col-lg-6">
                                <div className="case-item box box__second">
                                    <img className="case-item__icon" src={designLogo} alt="" />
                                    <div>
                                        <h3 className="title title--h5">Front-end Development</h3>
                                        <p className="case-item__caption">I can design and develop the most modern and high-quality websites made at a professional level.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="case-item box box__second">
                                    <img className="case-item__icon" src={developmentLogo} alt="" />
                                    <div>
                                        <h3 className="title title--h5">Back-end Development</h3>
                                        <p className="case-item__caption">I structure and develop the a back-end architrcture suitable for your busniess needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="case-item box box__second">
                                    <img className="case-item__icon" src={bellLogo} alt="" />
                                    <div>
                                        <h3 className="title title--h5">Timley Delivery</h3>
                                        <p className="case-item__caption">I will always deliver your web applications in a punctual, timley and professional manner.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="case-item box box__second">
                                    <img className="case-item__icon" src={rocket} alt="" />
                                    <div>
                                        <h3 className="title title--h5"></h3>
                                        <p className="case-item__caption">I make high-quality photos of any category at a professional level.</p>
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
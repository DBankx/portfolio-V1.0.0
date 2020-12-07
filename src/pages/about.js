import React, {Fragment} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import designLogo from "../assets/icons/icon-design.svg";
import developmentLogo from "../assets/icons/icon-dev.svg";
import dataManagment from "../assets/icons/data-management.svg";
import clock from "../assets/icons/clock.svg";
import avatar1 from "../assets/img/Avatar-3.svg";
import 'swiper/swiper-bundle.css';
import feranmiWork from "../assets/img/feranmi_work.jpg";
import pureHeart from "../assets/img/pureheart.jpg";
import kelechiWork from "../assets/img/kelechi_work.jpg";


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
                                    <img className="case-item__icon" src={dataManagment} alt="" />
                                    <div>
                                        <h3 className="title title--h5">Project Managenment</h3>
                                        <p className="case-item__caption">I manage your projects on a professional level to ensure optimal development times and processes to provide you with the best value for your money. </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-6">
                                <div className="case-item box box__second">
                                    <img className="case-item__icon" src={clock} alt="" />
                                    <div>
                                        <h3 className="title title--h5">Timley Delivery</h3>
                                        <p className="case-item__caption">I will always deliver your web applications in a punctual, timley and professional manner.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="box-inner box-inner--white">
                        <h2 className="title title--h3">What people say</h2>

                        <div className="swiper-container js-carousel-review">
                            <div className="swiper-wrapper">
                                
                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                        <g className="avatar__hexagon">
                                            <image xlinkHref={pureHeart} height="100%" width="100%" />
                                        </g>
                                    </svg>
                                    <div>
                                    <h4 className="title title--h5">Pureheart Gharoro</h4>
                                       <p>Lead developer at Talenture Group</p> 
                                    </div>
                                    <p className="review-item__caption">Bringing dami into the company was a brilliant idea as he made the development processes easily understandable and flawless.</p>
                                </div>

                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                        <g className="avatar__hexagon">
                                            <image xlinkHref={feranmiWork} height="100%" width="100%" />
                                        </g>
                                    </svg>
                                    <h4 className="title title--h5">Feranmi Olayinka</h4>
                                    <p className="review-item__caption">Dami is one of the most talented programmers out there.  I always go back to him when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.</p>
                                </div>

                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                        <g className="avatar__hexagon">
                                            <image xlinkHref={kelechiWork} height="100%" width="100%" />
                                        </g>
                                    </svg>
                                    <div>
                                    <h4 className="title title--h5">Kelechi Uma</h4>
                                        <p>CEO of Execute Labs</p>
                                    </div>
                                    <p className="review-item__caption">Dami really helped us in designing and developing a responsive and functioning website, and was an overall joy to work with!. 10/10 </p>
                                </div>
                                
                            </div>

                            <div className="swiper-pagination" />
                        </div>
                    </div>

                    <svg className="svg-defs">
                        <clipPath id="avatar-hexagon">
                            <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z"/>
                        </clipPath>
                    </svg>

                </div>
            </Fragment>
        </Layout>
    )
}
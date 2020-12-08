﻿import React, {Fragment} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import designLogo from "../assets/icons/icon-design.svg";
import developmentLogo from "../assets/icons/icon-dev.svg";
import dataManagment from "../assets/icons/data-management.svg";
import clock from "../assets/icons/clock.svg";
import "swiper/swiper-bundle.min.css";
import feranmiWork from "../assets/img/feranmi_work.jpg";
import pureHeart from "../assets/img/pureheart.jpg";
import kelechiWork from "../assets/img/kelechi_work.jpg";
import Csharp from "../assets/icons/csharp.svg";
import netCore from "../assets/icons/NET_Core_Logo.svg";
import javaScript from "../assets/icons/javascript.svg";
import reactSvg from "../assets/icons/react.svg";
import figma from "../assets/icons/figma-1.svg";
import python from "../assets/icons/python.svg"
import gatsbySvg from "../assets/icons/gatsbySvg.svg"
import htmlSvg from "../assets/icons/html.svg";
import cssSvg from "../assets/icons/css.svg";
import sassSvg from "../assets/icons/sass.svg";
import wordpressSvg from "../assets/icons/wordpress.svg";
import nodeSvg from "../assets/icons/nodeSvg.svg";


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
                        <h2 className="title title--h3">What I can do</h2>
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

                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    
                    
                    <div className="box-inner box-inner--rounded">
                        <h2 className="title title--h3">Tools i'm familiar with</h2>

                        <div className="swiper-container js-carousel-clients">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" >
                                    <a href="#"><img data-toggle="tooltip" data-placement="bottom" title="CSharp" style={{width: "70px"}} src={Csharp} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="Asp.net core" src={netCore} style={{width: "70px"}} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://www.python.org/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="Python" src={python} style={{width: "70px"}} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="JavaScript" src={javaScript} alt="Logo" style={{width: "70px"}} /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://nodejs.org/en/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="JavaScript" src={nodeSvg} alt="Logo" style={{width: "120px"}} /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://reactjs.org/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="React" src={reactSvg} style={{width: "80px"}} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://www.gatsbyjs.com/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="Gatsby" src={gatsbySvg} style={{width: "70px"}} alt="Logo" /></a>
                                    
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://www.figma.com/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="Figma" src={figma} style={{width: "50px"}} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="#"><img data-toggle="tooltip" data-placement="bottom" title="Html" src={htmlSvg} style={{width: "70px"}} alt="Logo" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="#"><img src={cssSvg} style={{width: "50px"}} alt="Logo" data-toggle="tooltip" data-placement="bottom" title="Css" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://sass-lang.com/" rel="noreferrer noopener" target="_blank"><img src={sassSvg} style={{width: "95px"}} alt="Logo" data-toggle="tooltip" data-placement="bottom" title="Sass" /></a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="https://wordpress.com/" rel="noreferrer noopener" target="_blank"><img data-toggle="tooltip" data-placement="bottom" title="Wordpress" src={wordpressSvg} style={{width: "70px"}} alt="Logo" /></a>
                                </div>
                            </div>

                            <div className="swiper-pagination"></div>
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
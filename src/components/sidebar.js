import React from "react";
import profileImage from "../assets/img/profile_image.jpg";

export default function SideBar({author, position, birthDay, email, phone, location}){
    return (
        <aside className="col-12 col-md-12 col-xl-3">
            <div className="sidebar box shadow pb-0 sticky-column">
                <svg className="avatar avatar--180" viewBox="0 0 188 188">
                    <g className="avatar__box">
                        <image xlinkHref={profileImage} height="100%" width="100%" />
                    </g>
                </svg>
                <div className="text-center">
                    <h3 className="title title--h3 sidebar__user-name"><span className="weight--500">{author.split(" ")[0]}</span> {author.split(" ")[1]}</h3>
                    <div className="badge badge--light">{position}</div>
                    
                    
                    <div className="social">
                        <a className="social__link" href="https://www.facebook.com/"><i className="font-icon icon-facebook" /></a>
                        <a className="social__link" href="https://www.behance.com/"><i className="font-icon icon-twitter" /></a>
                        <a className="social__link" href="https://www.linkedin.com/"><i className="font-icon icon-linkedin2" /></a>
                    </div>
                </div>

                <div className="sidebar__info box-inner box-inner--rounded">
                    <ul className="contacts-block">
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Birthday">
                            <i className="font-icon icon-calendar" />{birthDay}
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Address">
                            <i className="font-icon icon-location" />{location}
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                            <a href={`mailto:${email}`}><i className="font-icon icon-envelope" />{email}</a>
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Phone">
                            <i className="font-icon icon-phone" />{phone}
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Skype">
                            <a href="skype:skype-example"><i className="font-icon icon-skype" />Felecia_Brown</a>
                        </li>
                    </ul>

                    <a className="btn" href="https://google.com"><i className="font-icon icon-download" /> Download CV</a>
                </div>
            </div>
        </aside>
    )
}
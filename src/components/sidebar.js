import React from "react";
import profileImage from "../images/Image-blue.jpg";
import {Link} from "gatsby";

export default function SideBar({author, position, birthDay, email, phone, location, linkedin}){
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
                        <a className="social__link" href={linkedin}><i className="font-icon icon-linkedin2" /></a>
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
                    </ul>

                    <Link className="btn" to="/contact"><i className="font-icon icon-send" />Let's have a chat?</Link>
                </div>
            </div>

            <svg className="svg-defs">
                <clipPath id="avatar-box">
                    <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z"/>
                </clipPath>
                <clipPath id="avatar-hexagon">
                    <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z"/>
                </clipPath>
            </svg>
        </aside>
    )
}
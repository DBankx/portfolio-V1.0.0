import React, {Fragment} from "react";
import {Link} from "gatsby";

export default function Menu(){
    return (
        <Fragment>
            <div className="circle-menu">
                <div className="hamburger">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>

            <div className="inner-menu js-menu">
                <ul className="nav">
                    <li className="nav__item"><Link activeClassName="active"  to="/">About</Link></li>
                    <li className="nav__item"><Link activeClassName="active"  to="/resume">Resume</Link></li>
                    <li className="nav__item"><Link activeClassName="active" to="/portfolio">Portfolio</Link></li>
                    <li className="nav__item"><Link activeClassName="active" to="/blog">Blog</Link></li>
                    <li className="nav__item"><Link activeClassName="active" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}
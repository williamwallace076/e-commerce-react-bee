import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCartShopping, faMagnifyingGlass, faBars} from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <div >
            <div className="top-menu">
                <div className="left-area-links">
                    <div className="telphone">
                        <FontAwesomeIcon className="telphone-icon" icon={faPhone} />
                        <div className="Number">
                            +1 123 456 789
                        </div>
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="email">
                    <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
                        <div className="Email">
                            info@company.com
                        </div>
                    </div>
                </div>
                <div className="social-icons">
                <FontAwesomeIcon className="social-icon fb" icon={faFacebook} />
                <FontAwesomeIcon className="social-icon tt" icon={faTwitter} />
                <FontAwesomeIcon className="social-icon inst" icon={faInstagram} />
                <FontAwesomeIcon className="social-icon lin" icon={faLinkedin} />
                </div>
            </div>

            <div className="main-nav">
                <Link to={"/"}><div className="nav-logo" ><span>RENOSHOP</span>BEE</div></Link>
                <nav className="nav-pages">
                    <Link to={"/"}> <p href="" className="home-page">HOME</p></Link>
                    <Link to={"/GridLeftSideBar"}> <p href="" className="women-page">WOMEN</p></Link>
                    <Link to={"/GridLeftSideBar"}> <p href="" className="men-page">MEN</p></Link>
                    <Link to={"/GridLeftSideBar"}> <p href="" className="kids-page">KIDS</p></Link>
                    <Link to={"/GridLeftSideBar"}> <p href="" className="jewlerry-page">JEWLERRY</p></Link>
                    <Link to={"/GridLeftSideBar"}> <p href="" className="accesories-page">ACEESSORIES</p></Link>
                </nav>
                
                <nav className="nav-right">
                <Link to={"/ShopCart"} >
                    <FontAwesomeIcon className="navbarIcon cart" icon={faCartShopping}>
                    </FontAwesomeIcon>  
                        <span className="items-On-Cart">3</span>
                </Link>
                <Link to={"/GridLeftSideBar"} ><FontAwesomeIcon className="navbarIcon" icon={faMagnifyingGlass} /></Link>
                <Link to={"/"} ><FontAwesomeIcon className="navbarIcon" icon={faBars} /></Link>
                </nav>
            </div>
        </div>
    )
}
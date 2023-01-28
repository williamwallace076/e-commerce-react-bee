import React from "react";
import './HomePageFooter.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faEarthAsia} from "@fortawesome/free-solid-svg-icons";

export default () => {
    return ( 
        <div className="homepage-footer"> 
          <div className="footer-fr1">
            <span>we're confident we've provided all the best for you. Stay connect with us</span>
            <nav className="social-footer">
                <FontAwesomeIcon className='footer-fb-icon' icon={faFacebook} />
                <FontAwesomeIcon className='footer-tt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='footer-insta-icon' icon={faInstagram} />
                <FontAwesomeIcon className='footer-linkedin-icon' icon={faLinkedin} />
            </nav>
          </div>
          <div className="footer-fr2">
            <nav className="nav-contact-footer">
              <h2>INFORMATION</h2>
              <span className="nav-span-footer">Delivery information</span>
              <span className="nav-span-footer">Discount</span>
              <span className="nav-span-footer">Sitemap</span>
              <span className="nav-span-footer">Privacy policy</span>
              <span className="nav-span-footer">My acount</span>
            </nav>
            <nav className="nav-contact-footer">
              <h2>MY ACOUNT</h2>
              <span className="nav-span-footer">Sign in</span>
              <span className="nav-span-footer">View cart</span>
              <span className="nav-span-footer">My Wishlist</span>
              <span className="nav-span-footer">Check out</span>
              <span className="nav-span-footer">Track my oder</span>
            </nav>
            <nav className="nav-contact-footer">
              <h2>HELP</h2>
              <span className="nav-span-footer">F.A.Q</span>
              <span className="nav-span-footer">Shipping</span>
              <span className="nav-span-footer">Contact Us</span>
              <span className="nav-span-footer">Privacy Policy</span>
            </nav>
            <nav className="nav-contact-footer">
              <h2>CONTACT INFO</h2>
              <span className="nav-span-footer"> <FontAwesomeIcon icon={faEarthAsia}/> 1234, you adress, Country.</span>
              <span className="nav-span-footer"> <FontAwesomeIcon icon={faPhone}/> +1 234 5678 9999</span>
              <span className="nav-span-footer"> <FontAwesomeIcon icon={faEnvelope}/> mail@domain.com</span>
              <span className="nav-span-footer"></span>
            </nav>
          </div>
          <div className="footer-fr3">
            <span>Copyright 2017 RenoshopBee all rights reserved - desined by bee studios</span>
            <nav className="footer-flags">
                    <a className='footer-flag'>visa</a>
                    <a className='footer-flag'>paypa</a>
                    <a className='footer-flag'>amz</a>
                    <a className='footer-flag'>maest</a>
                    <a className='footer-flag'>ame</a>
            </nav>
          </div>
        </div>
    )
}
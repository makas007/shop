import React from "react";
import {Link} from 'react-router-dom'
import {ReactComponent as FacebookSVG} from '../icons/facebook.svg'
import {ReactComponent as IstagramSVG} from '../icons/instagram.svg'

function Footer() {
   return (
    <div className="container">
      <div className="about-us">
        <div className="footer-names">
          <p>ABOUT US</p>
        </div>
        <div className="footer-text">
          <Link to="/" className="footer-links">About us</Link>
          <Link to="/" className="footer-links">Terms & Conditions</Link>
          <Link to="/" className="footer-links">GDPR</Link>
        </div>
      </div>
      <div className="contact-help">
        <div className="footer-names">
          <p>CONTACT & HELP</p>
        </div>
        <div className="footer-text">
          <Link to="/" className="footer-links">Contact & Customer Services</Link>
          <Link to="/" className="footer-links">Size Guides & FAQ</Link>
        </div>
      </div>
      <div className="communications-press">
        <div className="footer-names">
          <p>COMMUNICATION & PRESS</p>
        </div>
        <div className="footer-text">
          <Link to="/" className="footer-links">Press Release</Link>
          <Link to="/" className="footer-links">The press talk about us</Link>
        </div>
      </div>
      <div className="career">
        <div className="footer-names">
          <p>CAREER</p>
        </div>
        <div className="footer-text">
          <Link to="/" className="footer-links">Join us</Link>
          <Link to="/" className="footer-links">Open a shop</Link>
        </div>
      </div>
      <div className="follow-us">
        <div className="footer-names">
          <p>FOLLOW US</p>
        </div>
        <div className="footer-icons">
          <FacebookSVG/>
          <IstagramSVG/>
        </div>
      </div>
    </div>
  )
}
export default Footer;
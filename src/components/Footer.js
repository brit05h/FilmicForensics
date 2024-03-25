import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialIcons">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
        <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
      </div>
      <div className="links">
        <a href="/terms" className="link">Terms & Conditions</a>   
        <a href="/privacy" className="link">Privacy & Policy</a>   
        <a href="/press" className="link">Press Room</a>
      </div>
      <div className="bottomText">
        <span className="bottomTextSpan">@2024 Filmic Forensics</span>
      </div>
    </footer>
  );
};

export default Footer;
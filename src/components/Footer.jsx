import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';  // Import the CSS file

export default function Footer() {
  return (
    <div className="footer-container row">
      <div className="col-sm-6 mx-auto">  {/* Reduced width by changing col-sm-8 to col-sm-6 */}
        <div className="row mt-5">
          <div className="col-sm-8">
            <h1 className="text-light">August</h1>
            <p className="by-beyond">by beyond</p>
            <div className="address-box col-sm-6">
              Address: 506/507, 1st Main Rd, Murugeshpalya, <br />
              K R Garden, Bengaluru, Karnataka 560075
            </div>

            <div className="contact-info row">
              <div className="contact-box col-sm-3">
                +(91) 74831 27040
              </div>
              <div className="contact-box col-sm-5">
                contact@getbeyondhealth.com
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <button className="talk-btn">Talk to August</button>
            <p className="disclaimer">
              Disclaimer: August is a health information platform and its responses don't constitute medical advice. <br />
              Always consult with a licensed medical professional near you before making any changes.
            </p>
          </div>
        </div>
        <div className="row social-section mt-4">
          <div className="col">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-light" />
            </a>
          </div>
          <div className="col">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-light" />
            </a>
          </div>
        </div>



        <div className="row text-start text-white mt-4">
        <div className="col-sm-8 center-text">
          <p>Made In India, for the world.</p>
        </div>

          <div className="col-sm-4 text-end terms-privacy">
            <span>Term</span>
            <span>Privacy</span>
          </div>
        </div>

        <div className="row developer-info mt-4 text-center text-light">
          <p>Developed by <a href="https://www.linkedin.com/in/nilesh-kushwaha-3bb154266/" target="_blank" rel="noopener noreferrer">Nilesh Kushwaha</a></p>
        </div>
      </div>
    </div>
  );
}

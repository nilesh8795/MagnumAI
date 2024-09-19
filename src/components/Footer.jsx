import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='row' style={{ margin: 'auto', backgroundColor: 'rgb(32, 110, 85)' }}>
      <div className="col-sm-8" style={{ margin: 'auto' }}>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-sm-8">
            <div className="row text-start fw-bold">
              <div className="col-sm-12">
                <h1 className='text-light'>August</h1>
              </div>
            </div>
            <div className="row text-start my-4 text-light fw-bold" style={{ fontSize: '14px', height: '10px' }}>
              <div className="col-sm-4">
                <p>by beyond</p>
              </div>
            </div>
            <div className="row text-start text-white" style={{ display: 'flex', justifyContent: 'start' }}>
              <div className="col-sm-7 text-start-justify py-2 px-3" style={{
                height: 'auto',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                fontSize: '14px',
                fontFamily: 'sans-serif',
                position: 'relative',
                height: '60px'
              }}>
                Address: 506/507, 1st Main Rd, Murugeshpalya, <br />
                K R Garden, Bengaluru, Karnataka 560075
                <span style={{ display: 'inline-block', width: '100%' }}></span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3 my-4 text-light d-flex justify-content-center align-items-center pt-4" style={{
                height: '50px',
                padding: '5px',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                fontFamily: 'sans-serif',
                fontSize: '14px',
                marginRight: '5px'
              }}>
                <p>+(91) 74831 27040</p>
              </div>
              <div className="col-sm-4 my-4 text-light d-flex justify-content-center align-items-center pt-4" style={{
                height: '50px',
                padding: '5px',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                fontFamily: 'sans-serif',
                fontSize: '14px',
                color: 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                marginLeft: '20px'
              }}>
                <p>contact@getbeyondhealth.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row text-start">
              <div className="col-sm-4 fw-bold">
                <button style={{ border: 'none', height: '40px', borderRadius: '40px', width: '150px', fontFamily: 'sans-serif' }}>
                  Talk to August
                </button>
              </div>
            </div>
            <div className="row mt-4 text-white fw-bold">
              <div className="col-sm-12 text-start">
                <p style={{ fontSize: '12px' }}>Disclaimer: August is a health information platform <br /> and its responses don't constitute medical advice. <br /> Always consult with a licensed medical <br />professional near you before making any changes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '0px' }}>
          <div className="col-sm-12" style={{ borderTop: '1px solid var(--extracted-r6o4lv, rgb(112, 230, 192))', margin: 'auto' }}>
            <div className="row">
              <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-sm-1">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-light" />
                  </a>
                </div>
                <div className="col-sm-1">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-light" />
                  </a>
                </div>
              </div>
              <div className="row mt-4 text-start text-white" style={{ fontFamily: 'sans-serif' }}>
                <div className="col-sm-8">
                  <p>Made In India, for the world.</p>
                </div>
                <div className="col-sm-4 text-end">
                  <div className="row">
                    <div className="ms-auto d-flex">
                      <div className="col-sm-2" style={{ marginLeft: '70%', color: 'var(--extracted-r6o4lv, rgb(112, 230, 192))', fontSize: '14px' }}>Term</div>
                      <div className="col-sm-2" style={{ marginLeft: '20px', color: 'var(--extracted-r6o4lv, rgb(112, 230, 192))', fontSize: '14px' }}>Privacy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Developer Information */}
        <div className="row" style={{ marginTop: '20px', padding: '20px' }}>
          <div className="col-sm-12 text-center text-light">
            <p>Developed by <a href="https://www.linkedin.com/in/nilesh-kushwaha-3bb154266/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>Nilesh Kushwaha</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

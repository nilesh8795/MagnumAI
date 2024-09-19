import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';

export default function Feature3() {
  const [isSecurityExpanded, setIsSecurityExpanded] = useState(false);
  const [isAlertExpanded, setIsAlertExpanded] = useState(false);
  const [isLabExpanded, setIsLabExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-1-1010x1024.webp'
  );

  const [isInView, setIsInView] = useState(false);
  const featureRef = useRef(null);

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      const topPos = featureRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (topPos < windowHeight - 100) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSecurityToggle = () => {
    setIsSecurityExpanded(!isSecurityExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-1-1010x1024.webp'
    );
    setIsAlertExpanded(false);
    setIsLabExpanded(false);
  };

  const handleAlertsToggle = () => {
    setIsAlertExpanded(!isAlertExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-2-1010x1024.webp'
    );
    setIsSecurityExpanded(false);
    setIsLabExpanded(false);
  };

  const handleLabToggle = () => {
    setIsLabExpanded(!isLabExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-3-1010x1024.webp'
    );
    setIsSecurityExpanded(false);
    setIsAlertExpanded(false);
  };

  return (
    <div ref={featureRef}>
    <div className="row" style={{ background: '#fff6d7', margin: '0' }}>
      {/* Text Column */}
      <div className={`col-md-8 d-flex align-items-center justify-content-center ${isInView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <div className="text-center">
          <div className="row text-start fs-2 fw-bold">
            <h2>
            Secure patient data with <br />robust compliance <br /> measures
            </h2>
          </div>
          <div className="row text-start">
            <p>
            Don’t compromise on data privacy and security to earn patients’ trust. Yellow.ai has <br /> got you covered with ISO, HIPAA, SOC2, GDPR, and PDPA compliance.
            </p>
          </div>
  
          {/* Toggle Buttons */}
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleSecurityToggle}
            >
              <div className="col-sm-8 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Enterprise-grade security</div>
              <div className="col-sm-2">
                <img
                  src={
                    isSecurityExpanded
                      ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png'
                      : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'
                  }
                  alt={isSecurityExpanded ? 'Minus icon' : 'Plus icon'}
                  className="toggle-icon"
                />
              </div>
            </button>
            <div className={`row collapse-content ${isSecurityExpanded ? 'animate__animated animate__fadeIn show' : 'animate__animated animate__fadeOut hide'} text-start`}>
            Provide role-based access control, single  sign-on,<br /> OAuth, SAML integration, and deep integration <br />with EPIC.
            </div>
          </div>
  
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleAlertsToggle}
            >
              <div className="col-sm-8 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Data breach elimination</div>
              <div className="col-sm-2">
                <img
                  src={
                    isAlertExpanded
                      ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png'
                      : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'
                  }
                  alt={isAlertExpanded ? 'Minus icon' : 'Plus icon'}
                  className="toggle-icon"
                />
              </div>
            </button>
            <div className={`row collapse-content ${isAlertExpanded ? 'animate__animated animate__fadeIn show' : 'animate__animated animate__fadeOut hide'} text-start`}>
              TLS 1.3 encryption in transit (TLS 1.2 supported for backward <br /> compatibility), AES 256 encryption at rest.
            </div>
          </div>
  
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleLabToggle}
            >
              <div className="col-sm-8 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Cyberattack detection and prevention</div>
              <div className="col-sm-2">
                <img
                  src={
                    isLabExpanded
                      ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png'
                      : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'
                  }
                  alt={isLabExpanded ? 'Minus icon' : 'Plus icon'}
                  className="toggle-icon"
                />
              </div>
            </button>
            <div className={`row collapse-content ${isLabExpanded ? 'animate__animated animate__fadeIn show' : 'animate__animated animate__fadeOut hide'} text-start`}>
            Drive pen tests and vulnerability management on the <br /> code/platform levels (WAF, DDOS, IPS & IDS covered).
            </div>
          </div>
        </div>
      </div>
  
      {/* Image Column */}
      <div className={`col-md-4 p-0 d-flex justify-content-center align-items-center ${isInView ? 'animate__animated animate__fadeInRight' : ''}`}>
        <img
          src={imageSrc} // Use dynamic image source
          alt="Healthcare journey illustration"
          style={{ width: '100%', height: 'auto', maxWidth: '100%', marginTop: '50px' }}
        />
      </div>
      
    </div>
  </div>
    );
}

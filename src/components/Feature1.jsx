import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
export default function Feature1() {
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
    <div className="row" style={{ background: '#fff6d7'}} ref={featureRef}>
      {/* Text Column */}
      <div className={`col-md-8 d-flex align-items-center justify-content-center p-4 ${isInView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <div className="text-center">
          <div className="row text-start fs-2 fw-bold">
            <h2>
              Win patient loyalty with <br /> connected healthcare <br /> journeys
            </h2>
          </div>
          <div className="row text-start">
            <p>
              Prevent patient churns. Help them find nearby clinics, book virtual consultations,
              <br /> and enable post-consultation follow-ups, capturing context across 35+
              channels.
            </p>
          </div>
  
          {/* Toggle Buttons */}
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleSecurityToggle}
            >
              <div className="col-sm-6 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Enterprise-grade security</div>
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
              Automate the registration, verification, and <br />
              new account creation of patients.
            </div>
          </div>
  
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleAlertsToggle}
            >
              <div className="col-sm-6 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Proactive alerts and suggestions</div>
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
              Share medication reminders and preventive care, nutrition, and <br />
              health tips based on previous chat history and test results.
            </div>
          </div>
  
          <div className="row">
            <button
              className="btn btn-link p-0 text-start text-dark toggle-button"
              onClick={handleLabToggle}
            >
              <div className="col-sm-6 fw-bold" style={{fontSize: '20px', fontFamily: 'inherit'}}>Advanced lab reports</div>
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
              Send a digital summary of prescription, diagnosis, and lab reports <br />
              on the channel of patients’ choice.
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
    );
}

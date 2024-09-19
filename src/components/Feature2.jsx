import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';

export default function Feature2() {
  const [isCostExpanded, setIsCostExpanded] = useState(false);
  const [isIntegrationExpanded, setIsIntegrationExpanded] = useState(false);
  const [isDicisionsExpanded, setIsDicisionsExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-3-1-1010x1024.webp'
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

  const handleCostToggle = () => {
    setIsCostExpanded(!isCostExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-3-1-1010x1024.webp'
    );
    setIsIntegrationExpanded(false);
    setIsDicisionsExpanded(false);
  };

  const handleIntegrationToggle = () => {
    setIsIntegrationExpanded(!isIntegrationExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-3-2-1010x1024.webp'
    );
    setIsCostExpanded(false);
    setIsDicisionsExpanded(false);
  };

  const handleDicisionsToggle = () => {
    setIsDicisionsExpanded(!isDicisionsExpanded);
    setImageSrc(
      'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-3-3-1010x1024.webp'
    );
    setIsCostExpanded(false);
    setIsIntegrationExpanded(false);
  };

  return (
      <div style={{ marginTop: '150px', marginBottom: '0' }} ref={featureRef}>
        <div className="row">
          <div className={`col-sm-12 col-md-5 text-center text-md-start ${isInView ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ marginRight: '150px' }}>
            <img
              src={imageSrc}
              alt="Healthcare"
              className="img-fluid"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className={`col-sm-4  p-4 text-center text-md-start ${isInView ? 'animate__animated animate__fadeInRight' : ''}`}>
          <div className="row fs-1 fw-bold" style={{ marginTop: '50px', fontFamily: 'Roboto', lineHeight: '1.2' }}>
              Go live 2x faster, make <br /> informed decisions
            </div>

            <div className="row">
            Stop building healthcare support agents from scratch, and digging data to make <br /> decisions. Deploy easy-to-use AI in seconds and improve performance by tracking <br /> metrics.
            </div>

            {/* Collapsible Section for Appointment booking */}
            <div className="row">
              <button
                className="btn btn-link p-0 text-start text-dark toggle-button"
                onClick={handleCostToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>60% operational costs reduction</div>
                <div>
                  <img
                    src={isCostExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"}
                    alt={isCostExpanded ? "Minus icon" : "Plus icon"}
                    className="toggle-icon"
                  />
                </div>
              </button>
              <div className={`collapse-content ${isCostExpanded ? 'show' : 'hide'} text-start`}>
              Go live 2x faster with 40% faster implementation. Avoid the need <br /> for coding or NLP training.
              </div>
            </div>

            {/* Collapsible Section for Human-like voice */}
            <div className="row" style={{marginTop: '50px'}}>
              <button
                className="btn btn-link p-0 text-start text-dark toggle-button"
                onClick={handleIntegrationToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>Hassle-free system integration</div>
                <div>
                  <img
                    src={isIntegrationExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"}
                    alt={isIntegrationExpanded ? "Minus icon" : "Plus icon"}
                    className="toggle-icon"
                  />
                </div>
              </button>
              <div className={`collapse-content ${isIntegrationExpanded ? 'show' : 'hide'} text-start`}>
              Get 150+ pre-built templates with healthcare terms. Enable <br /> flexible integration with 80% containment out of the box.
              </div>
            </div>

            {/* Collapsible Section for Secure billing and payments */}
            <div className="row">
              <button
                className="btn btn-link p-0 text-start text-dark toggle-button"
                onClick={handleDicisionsToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>Data-driven decisions</div>
                <div>
                  <img
                    src={isDicisionsExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"}
                    alt={isDicisionsExpanded ? "Minus icon" : "Plus icon"}
                    className="toggle-icon"
                  />
                </div>
              </button>
              <div className={`collapse-content ${isDicisionsExpanded ? 'show' : 'hide'} text-start`}>
                  Collect feedback with CSAT and NPS surveys. Help agents improve  <br /> service with chat summaries via AI omnichannel agent inbox.
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import 'animate.css';

export default function Feature() {
  const [showElements, setShowElements] = useState({
    leftColumn: false,
    rightColumn: false,
    benchmarkText: false,
    benchmarkImage: false,
    lastSection: false
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isVoiceExpanded, setIsVoiceExpanded] = useState(false);
  const [isBillingExpand, setIsBillingExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState("https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-1-1010x1024.webp");

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const benchmarkTextRef = useRef(null);
  const benchmarkImageRef = useRef(null);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftPos = leftColumnRef.current?.getBoundingClientRect().top;
      const rightPos = rightColumnRef.current?.getBoundingClientRect().top;
      const textPos = benchmarkTextRef.current?.getBoundingClientRect().top;
      const imgPos = benchmarkImageRef.current?.getBoundingClientRect().top;
      const lastSectionPos = lastSectionRef.current?.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      // Detect if the elements are in view
      if (leftPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, leftColumn: true }));
      if (rightPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, rightColumn: true }));
      if (textPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, benchmarkText: true }));
      if (imgPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, benchmarkImage: true }));
      if (lastSectionPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, lastSection: true }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setImageSrc("https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-1-1010x1024.webp");
    }
    if (isVoiceExpanded || isBillingExpand) {
      setIsVoiceExpanded(false);
      setIsBillingExpanded(false);
    }
  };

  const handleVoiceToggle = () => {
    setIsVoiceExpanded(!isVoiceExpanded);
    if (!isVoiceExpanded) {
      setImageSrc("https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-2-1010x1024.webp");
    }
    if (isExpanded || isBillingExpand) {
      setIsExpanded(false);
      setIsBillingExpanded(false);
    }
  };

  const handleBillingToggle = () => {
    setIsBillingExpanded(!isBillingExpand);
    if (!isBillingExpand) {
      setImageSrc("https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-3-1010x1024.webp");
    }
    if (isExpanded || isVoiceExpanded) {
      setIsExpanded(false);
      setIsVoiceExpanded(false);
    }
  };

  return (
      <div className="container-fluid col-sm-12 home-content" style={{marginTop: '100px'}}>
      {/* Last Container Section */}
      <div style={{ marginTop: '150px', marginBottom: '0' }}>
        <div className="row">
          <div className={`col-sm-12 col-md-5 text-center text-md-start ${showElements.lastSection ? 'animate__animated animate__fadeInLeft' : ''}`} ref={lastSectionRef} style={{marginRight: '150px'}}>
            <img
              src={imageSrc}
              alt="Healthcare"
              className="img-fluid"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className={`col-sm-4  p-4 text-center text-md-start ${showElements.lastSection ? 'animate__animated animate__fadeInRight' : ''}`}>
            <div className="row fs-1 fw-bold" style={{ marginTop: '50px', fontFamily: 'Roboto' }}>
              Boost healthcare support <br />efficiency with human-like <br />empathy
            </div>
            <div className="row">
              Make high query volume handling effortless: Self-serve 90% of FAQs with accurate <br /> resolutions (having 1% hallucinations). Personalize interactions in 135+ languages.
            </div>

            {/* Collapsible Section for Appointment booking */}
            <div className="row" style={{marginTop: '50px'}}>
              <button 
                className="btn btn-link p-0 text-start text-dark toggle-button" 
                onClick={handleExpandToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>Effortless appointment booking</div>
                <div><img 
                  src={isExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"} 
                  alt={isExpanded ? "Minus icon" : "Plus icon"} 
                  className="toggle-icon"
                /></div>
              </button>
              <div className={`collapse-content ${isExpanded ? 'show' : 'hide'} text-start`}>
                Easily book appointments, send reminders, and notify patients <br /> with our integrated appointment management system.
              </div>
            </div>

            {/* Collapsible Section for Human-like voice */}
            <div className="row">
              <button 
                className="btn btn-link p-0 text-start text-dark toggle-button" 
                onClick={handleVoiceToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>Human-like voice interactions</div>
                <div><img 
                  src={isVoiceExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"} 
                  alt={isVoiceExpanded ? "Minus icon" : "Plus icon"} 
                  className="toggle-icon"
                /></div>
              </button>
              <div className={`collapse-content ${isVoiceExpanded ? 'show' : 'hide'} text-start`}>
                Tackle interruptions with empathy using voice AI agents, adept in <br />active listening. Transfer complex queries to live agents.
              </div>
            </div>

            {/* Collapsible Section for Secure billing and payments */}
            <div className="row">
              <button 
                className="btn btn-link p-0 text-start text-dark  toggle-button" 
                onClick={handleBillingToggle}
              >
                <div className="fw-bold col-sm-10" style={{ fontSize: '20px', fontFamily: 'inherit' }}>Secure billing and payments</div>
                <div><img 
                  src={isBillingExpand ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"} 
                  alt={isBillingExpand ? "Minus icon" : "Plus icon"} 
                  className="toggle-icon"
                /></div>
              </button>
              <div className={`collapse-content ${isBillingExpand ? 'show' : 'hide'} text-start`}>
                Streamline invoicing, billing, and reimbursements with smooth <br /> integration with existing payment solutions.
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

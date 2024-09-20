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
  const [isBillingExpanded, setIsBillingExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState("https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-1-1010x1024.webp");

  const lastSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const lastSectionPos = lastSectionRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (lastSectionPos < windowHeight - 100) {
        setShowElements((prev) => ({ ...prev, lastSection: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
    setImageSrc(isExpanded ? imageSrc : "https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-1-1010x1024.webp");
    if (isVoiceExpanded || isBillingExpanded) {
      setIsVoiceExpanded(false);
      setIsBillingExpanded(false);
    }
  };

  const handleVoiceToggle = () => {
    setIsVoiceExpanded(!isVoiceExpanded);
    setImageSrc(isVoiceExpanded ? imageSrc : "https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-2-1010x1024.webp");
    if (isExpanded || isBillingExpanded) {
      setIsExpanded(false);
      setIsBillingExpanded(false);
    }
  };

  const handleBillingToggle = () => {
    setIsBillingExpanded(!isBillingExpanded);
    setImageSrc(isBillingExpanded ? imageSrc : "https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-3-1010x1024.webp");
    if (isExpanded || isVoiceExpanded) {
      setIsExpanded(false);
      setIsVoiceExpanded(false);
    }
  };

  return (
    <div className="home-content">
      <div className="row">
        {/* Left column */}
        <div className={`col-sm-12 col-md-5 text-center text-md-start ${showElements.lastSection ? 'animate__animated animate__fadeInLeft' : ''}`} ref={lastSectionRef}>
          <img src={imageSrc} alt="Healthcare" height="600" />
        </div>

        {/* Right column */}
        <div className={`col-sm-4 text-center text-md-start ${showElements.lastSection ? 'animate__animated animate__fadeInRight' : ''}`}>
          <div className="fs-1 fw-bold" style={{ marginTop: '50px', fontFamily: 'Roboto' }}>
            Boost healthcare support <br /> efficiency with human-like <br /> empathy
          </div>
          <div>
            Make high query volume handling effortless: Self-serve 90% of FAQs with accurate <br /> resolutions (having 1% hallucinations). Personalize interactions in 135+ languages.
          </div>

          {/* Collapsible Sections */}
          {[{
            title: "Effortless appointment booking",
            content: "Easily book appointments, send reminders, and notify patients with our integrated appointment management system.",
            toggle: handleExpandToggle,
            isExpanded: isExpanded
          }, {
            title: "Human-like voice interactions",
            content: "Tackle interruptions with empathy using voice AI agents, adept in active listening. Transfer complex queries to live agents.",
            toggle: handleVoiceToggle,
            isExpanded: isVoiceExpanded
          }, {
            title: "Secure billing and payments",
            content: "Streamline invoicing, billing, and reimbursements with smooth integration with existing payment solutions.",
            toggle: handleBillingToggle,
            isExpanded: isBillingExpanded
          }].map(({ title, content, toggle, isExpanded }, index) => (
            <div className="row" key={index} style={{ marginTop: '50px' }}>
              <button className="btn btn-link p-0 text-start text-dark toggle-button" onClick={toggle}>
                <div className="fw-bold col-sm-6" style={{ fontSize: '20px', fontFamily: 'inherit' }}>{title}</div>
                <div>
                  <img src={isExpanded ? "https://cdn-icons-png.flaticon.com/512/262/262039.png" : "https://cdn-icons-png.flaticon.com/128/3024/3024515.png"} alt={isExpanded ? "Minus icon" : "Plus icon"} className="toggle-icon" />
                </div>
              </button>
              <div className={`collapse-content ${isExpanded ? 'show' : 'hide'} text-start`}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

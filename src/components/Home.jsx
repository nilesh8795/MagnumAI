import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import 'animate.css';
import './assets/Magnum.mp4';

export default function Home() {
  const [showElements, setShowElements] = useState({
    leftColumn: false,
    rightColumn: false,
    lastSection: false,
  });

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftPos = leftColumnRef.current?.getBoundingClientRect().top;
      const rightPos = rightColumnRef.current?.getBoundingClientRect().top;
      const lastSectionPos = lastSectionRef.current?.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      if (leftPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, leftColumn: true }));
      if (rightPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, rightColumn: true }));
      if (lastSectionPos < windowHeight - 100) setShowElements((prev) => ({ ...prev, lastSection: true }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-fluid col-sm-12 home-content" style={{ marginTop: '100px' }}>
      <div className="col-sm-10" style={{ margin: 'auto' }}>
        <div className="row align-items-center" style={{ marginTop: '150px', margin: 'auto' }}>
          {/* Left Column */}
          <div
            className={`col-md-6 text-center text-md-start ${showElements.leftColumn ? 'animate__animated animate__fadeInUp' : ''}`}
            ref={leftColumnRef}
          >
            <h1 className="hero-title">Your Personal</h1>
            <h1 className="hero-title">AI Health Assistant</h1>
            <p className="hero-subtitle">
              Now say goodbye to Google scares! <br />Available for FREE, 24x7 on WhatsApp.
            </p>
          </div>

          {/* Right Column */}
          <div
            className={`col-md-6 text-center text-md-end ${showElements.rightColumn ? 'animate__animated animate__fadeInUp' : ''}`}
            ref={rightColumnRef}
            style={{ marginTop: '50px' }}
          >
            <div className="row">
              <img
                src="https://framerusercontent.com/images/nGcJ6ehPV480HX0NhIEWmaNP4.png?scale-down-to=1024"
                alt="AI Assistant"
                className="img-fluid"
              />
            </div>

            {/* Centered Button */}
            <div className="row mt-4">
              <div className="d-flex justify-content-center">
                <button
                  className="rounded-pill text-center d-flex justify-content-center align-items-center py-3 px-4 text-light fw-bold"
                  style={{ backgroundColor: '#6366F1', width: '180px', fontSize: '16px', fontFamily: 'sans-serif', border: 'none', margin: 'auto' }}
                >
                  Talk to August
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="row video-section" style={{ marginTop: '150px' }}>
          <div className="col-12 d-flex justify-content-center">
          <video
              controls
              autoPlay
              muted
              className="video-responsive"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              <source src="Magnum.mp4" type="video/mp4" />
              <source src="Magnum.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

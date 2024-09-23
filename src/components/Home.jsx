import React, { useRef } from 'react';
import { CloudinaryContext } from 'cloudinary-react'; // Removed Video as we are using native video tag
import './Home.css';
import 'animate.css';

export default function Home() {
  const videoRef = useRef(null);

  // Function to handle video play/pause on tap
  const handleVideoTap = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <CloudinaryContext cloudName="dcx4eh4kv">
      <div className="container-fluid col-sm-12 home-content" style={{ marginTop: '100px', borderBottom: '1px solid #dee2e6' }}>
        <div className="col-sm-10" style={{ margin: 'auto' }}>
          <div className="row align-items-center" style={{ marginTop: '150px', margin: 'auto' }}>
            {/* Left Column */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="hero-title">Your Personal</h1>
              <h1 className="hero-title">AI Health Assistant</h1>
              <p className="hero-subtitle">
                Now say goodbye to Google scares! <br />Available for FREE, 24x7 on WhatsApp.
              </p>
            </div>

            {/* Right Column */}
            <div className="col-md-6 text-center text-md-end" style={{ marginTop: '50px' }}>
              <div className="row">
                <img
                  src="https://framerusercontent.com/images/nGcJ6ehPV480HX0NhIEWmaNP4.png?scale-down-to=1024"
                  className="img-fluid"
                  alt="AI Assistant"
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
                ref={videoRef}
                onClick={handleVideoTap}
                autoPlay
                loop
                muted
                style={{
                  borderRadius: '15px 15px 0px 0px', // For rounded top corners
                  width: '100%',
                  maxWidth: '800px',
                  height: 'auto',
                  borderTop: '1px solid #dee2e6', // Top border
                  borderLeft: '1px solid #dee2e6', // Left border
                  borderRight: '1px solid #dee2e6', // Right border
                  borderBottom: 'none', // No bottom border
                  boxShadow: '5px -5px 10px #dee2e6, -5px -5px 10px #dee2e6', // Shadow on top, left, and right
                  position: 'relative',
                }}
              >
                <source
                  src="https://res.cloudinary.com/dcx4eh4kv/video/upload/lx7pwmv5smwkqfgll8nn"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
}

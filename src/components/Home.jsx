import React from 'react';
import { CloudinaryContext, Video } from 'cloudinary-react'; // Removed Image as it's not used for external URLs
import './Home.css';
import 'animate.css';

export default function Home() {
  return (
    <CloudinaryContext cloudName="dcx4eh4kv">
      <div className="container-fluid col-sm-12 home-content" style={{ marginTop: '100px' }}>
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
                {/* Replaced Image component with a standard img tag for external URL */}
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
          <div className="row video-section" style={{ marginTop: '150px', marginBottom: '50px' }}>
              <div className="col-12 d-flex justify-content-center">
                <Video
                  publicId="lx7pwmv5smwkqfgll8nn" // Replace with your video public ID
                  autoPlay
                  style={{
                    borderRadius: '15px', // This is for rounded corners
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    border: '1px solid #A5B4FC' // Correct way to apply a border
                  }}
                />
              </div>
            </div>
        </div>
      </div>
    </CloudinaryContext>
  );
}

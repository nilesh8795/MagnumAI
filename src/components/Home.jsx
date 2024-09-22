import React from 'react';
import { CloudinaryContext, Image, Video } from 'cloudinary-react';
import './Home.css';
import 'animate.css';

export default function Home() {
  return (
    <CloudinaryContext cloudName="your_cloud_name">
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
                <Image
                  publicId="your_image_public_id" // Replace with your image public ID
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
                controls
                autoPlay
                muted
                style={{ borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
}

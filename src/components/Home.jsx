import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import 'animate.css';

export default function Home() {
  const [showElements, setShowElements] = useState({
    leftColumn: false,
    rightColumn: false,
    benchmarkText: false,
    benchmarkImage: false,
    lastSection: false
  });

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


  return (
      <div className="container-fluid col-sm-12 home-content" style={{marginTop: '100px'}}>
        <div className="col-sm-10" style={{margin: 'auto'}}>
        <div className="row align-items-center"  style={{ marginTop: '150px', margin: 'auto'}}>
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
                  className="rounded-pill bg-success text-center d-flex justify-content-center align-items-center py-3 px-4 text-light fw-bold"
                  style={{ width: '180px', fontSize: '16px' , fontFamily: 'sans-serif', border: 'none', margin: 'auto'}}
                >
                  Talk to August
                </button>
              </div>
            </div>
          </div>
          </div>
        

        {/* Benchmark Section */}
        <div className="row benchmark-section" style={{marginTop: '150px'}}>
          <div className="col-md-6">
            <div className="row my-5 d-flex justify-content-center" ref={benchmarkImageRef}>
              <img
                src="https://framerusercontent.com/images/79EemWgLilNo6mcb2E2TaQADkAY.png"
                alt=""
                className={`benchmark-image animate__animated ${showElements.benchmarkImage ? 'animate__fadeInUp' : 'animate__fadeInDown'}`}
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 text-center text-md-start" style={{margin: 'auto'}}>
            <div className="row my-5" ref={benchmarkTextRef}>
              <div className={`benchmark-text animate__animated ${showElements.benchmarkText ? 'animate__fadeInUp' : 'animate__fadeInDown'}`} style={{fontSize:'20px'}}>Successful Benchmarking</div>
              <div className="display-5" style={{fontFamily: 'sans-serif'}}>August is the <br /> top Health AI <br />in the world</div>
              <div className="benchmark-description mt-3">
                <p>We scored 94.8% in the US Medical Licensing Examination. This is one of the standard benchmarks used for Health AIs. Check the image to see how August compares.</p>
              </div>
            </div>
            </div>
            </div>
          </div>
      {/* Last Container Section */}
        </div>
  );
}

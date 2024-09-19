import React, { useState } from 'react';

const ContentSwitcher = () => {
  // Array of content with headings, text, and images
  const contentData = [
    {
      heading: "Goode Doctor Technology",
      text: "“At Good Doctor, we are committed to building a robust digital healthcare ecosystem connecting medical professionals with patients, to deliver high-quality health services. Deploying a conversational AI-powered solution enabled by Yellow.ai allows us to seamlessly engage with 700+ patients 24/7 on their preferred channels like WhatsApp. The aim is to improve accessibility of healthcare without being constrained by time and geographic boundaries.””",
      image: "https://yellow.ai/wp-content/uploads/2024/03/Good-doctor-testimonial-2048x1647.webp"
    },
    {
      heading: "Cipla",
      text: "“Cipla is committed to pioneering innovative respiratory health solutions in line with our motto, ‘Caring for life.’ Leveraging Conversational AI-driven solutions on various digital channels, we now assist over half a million patients and caregivers monthly, with the industry’s best 95% customer resolution call completion rate. This combination of technology and healthcare allows Cipla to nurture a well-informed patient community, supporting effective management of their respiratory health.””",
      image: "https://yellow.ai/wp-content/uploads/2023/04/testimonial-sit.webp"
    }
    // Add more content as needed
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentData.length - 1 : prevIndex - 1));
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === contentData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <div className="row justify-content-center">
        <div className="col-sm-1 d-flex justify-content-center">
          <button 
            className="btn rounded-circle"
            style={{ 
              width: '40px', 
              height: '40px', 
              border: '1px solid #29165e', 
              background: 'none', 
              color: '#29165e', 
              transition: 'background 0.3s, color 0.3s' 
            }}
            onMouseEnter={e => {
              e.target.style.background = '#29165e';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'none';
              e.target.style.color = '#29165e';
            }}
            onClick={handleLeftClick} // Handle left button click
          >
            &larr;
          </button>
        </div>
        
        <div className="col-sm-8">
          <div className="row" >
            <div className="col-sm-5" style={{height: '400px'}}> 
              <div className="row fw-bold text-start" style={{ color: '#5c42fc', fontSize: '16px' }}>
                <p>{contentData[currentIndex].heading}</p> {/* Dynamic heading */}
              </div>
              <div className="row text-align-justify text-start">
                <p>{contentData[currentIndex].text}</p> {/* Dynamic text */}
              </div>
            </div>
            <div className="col-sm-7 d-flex justify-content-center align-items-center" style={{height: '400px'}}>
              <img
                src={contentData[currentIndex].image} // Dynamic image
                alt="Dynamic Content"
                style={{ 
                  width: '100%', 
                  maxWidth: '300px', // Adjust max-width to control image size
                  height: 'auto',     // Ensures proper aspect ratio
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }}
              />
            </div>   
          </div>
        </div>

        <div className="col-sm-1 d-flex justify-content-center">
          <button 
            className="btn rounded-circle"
            style={{ 
              width: '40px', 
              height: '40px', 
              border: '1px solid #29165e', 
              background: 'none', 
              color: '#29165e', 
              transition: 'background 0.3s, color 0.3s' 
            }}
            onMouseEnter={e => {
              e.target.style.background = '#29165e';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'none';
              e.target.style.color = '#29165e';
            }}
            onClick={handleRightClick} // Handle right button click
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSwitcher;

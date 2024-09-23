import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-4-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-2-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-3-1010x1024.webp',
  ];

  const faqs = [
    {
      question: 'Appointment booking and rescheduling',
      answer: 'Automate booking and updation of appointments and lab tests. Free up healthcare agents for high-value tasks.'
    },
    {
      question: 'Human-like voice interactions',
      answer: 'Tackle interruptions with empathy using voice AI agents, adept in active listening. Transfer complex queries to live agents.'
    },
    {
      question: 'Secure billing and payments',
      answer: 'Streamline invoicing, billing, and reimbursements with smooth integration with existing payment solutions.'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0" style={{backgroundColor: '#A5B4FC'}}>

        {/* Left Column (Image) - Swapped to top on small screens */}
        <div className="col-md-6 d-flex align-items-end order-md-last order-first p-0 mt-3">
          <div className="col-md-8 ms-auto d-md-flex d-block justify-content-end">
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              className="img-fluid"
              style={{ maxWidth: '100%', maxHeight: 'auto' }}
            />
          </div>
        </div>

        {/* Right Column (Text) - Swapped to bottom on small screens */}
        <div className="col-md-6 p-0 order-md-first order-last mt-3">
          <div className="row f-reverse">
            <div className="col-sm-6">
              <h2>Boost healthcare support efficiency with human-like empathy</h2>
              <p className="mt-4">
                Make high query volume handling effortless: Self-serve 90% of FAQs with accurate resolutions (having 1% hallucinations). 
                Personalize interactions in 135+ languages.
              </p>
            </div>
            <div className="col-sm-8 mt-3">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2">
                  <button 
                    className="btn btn-outline-light text-dark d-flex align-items-center w-100 text-start fs-6 fw-bold" 
                    onClick={() => toggleText(index)}
                  >
                    <div className="d-flex align-items-center my-2" style={{border: 'none'}}>
                      <img
                        src={activeIndex === index 
                          ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png' 
                          : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'}
                        alt={activeIndex === index ? 'Minus icon' : 'Plus icon'}
                        style={{ width: '24px', height: '24px', marginRight: '10px' }}
                      />
                      <span>{faq.question}</span>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <p className="faq-answer ms-5 text-sm-start">{faq.answer}</p> 
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

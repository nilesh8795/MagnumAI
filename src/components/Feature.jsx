import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css';

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-1-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-2-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-1-3-1010x1024.webp',
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
      <div className="row g-0">
        <div className="col-sm-6">
          <div className="col-md-8 p-0 d-flex justify-content-center align-items-center">
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              style={{ width: '100%', height: 'auto', maxWidth: '100%', marginTop: '50px' }}
            />
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="row" style={{ marginTop: '100px' }}>
            <div className="row">
              <div className="col-sm-6">
                <h2>Boost healthcare support efficiency with human-like empathy</h2>
                <p className="mt4">Make high query volume handling effortless: Self-serve 90% of FAQs with accurate resolutions (having 1% hallucinations). Personalize interactions in 135+ languages.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button 
                      className="row align-items-center btn text-start fs-6 fw-bold faq-question" 
                      onClick={() => toggleText(index)}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={activeIndex === index 
                            ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png' 
                            : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'}
                          alt={activeIndex === index ? 'Minus icon' : 'Plus icon'}
                          style={{ width: '24px', height: '24px', marginRight: '10px' }} // Adjusted margin between icon and question
                        />
                        <span className="question" style={{background: 'none'}}>{faq.question}</span>
                      </div>
                    </button>
                    {activeIndex === index && (
                      <p className="col-sm-10 faq-answer">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

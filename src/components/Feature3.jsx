import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature3.css';

export default function Feature1() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-1-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-2-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-3-1010x1024.webp',
  ];

  const faqs = [
    {
      question: 'Enterprise-grade security',
      answer: 'Provide role-based access control, single sign-on, OAuth, SAML integration, and deep integration with EPIC.'
    },
    {
      question: 'Data breach elimination',
      answer: 'TLS 1.3 encryption in transit (TLS 1.2 supported for backward compatibility), AES 256 encryption at rest.'
    },
    {
      question: 'Cyberattack detection and prevention',
      answer: 'Drive pen tests and vulnerability management on the code/platform levels (WAF, DDOS, IPS & IDS covered).'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-fluid p-0 m-0" style={{ maxHeight: '80vh', backgroundColor: '#A5B4FC' }}>
      <div className="row g-0">
        {/* First column: Text */}
        <div className="col-md-6 p-0 main-left" >
          <div className="row ">
            <div className="col-sm-8">
              <h2 className='left-column fs-4'>Secure patient data with robust compliance measures</h2>
              <p className="mt4 left-column">Don’t compromise on data privacy and security to earn patients’ trust. Yellow.ai has got you covered with ISO, HIPAA, SOC2, GDPR, and PDPA compliance.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button 
                    className="row align-items-center btn mt-4 text-start fs-6 fw-bold faq-question left-column" 
                    onClick={() => toggleText(index)}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={activeIndex === index 
                          ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png' 
                          : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'}
                        alt={activeIndex === index ? 'Minus icon' : 'Plus icon'}
                        style={{ width: '24px', height: '24px', marginRight: '10px' }}
                      />
                      <span className="question" style={{ background: 'none' }}>{faq.question}</span>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <p className="col-sm-10 faq-answer left-column" >{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Second column: Image */}
        <div className="col-sm-4">
          <div className="col-md-8 p-0 d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              style={{ width: '100%', height: 'auto', maxWidth: '100%', marginTop: '50px', marginLeft: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
      question: '60% operational costs reduction',
      answer: 'Go live 2x faster with 40% faster implementation. Avoid the need for coding or NLP training.'
    },
    {
      question: 'Hassle-free system integration',
      answer: 'Get 150+ pre-built templates with healthcare terms. Enable flexible integration with 80% containment out of the box.'
    },
    {
      question: 'Data-driven decisions',
      answer: 'Collect feedback with CSAT and NPS surveys. Help agents improve service with chat summaries via AI omnichannel agent inbox.'
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
          <div className="row" style={{ marginTop: '150px' }}>
            <div className="row">
              <div className="col-sm-6">
                <h2>Go live 2x faster, make informed decisions</h2>
                <p className="mt4">Stop building healthcare support agents from scratch, and digging data to make decisions. Deploy easy-to-use AI in seconds and improve performance by tracking metrics.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button 
                      className="row align-items-center btn mt-4 text-start fs-4 fw-bold faq-question" 
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
                      <p className="col-sm-10 faq-answer" style={{ marginLeft: '60px' }}>{faq.answer}</p>
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

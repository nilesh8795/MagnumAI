import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file

export default function FAQ() {
  // FAQ data with questions and answers
  const faqData = [
    {
      question: "What is Yellow.ai ?",
      answer: "Yellow.ai is a conversational AI platform that helps businesses automate customer support, engagement, and transactions through AI-driven chatbots and voice bots."
    },
    {
      question: "How does Yellow.ai work ?",
      answer: "Yellow.ai uses NLP (Natural Language Processing) and machine learning to understand user input and respond in a way that mimics human conversation, providing personalized and dynamic responses."
    },
    {
      question: "What industries can benefit from Yellow.ai ?",
      answer: "Yellow.ai can be utilized across multiple industries, including healthcare, finance, retail, and more, to automate customer interactions and improve operational efficiency."
    }
  ];

  // State to track which question is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle answer visibility
  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            {/* Question */}
            <div
              onClick={() => toggleAnswer(index)}
              className={`question ${expandedIndex === index ? 'active' : ''}`}
            >
              <h5>{faq.question}</h5>
            </div>
            {/* Answer with animation */}
            <div
              className={`answer ${expandedIndex === index ? 'show' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

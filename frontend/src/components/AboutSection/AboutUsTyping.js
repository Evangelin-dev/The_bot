'use client';

import { useState, useEffect } from 'react';
import parentStyle from '../../components/ClientTestimonial/styles.module.css';
import localStyle from './AboutUsTyping.module.css';

const AboutUsTyping = () => {

  const fullText =
    "At The Bot, we specialize in crafting fool-proof marketing strategies that deliver results from Day 1. Using a predictive, data-driven approach, we help businesses achieve sustainable growth. With over 50+ brands in our portfolio, we've generated 200% ROAS for our clients by crafting compelling stories and executing them flawlessly.";
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;


    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {

        clearInterval(interval);
        setShowCursor(false);
      }
    }, 40);


    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container">
      <div className={`${parentStyle.testimonial_wrapper}`}>
        <h1 className="pink_text pb-4">About Us</h1>
        <div className={`d-flex overflow-auto gap-5 hide-scroll`}>
          <div
            className={`${parentStyle.testimonial_content} d-flex`}
            style={{ flexDirection: 'column' }}
          >
            <div
              className={`${parentStyle.testimonial_msg}`}
              style={{ marginBottom: 'auto', minHeight: '150px' }}
            >
              {typedText}
              {showCursor && <span className={localStyle.cursor}>|</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTyping;
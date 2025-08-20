'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotEmbed() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);


  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'chatbot-status') {
        setIsOpen(event.data.status === 'open');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);


  useEffect(() => {
    let intervalId;
    if (!isOpen) {
      setShowPopup(true);
      intervalId = setInterval(() => {
        setShowPopup(prev => !prev);
      }, 5000);
    } else {
      setShowPopup(false);
    }
    return () => clearInterval(intervalId);
  }, [isOpen]);

  const containerWidth = isOpen ? '350px' : '100px';
  const containerHeight = isOpen ? '600px' : '100px';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: containerWidth,
        height: containerHeight,
        zIndex: 9999,
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <AnimatePresence>
          {!isOpen && showPopup && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: 'absolute',
                right: '95px',
                bottom: '25px',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: 'white',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>We are online, chat with us!</p>
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '100%',
                    width: 0,
                    height: 0,
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderLeft: '5px solid white',
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <iframe
          src="https://chatbot.thebot.agency/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px'
          }}
          title="ChatBot"
        />
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';

export default function ChatbotEmbed() {
  const [iframeSize, setIframeSize] = useState({ width: '100px', height: '100px' });

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'chatbot-status') {
        if (event.data.status === 'open') {
          setIframeSize({ width: '400px', height: '700px' });
        } else {
          setIframeSize({ width: '100px', height: '100px' });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <iframe
      src="https://chatbot.thebot.agency/"
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: iframeSize.width,  
        height: iframeSize.height,
        border: 'none',
        zIndex: 9999,
        transition: 'width 0.3s ease, height 0.3s ease'
      }}
      title="ChatBot"
    />
  );
}
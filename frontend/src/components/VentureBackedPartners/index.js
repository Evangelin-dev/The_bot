"use client";
import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaClipboardCheck } from 'react-icons/fa';
import styles from './styles.module.css';

function AnimatedNumber({ toValue, text }) {
  useEffect(() => {
    const el = document.getElementById(`counter-${toValue}`);
    if (!el) return;
    const controls = animate(0, toValue, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        el.textContent = Math.round(value).toLocaleString();
      }
    });
    return () => controls.stop();
  }, [toValue]);

  return (
    <h3 className={styles.statTitle}>
      <span id={`counter-${toValue}`}>0</span>{text}
    </h3>
  );
}

const highlightData = [
  { value: 50, text: '+', subtitle: 'Customers', icon: <FaUsers size={30} /> },
  { value: 3, text: '+', subtitle: 'Countries', icon: <FaGlobeAmericas size={30} /> },
  { value: 2200, text: '+', subtitle: 'Projects', icon: <FaClipboardCheck size={30} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } },
};


const VentureBackedPartners = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <div className={styles.auroraWrapper} onMouseMove={handleMouseMove}>
      <div 
        className={styles.spotlight} 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`fw-bold ${styles.mainHeading}`}>
            We help companies to{' '}
            <span className={styles.gradientText}>brand, market & sell</span>{' '}
            effortlessly
          </h2>
        </div>

        <motion.div
          className={styles.statsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {highlightData.map((data) => (
            <motion.div
              key={data.subtitle}
              className={styles.statCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                {data.icon}
              </div>
              <AnimatedNumber toValue={data.value} text={data.text} />
              <p className={styles.statSubtitle}>{data.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VentureBackedPartners;
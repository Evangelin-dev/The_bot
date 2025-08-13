// src/components/AnimatedServiceGrid/index.js
'use client'; 

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';

// Data is correct, no changes needed here.
const SERVICES_DATA = [
    { id: 1, title: "Predictive Market Analysis", description: "Stay ahead of the curve with data-driven insights that guide your next big move.", link: "/services/predictive-analysis" },
    { id: 2, title: "Marketing Subscription", description: "Ongoing support to manage your marketing efforts effortlessly.", link:"/services/lead-generation" },
    { id: 3, title: "Predictive Marketing Strategy", description: "Fool-proof strategies backed by data to guarantee results.", link:"/services/marketing-strategies" },
    { id: 4, title: "SEO", description: "Rank higher, attract more, and convert better with search engine optimization.", link:"/services/seo" },
    { id: 5, title: "Social Media Management", description: "Create viral content and engage your audience across platforms.", link:"/services/social-media-management" },
    { id: 6, title: "Branding", description: "Compelling brand stories that resonate with your target audience.", link:"/services/branding" },
    { id: 7, title: "Web Development", description: "Stunning websites that drive traffic and convert leads.", link:"/services/web-development" },
    { id: 8, title: "Tech Development", description: "Tailored solutions to automate your processes and save operational costs.", link:"/services/tech-development" },
];

const ArrowIcon = () => ( 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="#9E77F3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 12H20.33" stroke="#9E77F3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AnimatedServiceGrid = () => {
    const [cards, setCards] = useState(SERVICES_DATA);
    const [isPaused, setIsPaused] = useState(false);
    const controls = useRef(Array.from({ length: 8 }, () => useAnimationControls())).current;

    useEffect(() => {
        // Animation logic is correct, no changes here.
        if (isPaused) return;
        const interval = setInterval(() => {
            controls.forEach(control => control.start("blink"));
            setTimeout(() => {
                setCards(prevCards => {
                    const [first, ...rest] = prevCards;
                    return [...rest, first];
                });
            }, 300);
        }, 2800);
        return () => clearInterval(interval);
    }, [isPaused, controls]);

    const cardVariants = { 
        initial: { borderColor: 'rgba(255, 255, 255, 0.15)' }, 
        blink: { 
            borderColor: ['rgba(158, 119, 243, 0.8)', 'rgba(255, 255, 255, 0.15)'], 
            transition: { duration: 0.6, ease: "easeInOut" } 
        } 
    };

    return (
        <div className={styles.animation_section}>
            <div className="container">
                <div className={`text-center ${styles.section_title} m-auto fadeIn`}>What We Offer</div>
                <div className="text-center text-white pt-4 pb-5">Our suite of services is designed to deliver growth from every angle.</div>
                <div className={styles.grid_container}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={styles.card}
                            variants={cardVariants}
                            animate={controls[index]}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <AnimatePresence mode="wait">
                                {/* The animated div now directly contains the content */}
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={styles.card_content_wrapper} // Use a simple wrapper class
                                >
                                    {/* --- THIS IS THE KEY CHANGE --- */}
                                    {/* We wrap the title and description in a div that will grow */}
                                    <div className={styles.card_body}>
                                        <h3 className={styles.card_title}>{card.title}</h3>
                                        <p className={styles.card_description}>{card.description}</p>
                                    </div>
                                    <Link href={card.link} className={styles.read_more_link}>
                                        <span>Read more</span>
                                        <div className={styles.arrow_wrapper}> <ArrowIcon /> </div>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimatedServiceGrid;
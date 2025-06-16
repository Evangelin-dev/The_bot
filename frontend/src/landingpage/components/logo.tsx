/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";

type LogoItemProps = {
    logo: string;
    name: string;
};

const floatTransition = {
    y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    },
    rotate: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
    },
    scale: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

const LogoItem = ({ logo, name }: LogoItemProps) => {
    return (
        <motion.div
            className="h-44 w-64 sm:h-44 sm:w-64 rounded-2xl border border-gray-300 dark:border-gray-700 bg-black/10 backdrop-blur-md overflow-hidden relative"
            initial={{ opacity: 1, y: 30, scale: 0.95 }}
            animate={{
                y: ["0%", "5%", "0%"],
                rotate: [0, 1, 0, -1, 0],
                scale: [1, 1.05, 1],
            }}
            transition={floatTransition}
            whileHover={{ scale: 1.1, rotate: 2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.97 }}
        >
            <img
                src={logo}
                alt={name}
                className=""
            />
        </motion.div>
    );
};

const logos = [
    { id: 1, logo: "/Rajog-E-logo.png", name: "Rajog Enterprises" },
    { id: 2, logo: "/Rajog-G-logo.png", name: "Rajog Groundscrews" },
    { id: 3, logo: "/chemiplant-logo.png", name: "Chemical Engineering Company" },
    { id: 4, logo: "/yagnam-logo.png", name: "Yagnm Industries Private Limited" },
    { id: 5, logo: "/Yugma-logo.png", name: "Yugma Impressions" },
];

const LogoCloudSection = () => {
    return (
        <section 
            className="px-4"
            style={{
                height: '300px',
                padding: '0',
                margin: '0',
                minHeight: '300px',
                maxHeight: '400px',
                overflow: 'hidden'
            }}
        >
            <div className="w-full mx-auto px-4 sm:px-8" style={{ height: '300px' , overflow: 'hidden' }}>
                <div className="flex md:mt-32 flex-wrap justify-center gap-4 sm:gap-6 overflow-hidden" style={{ height: '300px', overflow: 'hidden' }}>
                    {logos.map((logo) => (
                        <LogoItem key={logo.id} {...logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCloudSection;
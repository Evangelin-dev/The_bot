/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";

type LogoItemProps = {
    logo: string;
    name: string;
    index: number;
};

const LogoItem = ({ logo, name, index }: LogoItemProps) => {
    return (
        <motion.div
            className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-amber-400/20 dark:border-gray-600/30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
                width: '200px',
                height: '140px',
                minWidth: '200px',
                minHeight: '140px'
            }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotate: [0, 0.5, 0, -0.5, 0]
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                rotate: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                }
            }}
            whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                transition: { duration: 0.3 } 
            }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-full h-full flex items-center justify-center">
                <img
                    src={logo}
                    alt={name}
                    className="max-w-full max-h-full object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                    style={{
                        maxWidth: '160px',
                        maxHeight: '100px'
                    }}
                    loading="lazy"
                />
            </div>
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
        <section className="py-16 px-4 min-h-fit">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Partners
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Trusted by leading companies across various industries
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center">
                    {logos.map((logo, index) => (
                        <LogoItem 
                            key={logo.id} 
                            logo={logo.logo}
                            name={logo.name}
                            index={index}
                        />
                    ))}
                </div>

                {/* Mobile Horizontal Scroll Alternative */}
                <div className="block sm:hidden mt-8">
                    <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
                        <div className="flex gap-4 px-4">
                            {logos.map((logo, index) => (
                                <motion.div
                                    key={`mobile-${logo.id}`}
                                    className="flex-shrink-0 flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-xl"
                                    style={{
                                        width: '180px',
                                        height: '120px',
                                        minWidth: '180px'
                                    }}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <img
                                        src={logo.logo}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain filter brightness-110"
                                        style={{
                                            maxWidth: '140px',
                                            maxHeight: '80px'
                                        }}
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default LogoCloudSection;
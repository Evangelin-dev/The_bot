"use client";
import { motion } from "framer-motion";
import React from "react";

const stats = [
  {
    value: "20+",
    label: "Years Experience",
    sublabel: "International Sales",
    description: "Proven track record in global markets"
  },
  {
    value: "110+",
    label: "Clients",
    sublabel: "Scaled Globally",
    description: "Successfully expanded across continents"
  },
  {
    value: "12x",
    label: "Growth Multiplier",
    sublabel: "₹5Cr → ₹60Cr+",
    description: "Factory revenue transformation"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const glowVariants = {
  hover: {
    boxShadow: "0 0 40px rgba(236, 72, 153, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)",
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function PromoSection() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative pt-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 text-sm font-medium text-pink-200 backdrop-blur-sm">
                Our Track Record
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Why Partner</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                With Us?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Transforming businesses through proven strategies and global expertise
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={glowVariants}
                  className="relative bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-blue-500/20 p-[1px] rounded-2xl backdrop-blur-sm"
                >
                  <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 h-full border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                    
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="mb-6">
                      <motion.h3
                        className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-none mb-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.value}
                      </motion.h3>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg lg:text-xl font-semibold text-white leading-tight group-hover:text-pink-100 transition-colors duration-300">
                        {stat.label}
                      </h4>
                      
                      <div className="text-sm font-medium text-pink-300/80 group-hover:text-pink-300 transition-colors duration-300">
                        {stat.sublabel}
                      </div>
                      
                      <p className="text-slate-400 text-xs lg:text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {stat.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent group-hover:via-pink-500/60 transition-all duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center space-x-2 text-slate-400 text-sm">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-pink-500/50" />
              <span>Ready to scale your business globally?</span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
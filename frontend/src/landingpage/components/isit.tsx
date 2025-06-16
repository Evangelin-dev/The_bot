"use client";

import { motion } from "framer-motion";
import React from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "Manufacturer making ₹15-20L per month",
  "Want to scale to ₹1Cr/month",
  "Don't have a strong sales system or trained team",
  "Feel stuck with traditional marketing methods",
];

const IsThisYou = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-8 py-8 border-b border-white/10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center text-white mb-3"
            >
              YOU NEED THIS IF
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="px-8 py-12">
            <div className="grid gap-6 max-w-3xl mx-auto">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>
                  <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed flex-1">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-400/30">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  If yes, this is for you.
                </p>
                <p className="text-purple-200 text-lg">
                  Let&apos;s transform your business together
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl opacity-60 blur-sm"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-4 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-40 blur-sm"
        ></motion.div>
      </div>
    </section>
  );
};

export default IsThisYou;
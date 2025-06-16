"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CheckCircle, TrendingUp, Target, DollarSign } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 20 },
  { month: "Feb", revenue: 35 },
  { month: "Mar", revenue: 45 },
  { month: "Apr", revenue: 60 },
  { month: "May", revenue: 70 },
  { month: "Jun", revenue: 80 },
  { month: "Jul", revenue: 85 },
  { month: "Aug", revenue: 90 },
  { month: "Sep", revenue: 95 },
  { month: "Oct", revenue: 98 },
  { month: "Nov", revenue: 100 },
  { month: "Dec", revenue: 100 },
];

const bulletPoints = [
  {
    text: "Consistent ₹1Cr/month revenue",
    icon: <Target className="w-5 h-5" />
  },
  {
    text: "Scalable brand and automated sales process",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    text: "8x - 10x Investment return within 12 months",
    icon: <DollarSign className="w-5 h-5" />
  },
  {
    text: "Team who closes without you",
    icon: <CheckCircle className="w-5 h-5" />
  },
];

export default function InvestmentOutcome() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }
        
        @keyframes pulse-border {
          0%, 100% {
            border-color: rgba(236, 72, 153, 0.5);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.8);
          }
        }
        
        @keyframes slide-in {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(1deg);
          }
          75% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-card:nth-child(2) {
          animation-delay: -2s;
        }
        
        .floating-card:nth-child(3) {
          animation-delay: -4s;
        }
        
        .glow-box {
          animation: glow 3s ease-in-out infinite;
        }
        
        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        
        .bounce-icon {
          animation: bounce-gentle 4s ease-in-out infinite;
        }
        
        .outcome-item {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        .outcome-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
        .outcome-item:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
        .outcome-item:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
        .outcome-item:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
        
        .chart-container {
          animation: float 8s ease-in-out infinite;
          animation-delay: -1s;
        }
        
        .title-glow {
          animation: glow 4s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.3));
        }
      `}</style>

      <section className="relative text-white pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-glow text-4xl md:text-6xl font-bold uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              OUTCOME <span className="">$</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6 floating-card">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent shadow-2xl transform hover:scale-105 mb-6">
                  Your Ticket To 1Cr Month
                </h3>
              </div>

              <div className="space-y-6 floating-card">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Expected Outcomes
                </h3>

                <div className="space-y-4">
                  {bulletPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="outcome-item flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 group transform hover:scale-105 hover:translate-x-2"
                    >
                      <div className="bounce-icon flex-shrink-0 mt-1 text-pink-500 group-hover:text-pink-400 transition-colors duration-300 transform group-hover:scale-125">
                        {point.icon}
                      </div>
                      <span className="text-lg md:text-xl font-medium text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="chart-container bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 pulse-border hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform hover:translate-x-2 transition-transform duration-300">
                    Revenue Growth Projection
                  </h3>
                  <p className="text-gray-400 transform hover:translate-x-2 transition-transform duration-300">
                    From ₹20L to ₹1Cr per month in 12 months
                  </p>
                </div>

                <div className="h-80 md:h-96 transform hover:scale-105 transition-transform duration-500">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <CartesianGrid stroke="#2d2d2d" strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                      />
                      <YAxis
                        tickFormatter={(val) => `${val}L`}
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          borderRadius: "12px",
                          border: "1px solid #374151",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                        }}
                        labelStyle={{ color: "#fff", fontSize: 14, fontWeight: "600" }}
                        itemStyle={{ fontSize: 14, fontWeight: "500" }}
                        formatter={(value: number) => [`₹${value}L`, "Revenue"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="url(#lineGradient)"
                        strokeWidth={4}
                        dot={{ r: 4, fill: "#ec4899", strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 8, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
                        isAnimationActive={true}
                        animationDuration={3000}
                        filter="url(#glow)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
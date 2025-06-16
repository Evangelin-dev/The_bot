/* eslint-disable react/display-name */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = Array.from({ length: 40 }).map((_, i) => {
      const x = i * 7 - 380;
      return `M${x} ${-189 + i * -8}C${x} ${-189 + i * -8} ${x + 68} ${216 + i}, ${x + 532} ${
        343 + i
      }C${x + 996} ${470 + i}, ${x + 1064} ${875 + i}, ${x + 1064} ${875 + i}`;
    });

    return (
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full overflow-hidden",
          className
        )}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {paths.map((_, index) => (
              <linearGradient
                id={`gradient-${index}`}
                key={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
                <stop offset="50%" stopColor="#18CCFC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#18CCFC" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {paths.map((d, index) => (
            <motion.path
              key={`beam-${index}`}
              d={d}
              stroke={`url(#gradient-${index})`}
              strokeWidth="0.6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 10 + Math.random() * 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </svg>
      </div>
    );
  }
);

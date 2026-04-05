"use client";

import React from "react";
import { motion } from "framer-motion";

// Mock logos using LogoIpsum style placeholders
const row1Logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
];

const row2Logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE4QxcUZhYJuAKGSySAL06PwVK9FBp_hKkA&s",
];

interface LogoSliderProps {
  logos: string[];
  direction: "left" | "right";
  speed?: number;
}

const LogoRow = ({ logos, direction, speed = 40 }: LogoSliderProps) => {
  // We double the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const isLeft = direction === "left";

  return (
    <div className="flex overflow-hidden select-none py-4">
      <motion.div
        initial={{ x: isLeft ? 0 : "-50%" }}
        animate={{ x: isLeft ? "-50%" : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap gap-6 min-w-full"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[140px] bg-white rounded-[32px] flex items-center justify-center p-8 shadow-sm border border-gray-50"
          >
            <img
              src={logo}
              alt="Partner Logo"
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function LogoSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="max-w-9xl mx-auto mb-10 px-6 verflow-hidden">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="space-y-4">
        {/* Upper Slider: Left to Right */}
        <LogoRow logos={row1Logos} direction="right" speed={50} />

        {/* Lower Slider: Right to Left */}
        <LogoRow logos={row2Logos} direction="left" speed={60} />
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react"; // Fallback icons
import React from "react";

// The Floka Logo from image_16.png
const FlokaLogo = () => (
  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-3">
    <svg viewBox="0 0 100 100" className="w-full h-full text-black">
      <path d="M20 20 H80 V40 H40 V60 H80 V80 H20 Z" fill="currentColor" />{" "}
      {/* Simplification of the 'F' logo */}
    </svg>
  </div>
);

// Define the structure of a slide
type SlideItem = {
  type: "text" | "card";
  text?: string;
  cardData?: {
    title: string;
    tags: string[];
  };
};

const sliderItems: SlideItem[] = [
  // Text Slides from image_16.png
  { type: "text", text: "Next-gen agency" },
  { type: "text", text: "Innovative solutions" },
  { type: "text", text: "Quality design" },
];

const infiniteItems = [...sliderItems, ...sliderItems];

export default function InfiniSlider() {
  return (
    <div className="w-full bg-[#f8f8f8] py-16 overflow-hidden">
      <div className="flex w-full items-center justify-start gap-12">
        {/* The motion.div handles the continuous movement */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap gap-12 items-center whitespace-nowrap"
        >
          {infiniteItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "text" && (
                <div className="flex items-center gap-12">
                  <FlokaLogo />
                  <h1 className="text-8xl font-black text-black tracking-tighter uppercase leading-none">
                    {item.text}
                  </h1>
                </div>
              )}

              {item.type === "card" && item.cardData && (
                <div className="bg-white text-black p-8 rounded-[40px] shadow-sm flex items-center justify-between min-w-[1200px] border border-gray-100">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium tracking-tight">
                      {item.cardData.title}
                    </h3>
                    <div className="flex gap-2">
                      {item.cardData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-500 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* The Black Circle with White Arrow */}
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

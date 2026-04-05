"use client";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import React from "react";

const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=885&auto=format&fit=crop",
    title: "Loop agency creative branding",
    tags: ["MODULE", "UX"],
    type: "full",
  },
  {
    src: "https://images.unsplash.com/photo-1678982579311-a8f3e0ff2712?q=80&w=387&auto=format&fit=crop",
    title: "Minimal Interior Concept",
    tags: ["INTERIOR", "3D"],
    type: "half",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1663088728903-10eff75dea0f?q=80&w=975&auto=format&fit=crop",
    title: "Digital Product Unboxing",
    tags: ["TECH", "WEB"],
    type: "half",
  },
  {
    src: "https://images.unsplash.com/photo-1678705545224-e4d34dfc0de7?q=80&w=711&auto=format&fit=crop",
    title: "Catering to the Future",
    tags: ["BRANDING", "UI"],
    type: "full",
  },
];

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
    },
  };

  // --- Staggered Letter Reveal Logic ---
  const buttonText = "MORE WORKS";
  const letterVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    hover: (i: number) => ({
      opacity: [0, 1],
      y: [10, 0],
      transition: {
        delay: i * 0.04,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-24 bg-[#f8f8f8] text-black w-full border-t border-gray-200">
      <div className="max-w-9xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-2">
            Selected
          </h2>
          <p className="text-5xl md:text-6xl text-gray-400/80 font-light tracking-tight leading-tight lowercase">
            creative works
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                item.type === "full" ? "md:col-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div
                className={`overflow-hidden ${item.type === "full" ? "aspect-[21/9]" : "aspect-[1.2/1]"}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* --- IMAGE HOVER INFO BOX (The provided photo box) --- */}
              {/* Note: opacity-0 group-hover:opacity-100 handles the simple visibility switch */}
              <div className="absolute inset-x-4 bottom-4 z-20 transition-all duration-500 ease-out translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-2xl">
                  <div>
                    <h4 className="text-2xl font-medium mb-3 tracking-tight text-black">
                      {item.title}
                    </h4>
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-500 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Floka standard black arrow circle */}
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0 ml-4">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Minimal Pre-reveal dark overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </motion.div>
          ))}
        </div>

        {/* --- STAGGERED TEXT REVEAL BUTTON --- */}
        <div className="flex justify-center mt-20">
          <motion.button
            initial="initial"
            whileHover="hover"
            className="group flex items-center gap-4 text-xs uppercase font-semibold tracking-widest"
          >
            {/* The standard Plus circle */}
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-90 group-hover:bg-primary transition-all duration-300">
              <Plus size={20} strokeWidth={2.5} />
            </div>

            {/* The Text Container that will remain normal until hovered */}
            <span className="flex overflow-hidden relative">
              {buttonText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

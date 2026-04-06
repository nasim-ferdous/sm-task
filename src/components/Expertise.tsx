"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

const expertiseItems = [
  {
    id: "no-code",
    title: "No-Code Website",
    tags: ["BRANDING", "UX"],
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions tailored to modern web construction.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "web3",
    title: "Web3 & Crypto",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX", "WEBSITE"],
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions for decentralized finance and blockchain applications.",
    img: "https://plus.unsplash.com/premium_photo-1671739624001-151d5926b484?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "low-code",
    title: "Low-Code Development",
    tags: ["BRANDING", "UX"],
    desc: "We leverage modern low-code platforms to accelerate development timelines while maintaining design integrity and functional complexity.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT", "UX", "WEBSITE"],
    desc: "Our user-centric design approach focuses on creating intuitive, engaging, and accessible interfaces that convert users into loyal customers.",
    img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Expertise() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Staggered Text Logic for "LET'S TALK"
  const buttonText = "LET'S TALK";
  
  // Explicitly typed as Variants to fix the Easing/TargetResolver error
  const letterVariants: Variants = {
    initial: { opacity: 1, y: 0 },
    hover: (i: number) => ({
      opacity: [0, 1],
      y: [10, 0],
      transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 bg-white text-black w-full border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
            OUR EXPERTISE
          </span>
          <div className="h-[1px] w-full bg-gray-200 mt-4" />
        </div>

        <div className="flex flex-col md:flex-row justify-end mb-20">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
              Here to help with everything from small updates to full-scale
              redesigns, tailored to your evolving needs.
            </h2>
          </div>
        </div>

        <div className="space-y-0 mt-16">
          {expertiseItems.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="border-t border-gray-200 first:border-t-0"
              >
                {/* Accordion Header */}
                <div
                  className="py-12 flex flex-wrap items-center justify-between cursor-pointer gap-y-4"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-black group hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>

                  <div
                    className={`flex flex-wrap gap-2 transition-opacity duration-300 ${
                      isExpanded ? "opacity-0 h-0 w-0" : "opacity-100"
                    }`}
                  >
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-500 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                    <span className="text-xs uppercase font-semibold tracking-widest text-black">
                      SEE MORE
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden pb-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8">
                        <div className="md:col-span-6 space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-500 uppercase"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            {item.desc}
                          </p>
                        </div>

                        <div className="md:col-span-6 flex md:justify-end">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-sm overflow-hidden rounded-3xl aspect-[1.2/1] bg-gray-100"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-20">
          <motion.button
            initial="initial"
            whileHover="hover"
            className="group flex items-center gap-4 text-xs uppercase font-semibold tracking-widest"
          >
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-90 group-hover:bg-primary transition-all duration-300">
              <Plus size={20} strokeWidth={2.5} />
            </div>

            <span className="flex">
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
"use client";
import { motion } from "framer-motion";
import { Plus, Star, Rocket, Users, Headset, Trophy } from "lucide-react";
import React from "react";

const stats = [
  {
    label: "CLIENT REVIEWS",
    value: "4.9",
    icon: <Star size={14} className="text-gray-500" />,
    description: "My goal is to capture the real, raw emotions",
  },
  {
    label: "PRODUCT LAUNCH",
    value: "1k+",
    icon: <Rocket size={14} className="text-gray-500" />,
    description: "My goal is to capture the real, raw emotions",
  },
  {
    label: "READY TEAM MATES",
    value: "20",
    icon: <Users size={14} className="text-gray-500" />,
    description: "My goal is to capture the real, raw emotions",
  },
  {
    label: "GET SUPPORT",
    value: "24/7",
    icon: <Headset size={14} className="text-gray-500" />,
    description: "My goal is to capture the real, raw emotions",
  },
];

export default function FunFacts() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-24 max-w-9xl mx-auto  bg-black text-white w-full overflow-hidden">
      <div className=" px-6">
        {/* Top Header Label */}
        <div className="mb-12 border-t border-gray-800 pt-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
            FUN FACTS
          </span>
        </div>

        {/* Hero Headline Section */}
        <div className="flex flex-col md:flex-row justify-end mb-24">
          <motion.h2
            {...fadeIn}
            className="md:w-2/3 text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight"
          >
            Capturing moments that tell your story and bring emotions to real
            life. A next-gen solutions yet.
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Get in Touch Card */}
          <motion.div
            {...fadeIn}
            className="md:col-span-4 bg-white text-black rounded-[32px] p-10 flex flex-col items-start gap-8"
          >
            <div className="relative w-20 h-20 flex items-center justify-center border border-gray-100 rounded-full">
              {/* Circular Text Placeholder (Seen in screenshot) */}
              <div className="absolute inset-0 animate-spin-slow opacity-20 text-[8px] flex items-center justify-center">
                ● WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE? ●
              </div>
              <Trophy size={32} />
            </div>

            <p className="text-xl font-medium leading-snug text-gray-800">
              We design every project with long-term success in mind.
            </p>

            <button className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <Plus size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                GET IN TOUCH
              </span>
            </button>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">
                    {stat.label}
                  </span>
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <span className="text-6xl md:text-7xl font-medium tracking-tighter">
                    {stat.value}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

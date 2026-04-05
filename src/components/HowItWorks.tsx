"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessagesSquare, Search, Lightbulb } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind class merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const workSteps = [
  {
    title: "Discussions",
    description:
      "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    icon: MessagesSquare,
  },
  {
    title: "Find solution",
    description:
      "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    icon: Search,
  },
  {
    title: "Innovation",
    description:
      "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    icon: Lightbulb,
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-[#f8f8f8] py-24 px-6  text-black">
      <div className="max-w-9xl mx-auto">
        <div className="border-t border-gray-200 pt-8 mb-20">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-medium text-gray-900">
            HOW WE WORKS?
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="hidden lg:block lg:col-span-4" />

          <div className="lg:col-span-8 space-y-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight max-w-4xl"
            >
              What started as a small idea has grown into a powerhouse of
              creativity and innovation.
            </motion.h2>

            {/* Steps List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {workSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-2 py-12 items-start border-t border-gray-200",
                    index === workSteps.length - 1 && "border-b",
                  )}
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="flex items-center justify-center">
                      <step.icon
                        size={40}
                        strokeWidth={1}
                        className="text-gray-900"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

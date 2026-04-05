"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, MessageSquare, MapPin, ChevronDown } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background grain/texture overlay could be added here via CSS */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Information */}
        <div className="space-y-16">
          <div className="space-y-8">
            <span className="text-[12px] uppercase tracking-[0.3em] font-medium text-gray-400">
              GET IN TOUCH
            </span>
            <h2 className="text-5xl md:text-7xl font-normal leading-tight tracking-tight">
              Tell us about your project —whether it's a website, SEO, or
              marketing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MessageSquare size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  TALK TO US
                </span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Work and general inquiries <br />
                <span className="text-white">+123 456 789 00</span>
              </p>
            </div>

            {/* Address Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  POST ADDRESS
                </span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                541 Melville Ave, Palo Alto, <br />
                CA 94301, United States
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-8 md:p-12 text-black shadow-2xl"
        >
          <h3 className="text-3xl font-medium mb-10">
            Have a project in mind?
          </h3>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full bg-[#f6f6f6] border-none rounded-2xl p-5 text-[10px] font-bold tracking-widest placeholder:text-gray-400 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
              {/* Email Input */}
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="BUSINESS EMAIL"
                  className="w-full bg-[#f6f6f6] border-none rounded-2xl p-5 text-[10px] font-bold tracking-widest placeholder:text-gray-400 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget Select */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  BUDGET
                </label>
                <div className="relative">
                  <select className="w-full bg-[#f6f6f6] appearance-none border-none rounded-2xl p-5 text-[12px] font-medium focus:ring-2 focus:ring-black outline-none cursor-pointer">
                    <option>$1000 - $5000</option>
                    <option>$5000 - $10000</option>
                    <option>$10000+</option>
                  </select>
                  <ChevronDown
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              {/* Service Select */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  SERVICE
                </label>
                <div className="relative">
                  <select className="w-full bg-[#f6f6f6] appearance-none border-none rounded-2xl p-5 text-[12px] font-medium focus:ring-2 focus:ring-black outline-none cursor-pointer">
                    <option>CONSULTANCY</option>
                    <option>UI/UX DESIGN</option>
                    <option>WEB DEVELOPMENT</option>
                  </select>
                  <ChevronDown
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full bg-[#f6f6f6] border-none rounded-2xl p-5 text-[10px] font-bold tracking-widest placeholder:text-gray-400 focus:ring-2 focus:ring-black outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center gap-4 group mt-4"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-90">
                <Plus size={20} />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                LET'S TALK
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

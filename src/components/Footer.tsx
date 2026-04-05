"use client";

import React from "react";
import { motion } from "framer-motion";
import InfiniSlider from "./InfiniSlider";
import Divider from "./Divider";
import FooterDivider from "./FooterDivider";

export default function Footer() {
  const navLinks = [
    { name: "About Us", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Journal", href: "#" },
    { name: "How It Works?", href: "#" },
    { name: "Faq", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Get In Touch", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialLinks = ["DRIBBBLE", "BEHANCE", "LINKEDIN", "X"];

  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6 md:px-12 lg:px-24">
      {/* Top Section: Big CTA */}
      <div className="max-w-9xl mx-auto text-center border-b border-white/10 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] max-w-5xl mx-auto mb-16 tracking-tight"
        >
          Work seamlessly with a creative team that’s built to match your pace
          and exceed your expectations.
        </motion.h2>

        {/* Book a Call Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black pl-2 pr-8 py-2 rounded-full flex items-center gap-4 mx-auto group transition-all"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=100&auto=format&fit=crop"
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold leading-tight">Book a call</p>
            <p className="text-[10px] text-gray-500 font-medium">
              Let's talk about your project
            </p>
          </div>
        </motion.button>
      </div>
      <FooterDivider></FooterDivider>

      {/* Bottom Section: Navigation & Links */}
      <div className="max-w-[1400px] mx-auto pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column: Greeting & Small Card */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                DROP US A LINE OR JUST{" "}
                <span className="text-white">SAY HELLO!</span>
              </p>
            </div>

            <div className="bg-[#111] p-4 rounded-[32px] inline-block group cursor-pointer">
              <div className="rounded-[24px] overflow-hidden mb-6 aspect-[4/3] w-full max-w-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                  alt="Team sitting"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] text-gray-400 font-medium pb-2 px-2">
                Copyright & design by{" "}
                <span className="text-white font-bold">Case-themes</span>
              </p>
            </div>
          </div>

          {/* Right Column: Email & Nav Links */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Socials & Email Header */}
            <div className="flex flex-wrap items-center justify-between gap-8 border-b border-white/10 pb-12 mb-16">
              <div className="flex gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[10px] font-bold tracking-widest text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Giant Outlined Email */}
            <h3
              className="text-5xl md:text-8xl lg:text-[120px] font-normal leading-none tracking-tighter mb-20 text-transparent stroke-white"
              style={{ WebkitTextStroke: "1px white" }}
            >
              info@floka.com
            </h3>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl md:text-4xl font-normal hover:text-gray-400 transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

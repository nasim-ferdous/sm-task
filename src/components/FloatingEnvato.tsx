"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingEnvato() {
  return (
    <motion.a
      href="https://themeforest.net" // Replace with your actual Envato/ThemeForest link
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -100, opacity: 0 }} // Slides in from the left
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      /* 
         Change: 'left-8' instead of 'right-8'
         Change: 'bottom-8' or 'bottom-12' for standard floating position
      */
      className="fixed bottom-12 left-8 z-[100] hidden md:flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-black transition-all duration-300 border border-white/5 backdrop-blur-sm"
    >
      <span className="text-[13px] font-bold tracking-tight text-white/90">
        Buy on
      </span>

      {/* Official-style Envato Leaf SVG */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-[#82b440]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.562 3.19c-1.391-1.39-4.707-1.04-7.915 1.155-3.69 2.525-4.52 6.55-3.666 8.784.116.303.351.467.618.467.33 0 .666-.252.793-.683.821-2.784 3.013-4.59 5.865-4.59 1.403 0 2.684.42 3.513 1.155.828.733 1.254 1.761 1.254 2.996 0 2.541-1.791 5.373-5.32 5.373-1.037 0-1.894-.325-2.55-.966-.345-.335-.613-.751-.813-1.22l-.004-.01a7.41 7.41 0 0 1-.365-1.577c-.035-.3-.06-.554-.085-.85-.05-.623-.106-1.341-.444-2.148-.737-1.758-2.512-2.822-4.762-2.822-1.566 0-2.955.51-3.812 1.394C1.517 10.662.993 11.968.993 13.43c0 1.954 1.12 3.791 2.821 4.703.743.398 1.58.597 2.484.597 1.053 0 2.155-.262 3.18-.847.284-.162.433-.42.433-.708s-.149-.546-.433-.709c-.27-.154-.572-.232-.897-.232-.424 0-.82.133-1.144.385-1.32.962-2.73 1.04-3.541.606-.713-.383-1.12-1.226-1.12-2.28 0-.834.331-1.564.887-2.052.532-.468 1.298-.732 2.15-.732 1.267 0 2.186.586 2.64 1.666.273.65.318 1.22.36 1.745.04.516.082 1.041.222 1.542.197.705.517 1.332 1.032 1.831 1.01 1.012 2.454 1.547 4.07 1.547 4.564 0 7.23-3.69 7.23-7.23 0-1.615-.558-3.003-1.57-3.905l.013-.013z" />
      </svg>

      <span className="text-[13px] font-bold tracking-tight lowercase text-white/90">
        envato
      </span>
    </motion.a>
  );
}

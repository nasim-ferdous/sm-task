"use client";
import { motion } from "framer-motion";

export default function FooterDivider() {
  return (
    <div className="relative w-full h-8 mb-24 overflow-hidden opacity-30">
      <motion.div
        animate={{ x: [0, -100] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 items-center whitespace-nowrap"
      >
        {[...Array(90)].map((_, i) => (
          <div
            key={i}
            className={`h-4 w-[1px] bg-white ${i % 5 === 0 ? "h-6" : "h-3"}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="pointer-events-none fixed inset-0 z-[99999] hidden md:block"
    >
      {/* 1. Outer Ring - Changed border to white */}
      <motion.div
        style={{
          translateX: circleX,
          translateY: circleY,
          left: -20,
          top: -20,
        }}
        className="absolute w-10 h-10 border border-red/50 rounded-full mix-blend-difference"
      />

      {/* 2. Inner Dot - Changed bg to white */}
      <motion.div
        style={{
          translateX: mouseX,
          translateY: mouseY,
          left: -2,
          top: -2,
        }}
        className="absolute w-1 h-1 bg-red rounded-full mix-blend-difference"
      />
    </motion.div>
  );
}

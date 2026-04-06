"use client";
import { motion, Variants } from "framer-motion"; // 1. Added Variants import
import Mission from "./Misssion";

export default function About() {
  // 2. Added explicit type to textReveal
  const textReveal: Variants = {
    initial: { y: 100, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section className="py-24 bg-[#f8f8f8] text-black w-full border-t border-gray-200">
      <div className="max-w-9xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
            ABOUT COMPANY
          </span>
          <div className="h-[1px] w-full bg-gray-200 mt-4" />
        </div>

        {/* Headline Section */}
        <div className="flex flex-col md:flex-row justify-end mb-20">
          <div className="md:w-2/3">
            <motion.h2
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={textReveal}
              className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight"
            >
              We’re a team of designers and developers who specialize in
              building websites that work.
            </motion.h2>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] aspect-[4/3] md:aspect-[1.5/1]"
          >
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-2-bg1-min.jpg"
              alt="Team at work"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] aspect-[4/3] md:aspect-[1.5/1]"
          >
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15.jpg"
              alt="Professional portrait"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute bottom-8 right-8 flex -space-x-4">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center p-4 border border-white/10 shadow-2xl">
                <img
                  src="https://environmentalkleanup.com/wp-content/uploads/2023/10/badge3.png"
                  alt="Award 1"
                  className="w-full h-auto invert"
                />
              </div>
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-2xl">
                <img
                  src="https://3dprintitall.com/wp-content/uploads/2022/05/logo-1.png"
                  alt="Award 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Mission />
    </section>
  );
}

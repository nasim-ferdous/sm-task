"use client";
import { motion, Variants } from "framer-motion";
import ParticleShape from "./ParticleShape"; // Import the component we made above

export default function Hero() {
  const fadeUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side: Text Content */}
        <motion.div initial="initial" animate="animate" className="text-left">
          <motion.span
            variants={fadeUp}
            className="text-[#00ffcc] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-8 block"
          >
            FLOKA DIGITAL AGENCY
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-[100px] lg:text-[120px] font-black text-white leading-[0.9] uppercase tracking-tighter"
          >
            Modern <br />
            <span
              className="text-transparent italic"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              Digital
            </span>{" "}
            Studio
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-12">
            <button className="group relative bg-[#00ffcc] text-black font-bold py-5 px-12 rounded-full overflow-hidden transition-all">
              <span className="relative z-10">VIEW OUR WORK</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Particle Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden lg:flex justify-center items-center h-[600px] relative"
        >
          <ParticleShape />
        </motion.div>
      </div>

      {/* Decorative side text */}
      <div className="absolute left-10 bottom-10 hidden lg:block">
        <p className="text-white/30 text-xs uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
          Established 2026 / Dhaka
        </p>
      </div>
    </section>
  );
}

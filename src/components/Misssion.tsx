"use client";
import { motion, Variants } from "framer-motion"; // 1. Added Variants import

const awards = [
  { platform: "Awwwards", achievement: "Website design agency" },
  { platform: "Dribbble", achievement: "Number #01 designer" },
  { platform: "Google Inc.", achievement: "Website of the Day" },
];

export default function Mission() {
  // 2. Explicitly type the variants object
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-[#f8f8f8] text-black w-full border-b border-gray-200">
      <div className="max-w-9xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Column 1: Mission */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-medium mb-8">Our mission</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-normal">
              We build bold identities that speak your story —visually and
              verbally. From websites to packaging, we design experiences that
              are beautiful and functional. We don't just make things look good.
            </p>
          </motion.div>

          {/* Column 2: Vision */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl font-medium mb-8">Our vision</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-normal">
              From websites to packaging, we create experiences that are as
              functional as they are beautiful. It's more than just aesthetics.
            </p>
          </motion.div>

          {/* Column 3: Rewards */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-medium mb-8">Get rewards</h3>
            <ul className="space-y-0">
              {awards.map((award, index) => (
                <li
                  key={index}
                  className="py-5 border-t border-gray-300 first:border-t-0 group cursor-default"
                >
                  <span className="font-medium text-lg text-black group-hover:text-primary transition-colors">
                    {award.platform}
                  </span>
                  <span className="text-gray-400 font-normal">
                    {" — "}
                    {award.achievement}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

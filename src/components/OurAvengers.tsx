"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import React from "react";

const teamMembers = [
  {
    name: "Ricardo P. Winslow",
    role: "FOUNDER",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Carlos E. Ashcroft",
    role: "UI/UX DESIGNER",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Santiago G. Drayton",
    role: "WEB DEVELOPER",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Gabriel O. Eastwood",
    role: "CDO",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Marco L. Caldwell",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function OurAvengers() {
  const buttonText = "JOIN WITH US";

  const letterVariants = {
    initial: { opacity: 1, y: 0 },
    hover: (i: number) => ({
      opacity: [0, 1],
      y: [10, 0],
      transition: {
        delay: i * 0.04,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-24 bg-[#f8f8f8] text-black w-full overflow-hidden">
      <div className="max-w-9xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 items-start">
          <div className="md:col-span-1 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
                OUR AVENGERS
              </span>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mt-4">
                Meet with our team member
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              What began over coffee-fueled brainstorming sessions has grown
              into a thriving digital agency.
            </p>
            <motion.button
              initial="initial"
              whileHover="hover"
              className="group flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em]"
            >
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-90">
                <Plus size={18} />
              </div>
              <span className="flex overflow-hidden">
                {buttonText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.button>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              // Logic to position cards:
              // First two cards (0, 1) start in columns 2 and 3 (right side)
              // Next cards shift left
              const getGridClass = (i: number) => {
                if (i === 0) return "md:col-start-2"; // First card starts at middle column
                if (i === 1) return "md:col-start-3"; // Second card at right column
                return ""; // Rest follow normal flow
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${getGridClass(index)} bg-white rounded-[40px] p-5 shadow-sm`}
                >
                  <div className="bg-[#d2b48c] rounded-[32px] overflow-hidden aspect-[4/5]">
                    <img
                      src={member.image}
                      className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
                      alt={member.name}
                    />
                  </div>
                  <div className="mt-8 px-2">
                    <h4 className="text-2xl font-bold tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-[10px] font-bold text-gray-400 tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

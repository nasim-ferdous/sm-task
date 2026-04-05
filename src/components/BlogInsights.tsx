"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    category: "WEB3",
    date: "JUN 04, 2025",
    title: "Immersive digital experiences, we offer end-to-end",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Aldan Branding",
      role: "IT Specialist",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    },
  },
  {
    category: "DESIGN",
    date: "JUN 10, 2025",
    title: "Creating a powerhouse of creativity and innovation",
    description:
      "How we turned a small idea into a global digital powerhouse through design.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Sarah Jen",
      role: "UI Designer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    },
  },
  {
    category: "DEVELOPMENT",
    date: "JUL 15, 2025",
    title: "The future of headless commerce in 2026",
    description:
      "Exploring how decoupled architectures are redefining the speed and flexibility of modern e-commerce.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Marcus Thorne",
      role: "Lead Developer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
  },
  {
    category: "MARKETING",
    date: "AUG 02, 2025",
    title: "Why storytelling is your brand's greatest asset",
    description:
      "Data tells, but stories sell. Learn how to craft a narrative that resonates with your core audience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Elena Rodriguez",
      role: "Strategy Director",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
  },
];

export default function BlogInsights() {
  return (
    <section className="py-24 bg-[#fcfcfc] text-black w-full overflow-hidden">
      <div className="max-w-9xl mx-auto px-6">
        {/* Header Section */}
        <div className="border-t border-gray-200 pt-8 mb-20">
          <span className="text-[12px] uppercase tracking-[0.3em] font-medium text-gray-900">
            BLOG & INSIGHTS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
            <div className="hidden md:block md:col-span-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
            >
              Check out my latest tips and behind-the-scenes stories.
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-12 no-scrollbar snap-x">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-0 bg-white rounded-[40px] p-4 flex flex-col snap-center group border border-transparent hover:border-gray-100 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Image with high border radius */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="mt-8 px-4 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest text-gray-400">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium mt-6 leading-tight group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed font-light line-clamp-2">
                  {post.description}
                </p>

                {/* Author & Action */}
                <div className="mt-auto pt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                    <div>
                      <p className="text-sm font-bold tracking-tight">
                        {post.author.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

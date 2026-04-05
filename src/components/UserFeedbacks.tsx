"use client";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "Cristian M. Durant",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?u=cristian",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
  },
  {
    id: 2,
    name: "Nicolas K. Ellington",
    role: "UI Designer",
    avatar: "https://i.pravatar.cc/150?u=nicolas",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
  },
  {
    id: 3,
    name: "Marco L. Caldwell",
    role: "CDO",
    avatar: "https://i.pravatar.cc/150?u=marco",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
  },
];

export default function UserFeedbacks() {
  return (
    <section className="py-24 bg-[#f8f8f8] text-black w-full">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* --- LEFT SIDE: STICKY CONTENT --- */}
        <div className="md:sticky md:top-32 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
              USER FEEDBACKS
            </span>
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
              Accelerating growth, and unlocking.
              <span className="inline-flex items-center gap-1 mx-2">
                <img
                  src="https://i.pravatar.cc/150?u=1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/150?u=2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/150?u=3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt=""
                />
              </span>
              new potential. Let’s build your brand—together.
            </h2>
          </div>

          <button className="group flex items-center gap-4 text-xs uppercase font-semibold tracking-widest">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-90">
              <Plus size={18} />
            </div>
            <span>GET A QUOTE</span>
          </button>
        </div>

        {/* --- RIGHT SIDE: SCROLLABLE CARDS --- */}
        <div className="space-y-6">
          {feedbacks.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-[40px] shadow-sm group border border-transparent hover:border-gray-800 transition-all cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FF9500"
                    className="text-[#FF9500]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-2xl font-medium leading-relaxed mb-12">
                &quot; {item.text} &quot;
              </p>

              {/* Bottom Line */}
              <div className="h-[1px] w-full bg-gray-200 group-hover:bg-gray-800 mb-8" />

              {/* User Meta */}
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <span className="text-gray-500 group-hover:text-gray-400 text-sm">
                    {item.role}
                  </span>
                </div>
                <img
                  src={item.avatar}
                  className="w-14 h-14 rounded-full object-cover filter group-hover:grayscale-0 transition-all"
                  alt={item.name}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

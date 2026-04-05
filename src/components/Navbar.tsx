"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-6 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <div className="text-2xl font-bold italic">FLOKA.</div>
        <div className="hidden md:flex gap-8 font-medium">
          {["Home", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}

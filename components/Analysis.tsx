"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DATA = {
  before: [
    { label: "Annual Organic Traffic", value: "4,454", suffix: "" },
    { label: "Ranking Keywords", value: "12,444", suffix: "" },
    { label: "Return on Investment", value: "144", suffix: "%" },
  ],
  after: [
    { label: "Annual Organic Traffic", value: "10,265", suffix: "" },
    { label: "Ranking Keywords", value: "8,426", suffix: "" },
    { label: "Return on Investment", value: "726", suffix: "%" },
  ],
};

export default function Analysis() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="relative min-h-screen py-10 bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* 1. Added w-[90%] and max-w-6xl to ensure it doesn't exceed 90% width */}
      <div className="relative w-[90%] max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-4"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
              SEO Agency of the Year
            </span>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Expect great things <br /> from Clickable Ads Solution
          </h2>
          
          <p className="text-slate-600 text-lg">
            Believe it because you've seen it. Here are real numbers from just one <br className="hidden md:block" /> successful Victorious partner.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-6 mb-20">
          <span className={`text-sm font-bold transition-colors duration-300 ${!isAfter ? "text-primary" : "text-slate-400"}`}>
            BEFORE SEO
          </span>
          <button
            onClick={() => setIsAfter(!isAfter)}
            className="relative w-16 h-8 bg-slate-100 rounded-full p-1 transition-colors hover:bg-slate-200"
            aria-label="Toggle SEO Stats"
          >
            <motion.div
              animate={{ x: isAfter ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-primary rounded-full shadow-lg"
            />
          </button>
          <span className={`text-sm font-bold transition-colors duration-300 ${isAfter ? "text-primary" : "text-slate-400"}`}>
            AFTER SEO
          </span>
        </div>

        {/* Stats Container with Background Charts */}
        <div className=" w-full mx-auto">
          {/* Stats Card Area */}
          <div className="p-10 md:p-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <AnimatePresence mode="wait">
                {(isAfter ? DATA.after : DATA.before).map((stat, index) => (
                  <motion.div
                    key={`${isAfter}-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <h3 className="text-3xl md:text-4xl font-black text-primary mb-2">
                      {stat.value}{stat.suffix}
                    </h3>
                    <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

          {/* Charts Layer */}
          <div className="hidden lg:block absolute top-1/2 inset-0 pointer-events-none">
            {/* Chart 1 - Adjusted left position for 90% width container */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -top-32 -left-10"
            >
              <Image 
                src="/assets/img/shape/analysis-chart-1.png" 
                alt="Growth Chart Left" 
                width={300} 
                height={300} 
                className="object-contain" 
              />
            </motion.div>
            
            {/* Chart 2 - Adjusted right position for 90% width container */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -top-32 -right-10"
            >
              <Image 
                src="/assets/img/shape/analysis-chart-2.png" 
                alt="Growth Chart Right" 
                width={300} 
                height={300} 
                className="object-contain" 
              />
            </motion.div>
          </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
    </section>
  );
}
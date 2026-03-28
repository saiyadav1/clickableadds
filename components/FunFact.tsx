"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FunFact() {
  return (
    <section className="relative py-24 bg-white overflow-hidden flex justify-center">
      {/* 1. Outer Container limited to 90% width */}
      <div className="w-[90%] max-w-7xl relative">
        
        {/* HEADER SECTION - THEME BG 2 (#131683) */}
        <div className="relative rounded-[50px] overflow-hidden shadow-2xl">
          <div className="relative pt-28 pb-44 px-8 bg-primary">
            
            {/* GRID IMAGE - Ensuring Visibility */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/assets/img/shape/funfact-1.png" 
                alt="grid-texture" 
                fill 
                priority
                className="object-cover opacity-100" 
              />
              {/* Subtle tint to bond the image to the brand color without losing the grid */}
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            {/* Header Content */}
            <div className="relative z-10 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    Selected Projects
                  </span>
                  <div className="w-16 h-[1px] bg-white/40" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  We Believe In Our Success
                </h2>
              </motion.div>
            </div>

            {/* ENLARGED Decorative Floating Shapes */}
            <div className="hidden lg:block pointer-events-none">
              <div className="absolute top-[-20px] left-[-20px] opacity-40">
                <Image 
                    src="/assets/img/shape/funfact-2.png" 
                    alt="" 
                    width={180} 
                    height={180} 
                    className="object-contain"
                />
              </div>
              <div className="absolute bottom-10 right-[-10px] opacity-40">
                <Image 
                    src="/assets/img/shape/funfact-3.png" 
                    alt="" 
                    width={220} 
                    height={220} 
                    className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. STAT BOXES - Combined 80% Width Constraint */}
        <div className="relative -mt-24 z-20 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[80%]">
            
            {/* Box 1: Keywords */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(19,22,131,0.12)] p-12 border border-slate-100 flex flex-col items-center text-center transition-all hover:-translate-y-2"
            >
              <span className="text-primary font-black uppercase tracking-widest text-[11px] mb-6 px-6 py-2 bg-slate-50 rounded-full">
                Keywords
              </span>
              <h5 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-none">
                4.628.319.632
              </h5>
              <div className="flex flex-wrap justify-center gap-4 mt-auto">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 bg-slate-50 px-5 py-3 rounded-2xl">
                  <Image src="/assets/img/shape/funfact-icon-1.png" alt="" width={20} height={20} />
                  62 Countries
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 bg-slate-50 px-5 py-3 rounded-2xl">
                  <Image src="/assets/img/shape/funfact-icon-2.png" alt="" width={20} height={20} />
                  28 Languages
                </div>
              </div>
            </motion.div>

            {/* Box 2: Search Volume */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(19,22,131,0.12)] p-12 border border-slate-100 flex flex-col items-center text-center transition-all hover:-translate-y-2"
            >
              <span className="text-primary font-black uppercase tracking-widest text-[11px] mb-6 px-6 py-2 bg-slate-50 rounded-full">
                Search Volume
              </span>
              <h5 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-none">
                106<span className="text-primary">.9 Billion</span>
              </h5>
              <div className="flex flex-wrap justify-center gap-4 mt-auto">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 bg-slate-50 px-5 py-3 rounded-2xl">
                  <Image src="/assets/img/shape/funfact-icon-3.png" alt="" width={20} height={20} />
                  4+ Billion Keywords
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 bg-slate-50 px-5 py-3 rounded-2xl">
                  <Image src="/assets/img/shape/funfact-icon-4.png" alt="" width={20} height={20} />
                  36TB Data
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
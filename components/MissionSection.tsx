"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section id="our-mission" className="relative py-24 bg-white overflow-hidden flex justify-center">
      
      {/* --- BACKGROUND SHAPE LAYER --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Shape 1: Top Right (The smill triangle/shape) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] opacity-20 hidden lg:block"
        >
          <Image src="/assets/img/shape/smill.png" alt="shape" width={140} height={140} />
        </motion.div>

        {/* Shape 2: Left Middle (Mission Shape 1) */}
        <motion.div 
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[5%] opacity-10 hidden lg:block"
        >
          <Image src="/assets/img/shape/mission-shape-1.png" alt="shape" width={100} height={100} />
        </motion.div>

        {/* Shape 3: Bottom Right (Mission Shape 2) */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[5%] opacity-10 hidden lg:block"
        >
          <Image src="/assets/img/shape/mission-shape-2.png" alt="shape" width={120} height={120} />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="w-[85%] max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* MISSION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div 
              className="relative overflow-hidden rounded-[2.5rem] p-10 shadow-[0_15px_40px_rgba(248,201,193,0.4)] transition-all duration-500 hover:-translate-y-2 border border-white/50 min-h-[340px] flex flex-col justify-center"
              style={{ background: "linear-gradient(147.1deg, #FCF0EE 9.5%, #F8C9C1 87.42%)" }}
            >
              <div className="mb-6 bg-white/70 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white shadow-sm">
                <Image src="/assets/img/shape/about-5-shape-1.svg" alt="Mission Icon" width={28} height={28} />
              </div>

              <h3 className="text-[#05003b] font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight">
                Help businesses of all sizes grow their online presence by delivering 
                <span className="text-[#05003b] block mt-2">effective & transparent marketing solutions.</span> 
              </p>
            </div>
          </motion.div>

          {/* PURPOSE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group md:mt-16 relative" 
          >
            <div 
              className="relative overflow-hidden rounded-[2.5rem] p-10 shadow-[0_15px_40px_rgba(125,218,179,0.3)] transition-all duration-500 hover:-translate-y-2 border border-white/50 min-h-[340px] flex flex-col justify-center"
              style={{ background: "linear-gradient(160.77deg, #D8FFEF 9.28%, #7DDAB3 89.34%)" }}
            >
              <div className="mb-6 bg-white/70 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white shadow-sm">
                <Image src="/assets/img/shape/about-5-shape-2.svg" alt="Purpose Icon" width={28} height={28} />
              </div>

              <h3 className="text-[#05003b] font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                Our Purpose
              </h3>
              <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight">
                Thrive in the digital world by building 
                <span className="text-[#05003b] block mt-2">strong, visible, and results-driven online brands.</span> 
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
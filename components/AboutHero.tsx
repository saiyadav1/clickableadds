"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      
      {/* --- BACKGROUND SHAPE LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
        
        {/* Geometric Background Shapes (Static) */}
        <div className="absolute top-[20%] left-[5%] opacity-10">
          <Image src="/assets/img/shape/choose-shape-1.png" alt="" width={200} height={200} />
        </div>
        <div className="absolute bottom-[15%] left-[45%] opacity-10 rotate-45">
          <Image src="/assets/img/shape/choose-shape-2.png" alt="" width={150} height={150} />
        </div>
      </div>

      <div className="w-[90%] max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE: The Layered Image Composition */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              
              {/* BACK SHAPE: Moving "blob" behind the photo */}
              <motion.div 
                animate={{ 
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-primary/5 -m-10 z-0"
              />

              {/* MAIN IMAGE: Premium Frame */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden border-[16px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src="/assets/img/about/about-inner-1.jpg"
                  alt="Agency Team"
                  width={600}
                  height={750}
                  priority
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>

              {/* FLOATING BADGE: The "Experience" Box */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 bg-[#05003b] text-white p-10 rounded-[2.5rem] shadow-2xl"
              >
                <div className="relative">
                  <span className="text-5xl font-black block mb-1">12<span className="text-slate-500">+</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block whitespace-nowrap">
                    Years of Excellence
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT SIDE: Bold Editorial Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-12 bg-primary" />
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                    The Agency Mission
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-[#05003b] leading-[1] mb-10 tracking-tighter">
                  Working Hard <br />
                  To Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 italic">SEO Easy.</span>
                </h1>

                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-slate-700 font-semibold leading-relaxed border-l-4 border-primary pl-6">
                    Our mission is to help businesses grow their online 
                    presence by delivering transparent, results-driven solutions.
                  </p>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    We specialize in building strong, visible, and data-backed online 
                    brands that thrive in an ever-changing digital world.
                  </p>
                </div>

                {/* Buttons & CTA */}
                <div className="flex flex-wrap items-center gap-8 mt-12">
                  <Link href="/contact" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-black/80 shadow-[0_20px_40px_rgba(5,0,59,0.2)] active:scale-95">
                    Start Your Journey
                  </Link>
                  <Link href="/services" className="group flex items-center gap-3 text-primary font-black text-sm uppercase tracking-widest">
                    Our Expertise
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
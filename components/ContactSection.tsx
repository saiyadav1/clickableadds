"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#05003b] overflow-hidden py-12 md:py-0">
      
      {/* 1. DEPTH & LIGHTING */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')]" />
      </div>

      <div className="w-[90%] max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Branding, Info & Socials */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Available for new projects
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Let's build <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  the future.
                </span>
              </h2>
              
              <p className="text-slate-300/70 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
                Have a vision? We have the expertise. Reach out and let's turn your idea into a digital reality.
              </p>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-t border-white/10 pt-8">
                <div className="flex flex-col group">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Email us</span>
                  <a href="mailto:hello@agency.com" className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    hello@agency.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Office</span>
                  <span className="text-lg md:text-xl font-bold text-white">London, UK</span>
                </div>
              </div>

              {/* SOCIAL MEDIA LINKS */}
              <div className="flex items-center gap-4 mt-8">
                {[
                  { Icon: FaFacebookF, link: "#" },
                  { Icon: FaTwitter, link: "#" },
                  { Icon: FaLinkedinIn, link: "#" },
                  { Icon: FaInstagram, link: "#" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Glass Form & Tucked Shapes */}
          <div className="relative">
            
            {/* BACKGROUND SHAPES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, rotate: -20 }}
                whileInView={{ opacity: 0.4, rotate: 0 }}
                className="absolute -top-12 -left-12"
              >
                <Image 
                  src="/assets/img/shape/form-shape-1.png" 
                  alt="" 
                  width={180} 
                  height={180} 
                  className="brightness-200 grayscale"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, rotate: 20 }}
                whileInView={{ opacity: 0.3, rotate: 0 }}
                className="absolute -bottom-10 -right-10"
              >
                <Image 
                  src="/assets/img/shape/form-shape-2.png" 
                  alt="" 
                  width={150} 
                  height={150} 
                  className="brightness-200 grayscale"
                />
              </motion.div>
            </div>

            {/* GLASS CARD FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white/[0.04] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 transition-all text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">Email</label>
                    <input type="email" placeholder="john@agency.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">Message</label>
                  <textarea rows={3} placeholder="Project details..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 transition-all resize-none text-sm" />
                </div>
                
                <button className="w-full group bg-blue-600 hover:bg-blue-500 text-white py-4.5 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] h-14 flex items-center justify-center gap-3">
                  Start Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
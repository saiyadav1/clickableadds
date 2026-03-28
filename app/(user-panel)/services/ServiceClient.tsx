"use client";

import servicesData from "@/data/services.json";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServiceClient() {
  return (
    <main className="relative min-h-screen bg-[#FAFAFB] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-40 pb-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[2px] w-12 bg-primary rounded-full" />
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">What We Do</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-[#05003b] tracking-tighter leading-[1.1] mb-8"
          >
            Digital solutions for the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Global Elite.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl"
          >
            We transform complex business challenges into elegant digital ecosystems. 
            Explore our specialized services designed to scale your brand.
          </motion.p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-[3rem] p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Header: Icon & Slug Arrow */}
              <div className="flex justify-between items-start mb-10">
                <div className={`w-20 h-20 rounded-[1.8rem] ${service.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={40} 
                    height={40} 
                    className="brightness-110"
                  />
                </div>
                <Link 
                  href={`/services/${service.slug}`}
                  className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-black text-[#05003b] group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.shortDesc}
                </p>

                {/* Micro Features list (Quick Preview) */}
                <ul className="pt-4 space-y-2">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                      <CheckCircle2 size={14} className={service.color} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Link Bottom */}
              <div className="mt-10 pt-6 border-t border-slate-50">
                <Link 
                  href={`/services/${service.slug}`}
                  className={`text-xs font-black uppercase tracking-[0.2em] ${service.color} flex items-center gap-2 group/link`}
                >
                  Deep Dive Analysis 
                  <span className="w-0 h-[2px] bg-current transition-all duration-300 group-hover/link:w-8" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-32 p-12 md:p-20 bg-[#05003b] rounded-[4rem] relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Can't find what <br/> you're looking for?</h2>
            <p className="text-slate-200/60 text-lg leading-relaxed">
              We specialize in custom engineering. Tell us about your unique challenge and we'll build the solution.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-slate-500 transition-all shadow-2xl shadow-primary/20"
            >
              Request Custom Strategy
            </Link>
          </div>
          {/* Background element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-slate-400/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </main>
  );
}
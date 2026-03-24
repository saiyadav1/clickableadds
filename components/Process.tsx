"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  {
    id: "01",
    title: "Strategic Discovery & Creative Research",
    subtitle: "Phase One",
    gradient: "from-slate-600 to-indigo-600",
    glow: "group-hover:shadow-slate-500/40",
    isDown: false,
  },
  {
    id: "02",
    title: "AI-Driven Semantic Market Analysis",
    subtitle: "Phase Two",
    gradient: "from-indigo-600 to-purple-600",
    glow: "group-hover:shadow-indigo-500/40",
    isDown: true, // Offset down
  },
  {
    id: "03",
    title: "High-Impact Performance slateprint",
    subtitle: "Phase Three",
    gradient: "from-purple-600 to-pink-600",
    glow: "group-hover:shadow-purple-500/40",
    isDown: false,
  },
  {
    id: "04",
    title: "Scalable Audience & Revenue Growth",
    subtitle: "Phase Four",
    gradient: "from-pink-600 to-rose-600",
    glow: "group-hover:shadow-rose-500/40",
    isDown: true, // Offset down
  },
];

export default function Process() {
  return (
    <section className="relative py-16 bg-[#FAFAFB] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-slate-600" />
              <span className="text-slate-600 text-[11px] font-black uppercase tracking-[0.4em]">How do we do it</span>
              <span className="h-[1px] w-8 bg-slate-600" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05003b] tracking-tighter leading-tight">
              A precise roadmap to <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-purple-600">
                Digital Excellence
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Process Flow Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Rocket */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute -top-24 right-0 z-20 pointer-events-none"
          >
            <div className="relative w-24 h-24 opacity-80">
               <Image src="/assets/img/shape/process-rocket.png" alt="rocket" fill className="object-contain" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`group relative flex flex-col items-center transition-all duration-700 ${
                  step.isDown ? "lg:mt-20" : "lg:mt-0"
                }`}
              >
                {/* SVG Connector Line (Desktop Only) */}
                {i !== STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[40px] z-0">
                    <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" className="overflow-visible">
                      <path
                        d={!step.isDown ? "M 0 20 Q 50 60, 100 20" : "M 0 20 Q 50 -20, 100 20"}
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        className="animate-dash-flow"
                      />
                    </svg>
                  </div>
                )}

                {/* Step Node */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`relative w-24 h-24 mb-10 flex items-center justify-center rounded-[2.2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white/50 transition-all duration-500 group-hover:-translate-y-3 ${step.glow} group-hover:shadow-2xl`}>
                    
                    {/* Inner Number Box */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-black shadow-inner transform transition-transform duration-700 group-hover:rotate-[360deg]`}>
                      {step.id}
                    </div>

                    {/* Background Soft Glow */}
                    <div className={`absolute inset-0 rounded-[2.2rem] bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>

                  {/* Text Content */}
                  <div className="text-center px-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500/60 mb-3 block">
                      {step.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-[#05003b] leading-tight group-hover:text-slate-600 transition-colors duration-300">
                      {step.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash-flow {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }
        .animate-dash-flow {
          animation: dash-flow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Trophy, ShieldCheck, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


type Service = {
  id: number;
  slug: string;
  title: string;
  icon: string;
  ogImage?: string; 
  color: string;
  bg: string;
  shadow: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  stats: {
    label: string;
    value: string;
  };
};

type Props = {
  service: Service;
};

export default function SingleService({ service }: Props) {
  return (
    <main className="bg-[#FAFAFB] min-h-screen overflow-hidden">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-40 pb-24 bg-[#05003b] overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-slate-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="flex items-center gap-4 mb-8">
                <Link href="/" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Service Detail</span>
              </nav>

              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === service.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-indigo-400" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-xl text-slate-100/60 max-w-xl leading-relaxed mb-10 font-medium">
                {service.longDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                href={"/contact"}
                className="bg-slate-600 hover:bg-slate-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-slate-600/30 transition-all flex items-center gap-3 active:scale-95">
                  Book a Strategy Call <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Visual Icon / Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className={`w-80 h-80 rounded-[4rem] bg-purple-50/60 backdrop-blur-3xl border border-white/10 flex items-center justify-center relative`}>
                <Image src={service.icon} alt={service.title} width={180} height={180} className="z-10 brightness-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
                {/* Floating Orbitals */}
                <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE "BENTO" FEATURE GRID --- */}
      <section className="py-32 relative">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-4">The Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#05003b] tracking-tighter">Everything you need <br/> to dominate your market.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Feature 1: Large Box */}
            <div className="md:col-span-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-slate-200 transition-all">
              <div className="space-y-6">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center ${service.color}`}>
                  <Rocket size={28} />
                </div>
                <h4 className="text-3xl font-black text-slate-900 leading-tight">Elite Technical <br/> Implementation</h4>
                <p className="text-slate-500 max-w-md text-lg leading-relaxed">
                  We don't just plan; we execute. Our team handles the heavy lifting, ensuring every line of code and every pixel is optimized for performance.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                {service.features.map((f, i) => (
                  <span key={i} className="px-5 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 border border-slate-100">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 2: Stats Box */}
            <div className={`md:col-span-4 ${service.bg} p-12 rounded-[3rem] flex flex-col items-center justify-center text-center space-y-4`}>
                <p className={`text-xs font-black uppercase tracking-widest ${service.color}`}>{service.stats.label}</p>
                <h5 className={`text-7xl font-black ${service.color} tracking-tighter`}>{service.stats.value}</h5>
                <p className="text-slate-600 font-bold">Proven Industry Standard</p>
            </div>

            {/* Bottom Row */}
            <div className="md:col-span-4 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
               <ShieldCheck className="text-slate-600 mb-6" size={40} />
               <h4 className="text-xl font-black text-slate-900 mb-3">Security First</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Enterprise-grade protection for all your digital assets and user data.</p>
            </div>
            <div className="md:col-span-4 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
               <Zap className="text-orange-500 mb-6" size={40} />
               <h4 className="text-xl font-black text-slate-900 mb-3">Lightning Fast</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Optimized for speed. We ensure your project loads in under 1 second.</p>
            </div>
            <div className="md:col-span-4 bg-[#05003b] p-10 rounded-[3rem] text-white overflow-hidden relative group">
               <Trophy className="text-slate-400 mb-6 relative z-10" size={40} />
               <h4 className="text-xl font-black mb-3 relative z-10">Market Leader</h4>
               <p className="text-sm text-slate-200/60 leading-relaxed relative z-10">We help you outpace competitors with data-backed strategies.</p>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE DELIVERY PROCESS --- */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">The path to excellence.</h3>
        </div>

        <div className="w-[90%] max-w-5xl mx-auto">
          <div className="relative space-y-24">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-slate-100 -translate-x-1/2" />

            {[
              { title: "Discovery & slateprint", desc: "We map out the entire project lifecycle based on your specific growth goals." },
              { title: "Design & Development", desc: "Our elite team builds your solution using cutting-edge tech stacks." },
              { title: "Launch & Optimization", desc: "We deploy and continuously monitor to ensure peak performance." }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center justify-between flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-white border-4 border-[#05003b] rounded-full -translate-x-1/2 z-10 flex items-center justify-center font-black text-xs text-[#05003b]">
                  {idx + 1}
                </div>
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`p-8 rounded-[2.5rem] bg-[#FAFAFB] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <h4 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
   <section className="relative py-40 bg-white overflow-hidden">
        {/* Decorative Path Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-slate-100 via-slate-200 to-transparent" />
        
        <div className="w-[90%] max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-600"></span>
               </span>
               The Next Chapter
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-[#05003b] tracking-tighter leading-[0.95] mb-12">
              Ready to start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-600 italic">
                new journey?
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Every great success story begins with a single conversation. Let’s map out your route to digital dominance together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact" 
                className="group relative bg-[#05003b] text-white px-12 py-6 rounded-3xl font-black text-lg shadow-2xl shadow-slate-900/20 hover:bg-slate-600 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4"
              >
                Begin Your Journey
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                  <ArrowRight size={20} />
                </div>
              </Link>
              
              {/* <Link 
                href="/portfolio" 
                className="text-slate-400 hover:text-[#05003b] font-bold text-sm uppercase tracking-widest transition-colors"
              >
                View our work
              </Link> */}
            </div>
          </motion.div>
        </div>

        {/* Floating background element */}
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-slate-50 rounded-full blur-[100px] -z-10" />
      </section>
    </main>
  );
}
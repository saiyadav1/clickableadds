"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CHOOSE_ITEMS = [
  {
    id: 1,
    title: "Experts Consulting",
    icon: "/assets/img/icon/choose-icon-1.png",
    link: "/about",
  },
  {
    id: 2,
    title: "Competitor Analysis",
    icon: "/assets/img/icon/choose-icon-2.png",
    link: "/about",
  },
  {
    id: 3,
    title: "Responsive Support",
    icon: "/assets/img/icon/choose-icon-3.png",
    link: "/about",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-10 bg-white overflow-hidden flex justify-center">
      <div className="w-[90%] max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Image Section */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-[450px]">
              
              {/* LAYER 0: STATIC SHAPES (Tucked behind) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-4 -left-4 hidden md:block opacity-30">
                  <Image 
                    src="/assets/img/shape/choose-shape-1.png" 
                    alt="" 
                    width={180} 
                    height={180} 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-30">
                  <Image 
                    src="/assets/img/shape/choose-shape-2.png" 
                    alt="" 
                    width={160} 
                    height={160} 
                  />
                </div>
              </div>

              {/* LAYER 10: ANIMATED OVAL BANNER */}
              <motion.div 
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 50% 60% 50%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "40% 60% 70% 30% / 40% 50% 60% 50%"
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full overflow-hidden border-[14px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-slate-100"
              >
                <Image
                  src="/assets/img/banner/choose-2.png"
                  alt="Why Choose Us"
                  fill
                  priority
                  className="object-cover scale-110"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Content Section */}
          <div className="w-full lg:w-7/12">
            <div className="tpchoose-wrapper">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                    Why Choose us
                  </span>
                  <div className="w-12 h-[1px] bg-blue-600/30" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                  What makes Us <br /> Different from Others
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                  We provide tailored solutions that ensure your business stays ahead in a competitive digital landscape.
                </p>
              </div>

              {/* CARDS GRID: Added border and subtle shadow for visibility */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[95%]">
                {CHOOSE_ITEMS.map((item) => (
                  <Link 
                    key={item.id} 
                    href={item.link}
                    className="group relative bg-slate-50/50 p-6 rounded-[2rem] border border-slate-200 transition-all duration-500 hover:bg-[#131683] hover:border-[#131683] hover:-translate-y-2 shadow-sm hover:shadow-2xl"
                  >
                    <div className="mb-5 w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors border border-slate-100 shadow-sm">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={24} 
                        height={24} 
                        className="group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    </div>
                    <span className="text-[11px] font-black text-slate-800 group-hover:text-white transition-colors leading-tight uppercase tracking-tight block">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
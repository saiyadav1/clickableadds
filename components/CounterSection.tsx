"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

// Reusable Counter Component
const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const COUNTER_DATA = [
  {
    id: 1,
    count: 25,
    title: "Years Of",
    subTitle: "Experience",
    shape: "/assets/img/shape/counter-shape-1.png",
  },
  {
    id: 2,
    count: 340,
    title: "Project",
    subTitle: "Complete",
    shape: "/assets/img/shape/counter-shape-2.png",
  },
  {
    id: 3,
    count: 25,
    title: "Satisfied Clients On",
    subTitle: "24 Countries",
    shape: "/assets/img/shape/counter-shape-3.png",
  },
];

export default function CounterSection() {
  return (
    <section className="py-10 bg-white flex justify-center">
      <div className="w-[90%] max-w-7xl">
        <div className="relative border border-slate-100 rounded-[3rem] p-12 md:p-20 bg-slate-50/30 overflow-hidden">
          
          {/* Subtle Background Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
            {COUNTER_DATA.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 group"
              >
                {/* Shape & Icon Area */}
                <div className="relative">
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={item.shape} 
                      alt="shape" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-4xl md:text-5xl font-black text-[#05003b] tracking-tighter">
                    <CountUp end={item.count} />
                    <FaPlus className="text-slate-600 text-2xl ml-1" />
                  </div>
                  
                  <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden sm:block" />

                  <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    {item.title} <br />
                    <span className="text-[#05003b]">{item.subTitle}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
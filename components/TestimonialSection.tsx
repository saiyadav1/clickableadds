"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Nathalie Grossman",
    role: "CEO of Advisor Fuel",
    image: "/assets/img/team/testimonial-1.png",
    content:
      "The results have been spectacular. Their team didn't just deliver a service; they built a strategic growth engine for our company.",
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Operations Director",
    image: "/assets/img/team/testimonial-2.png",
    content:
      "Working with them transformed our digital presence. We've seen a 40% increase in lead conversion since implementation.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Product Manager",
    image: "/assets/img/team/testimonial-1.png",
    content:
      "They help us succeed by creating brand identities and digital experiences that communicate clearly and achieve goals.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0B0F19] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-[90%] max-w-5xl mx-auto px-6 py-20 flex flex-col gap-12 md:gap-16">
        
        {/* 1. Header with ample Top Padding focus */}
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-6">
            <Image
              src="/assets/img/team/test-avatar-bg-1.png"
              alt="Decoration"
              fill
              className="object-contain opacity-60"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Client love us & <span className="text-slate-500">we love them</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-slate-700" />
            <p className="text-slate-400 text-sm md:text-base font-medium">
              Trusted by over 4,000 forward-thinking clients
            </p>
            <div className="h-px w-8 bg-slate-700" />
          </div>
        </div>

        {/* 2. Compact Slider Container */}
        <div className="relative max-w-4xl mx-auto w-full">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".prev-testimonial",
              nextEl: ".next-testimonial",
            }}
            className="!overflow-visible"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center py-2">
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center gap-10 md:gap-14 shadow-2xl">
                    
                    {/* Compact Profile */}
                    <div className="relative w-36 h-36 md:w-48 md:h-48 shrink-0">
                      <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20" />
                      <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-primary h-10 w-10 rounded-full flex items-center justify-center shadow-lg border-2 border-[#0B0F19]">
                        <svg width="14" height="10" viewBox="0 0 40 30" fill="white">
                          <path d="M24.23 29.04c3.64-2.14 6.53-5.08 8.68-8.82C35.06 16.48 36.14 12.62 36.14 8.6V0h-9.03v8.34c0 1.82.59 3.32 1.77 4.49 1.18 1.18 2.84 1.77 4.98 1.77-1.07 3.64-3.57 7.5-7.5 11.58zM0 8.6V0h9.03v8.34c0 1.82-.59 3.32-1.77 4.49-1.18 1.18-2.84 1.77-4.98 1.77 1.07 3.64 3.57 7.5 7.5 11.58L2.99 29.04C-.65 26.9-3.54 23.96-5.69 20.22-7.84 16.48-8.92 12.62-8.92 8.6z" />
                        </svg>
                      </div>
                    </div>

                    {/* Feedback Text */}
                    <div className="text-center md:text-left">
                      <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed mb-8 italic opacity-90">
                        "{item.content}"
                      </p>

                      <div className="flex flex-col gap-1">
                        <h5 className="text-white font-bold text-xl tracking-tight">
                          {item.name}
                        </h5>
                        <span className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Symmetrical Floating Navigation */}
          <div className="absolute -bottom-14 md:bottom-1/2 md:-translate-y-1/2 left-0 right-0 md:-left-20 md:-right-20 flex md:flex-col justify-center gap-6 md:gap-4">
            <button className="prev-testimonial w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all duration-300 backdrop-blur-md">
              <span className="text-sm">←</span>
            </button>
            <button className="next-testimonial w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all duration-300 backdrop-blur-md">
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const CASE_STUDIES = [
  {
    id: 1,
    image: "/assets/img/services/case-1.jpg",
    tags: ["SEO Analysis", "Marketing"],
    title: "Online Media Management",
    link: "/portfolio-details",
  },
  {
    id: 2,
    image: "/assets/img/services/case-2.jpg",
    tags: ["SEO Analysis", "Marketing"],
    title: "Twice Profit Than Before",
    link: "/portfolio-details",
  },
  {
    id: 3,
    image: "/assets/img/services/case-3.jpg",
    tags: ["SEO Analysis", "Marketing"],
    title: "Social Engagement",
    link: "/portfolio-details",
  },
  {
    id: 4,
    image: "/assets/img/services/case-4.jpg",
    tags: ["SEO Analysis", "Marketing"],
    title: "Media Management",
    link: "/portfolio-details",
  },
];

export default function CaseStudies() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-14">
        <div className="flex flex-wrap items-end gap-y-6">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <span className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-600">
              Featured Projects
              <span className="h-[2px] w-12 bg-slate-600/20" />
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our Case Studies
            </h2>
          </div>

          {/* Manual Navigation Buttons using swiperInstance */}
          <div className="hidden md:flex w-full md:w-1/3 lg:w-1/2 justify-end gap-3">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 hover:bg-slate-600 hover:text-white"
            >
              ←
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 hover:bg-slate-600 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4">
        <Swiper
          modules={[Navigation, FreeMode]}
          onSwiper={setSwiperInstance} // Capture the instance to control navigation
          loop={true}
          speed={900}
          grabCursor={true}
          freeMode={{
            enabled: true,
            sticky: true,
            momentum: true,
            momentumRatio: 0.85,
          }}
          slidesPerView={1.1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3.2 },
          }}
          className="case-swiper !overflow-visible"
        >
          {CASE_STUDIES.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative h-[300px] md:h-[380px] overflow-hidden rounded-[2rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/60" />
                <div className="absolute bottom-0 z-10 p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
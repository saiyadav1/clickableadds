"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Mail, BarChart3 } from "lucide-react";

export default function Hero() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Request sent!");
        form.reset();
      } else {
        alert("Failed to send");
      }
    } catch (err) {
      alert("Error occurred");
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8faff] pt-32 pb-20 lg:pt-48 lg:pb-64">
      {/* Background Image/Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('/assets/img/banner/banner-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-6"
            >
              <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
                Welcome To Clickable Ads Solutions
              </span>
              <div className="w-24 h-1 bg-primary rounded-full relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute inset-0 bg-primary rounded-full"
                />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              SEO Marketing <br className="hidden md:block" /> & Agency.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Ensuring the best return on investment for your bespoke SEO
              Campaign requirement.
            </motion.p>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-3xl mx-auto relative z-30"
            >
              <form
              onSubmit={handleSubmit}
                className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl border border-blue-50 
              flex flex-col md:flex-row items-center gap-2"
              >
                <div className="relative w-full flex-1 group">
                  <Globe
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder="https://yoursite.com"
                    className="w-full pl-12 pr-4 py-4 rounded-full outline-none focus:bg-slate-50"
                  />
                </div>
                <div className="hidden md:block w-px h-8 bg-slate-100" />
                <div className="relative w-full flex-1 group">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@domain.com"
                    className="w-full pl-12 pr-4 py-4 rounded-full outline-none focus:bg-slate-50"
                  />
                </div>
                <button type="submit" className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl md:rounded-full font-bold hover:bg-[#000] shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <BarChart3 size={18} /> Analyze Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* RE-POSITIONED DECORATIVE ELEMENTS */}

      {/* 1. Archer - CENTERED AT BOTTOM */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.15 }} // Subtle opacity so it doesn't distract from text
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <Image
          src="/assets/img/shape/banner-archer.png"
          alt="archer"
          width={600}
          height={600}
          className="object-contain"
        />
      </motion.div>

      {/* 2. Megaphone - MOVED TO RIGHT AND BIGGER */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden xl:block absolute top-1/3 right-10 z-10 pointer-events-none"
      >
        <Image
          src="/assets/img/shape/banner-megaphone.png"
          alt="megaphone"
          width={220} // Increased size
          height={220}
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* 3. Dots and Plus Signs - SCATTERED */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-20 opacity-50"
        >
          <Image
            src="/assets/img/shape/banner-plus.png"
            alt="plus"
            width={40}
            height={40}
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 opacity-30"
        >
          <Image
            src="/assets/img/shape/banner-dots.png"
            alt="dots"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
    </section>
  );
}

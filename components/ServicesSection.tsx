"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getServices } from "@/data/services";
import servicesData from "@/data/services.json";

export default function ServicesSection() {
  //const [servicesData,setServicesData] = useState<any[]>([]);

  // useEffect(() => {
  //   getServices().then((data)=>{
  //     setServicesData(data);
  //   }).catch((error)=>{
  //     console.error("Error fetching services data:", error);
  //   })
  // }, []);

  return (
    <section className="relative bg-[#F8FAFC] py-10 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="relative mx-auto w-[90%] max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Future-proof digital solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              built for growth
            </span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-medium">
            We don’t just deliver services — we create scalable digital
            ecosystems that help brands grow faster and smarter.
          </p>
        </div>

        {/* Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-[2.5rem] border border-white bg-white/70 backdrop-blur-md p-10 transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${service.shadow} hover:shadow-2xl`}
            >
              <div
                className={`relative mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${service.bg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={36}
                  height={36}
                  className="z-10 brightness-110"
                />
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 mb-10 leading-[1.6] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                Elevate your brand with expertly crafted{" "}
                <span className="font-semibold text-slate-600">{service.title.toLowerCase()}</span> solutions.
              </p>
              <Link
                href={`/services/${service.slug}`}
                className={`group/btn inline-flex items-center gap-2 text-sm font-bold tracking-tight ${service.color}`}
              >
                <span className="relative py-1">
                  Explore Service
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover/btn:w-full" />
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover/btn:bg-current group-hover/btn:text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-[2.5rem] border border-white bg-white/70 backdrop-blur-md p-10 transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${service.shadow} hover:shadow-2xl`}
            >
              <div
                className={`relative mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${service.bg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={36}
                  height={36}
                  className="z-10 brightness-110"
                />
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 mb-10 leading-[1.6] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                Elevate your brand with expertly crafted{" "}
                <span className="font-semibold text-slate-600">
                  {service.title.toLowerCase()}
                </span>{" "}
                solutions.
              </p>
              <Link
                href={`/services/${service.slug}`}
                className={`group/btn inline-flex items-center gap-2 text-sm font-bold tracking-tight ${service.color}`}
              >
                <span className="relative py-1">
                  Explore Service
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover/btn:w-full" />
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover/btn:bg-current group-hover/btn:text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

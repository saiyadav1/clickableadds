"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Train } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 h-[450px] relative rounded-[3rem] overflow-hidden shadow-2xl group">
        
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-slate-600/40">
                  <MapPin className="text-white" size={32} />
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Interactive Map Loading...</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05003b]/20 to-transparent pointer-events-none" />
          </div>

          <div className="lg:col-span-5 space-y-8 lg:pl-10">
            <div>
              <h3 className="text-3xl font-black text-[#05003b] mb-4">Visit the Studio</h3>
              <p className="text-slate-500 leading-relaxed">
                Our headquarters is located in the heart of the digital district. Stop by for a coffee and let's discuss your next big project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="text-slate-600" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Address</h5>
                  <p className="text-slate-500 text-sm">H.No 10-838/5, Netaji Nagar, Nagaram,<br /> Hyderabad-500083, Telangana India.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=123+Digital+Ave+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#05003b] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-600 transition-all"
            >
              Start Navigation
              <Navigation size={18} />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
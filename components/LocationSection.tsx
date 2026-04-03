"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Train } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Map/Visual Side */}
          <div className="lg:col-span-7 h-[450px] relative rounded-[3rem] overflow-hidden shadow-2xl group">
            <iframe
              title="Clickable Ads Solutions Location"
              src="https://www.google.com/maps?q=Clickable+Ads+Solutions,+H+No+10-838/5,+Rd+Number+1,+Nethaji+Nagar,+Nagaram,+Secunderabad,+Telangana+500083&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05003b]/20 to-transparent pointer-events-none" />
          </div>

          {/* Right: Navigation Details */}
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
                  <h5 className="font-bold text-slate-900">Office Address</h5>
                  <p className="text-slate-500 text-sm">H.No 10-838/5, Netaji Nagar, Nagaram, Hyderabad-500083, Telangana India.</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Train className="text-slate-600" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Public Transit</h5>
                  <p className="text-slate-500 text-sm">2 min walk from Central Tech Station<br />Lines A, C, and E</p>
                </div>
              </div> */}
            </div>

            <motion.a 
              href="https://www.google.com/maps/search/?api=1&query=Clickable+Ads+Solutions,+H+No+10-838/5,+Rd+Number+1,+Nethaji+Nagar,+Nagaram,+Secunderabad,+Telangana+500083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#05003b] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-primary transition-all"
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
"use client";

import LocationSection from "@/components/LocationSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";


const socials = [
  { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61580102745219" },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/clickable-ads-solutions/about/?viewAsMember=true" },
  { name: "Instagram", link: "https://www.instagram.com/clickable_ads" },
];

export default function ContactClient() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contactusScreen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen bg-[#FAFAFB] overflow-hidden">
      {/* Background Aesthetic Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="w-[90%] max-w-7xl mx-auto pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE: Content & Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-slate-600 rounded-full" />
                <span className="text-slate-600 font-black uppercase tracking-[0.3em] text-[10px]">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-[#05003b] tracking-tighter leading-[1.1] mb-8">
                Let’s build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-600">
                  future together.
                </span>
              </h1>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                Have a bold idea or a complex challenge? We’re here to help you
                navigate the digital landscape with elite precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Email us
                </h4>
                <a
                  href="mailto:eesharsolutions@gmail.com"
                  className="text-lg font-bold text-[#05003b] hover:text-slate-600 transition-colors"
                >
                  eesharsolutions@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Call us</h4>
                <a href="tel:+919000143478" className="text-lg font-bold text-[#05003b] hover:underline" >+91-90001 43478</a>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Headquarters
                </h4>
                <p className="text-lg font-bold text-[#05003b]">
                  Hyderabad, Telangana India.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Social
                </h4>
                <div className="flex gap-4 pt-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-600 hover:underline"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-white/50 relative"
          >
            {success ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>

                <h3 className="text-2xl font-bold text-[#05003b]">
                  Message Sent!
                </h3>

                <p className="text-slate-500 max-w-sm">
                  Thanks for reaching out. We’ll contact you shortly.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-3 bg-slate-900 text-white rounded-xl"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 text-slate-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 text-slate-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-slate-900">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 transition-all appearance-none">
                    <option>SEO Strategy</option>
                    <option>Marketing Campaign</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-slate-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-[#05003b] text-white font-bold py-5 rounded-2xl transition-all hover:bg-slate-600 flex items-center justify-center gap-3 shadow-xl hover:shadow-slate-900/20 active:scale-[0.98]">
                  {loading ? "Sending..." : "Send Message"}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <LocationSection />
    </main>
  );
}

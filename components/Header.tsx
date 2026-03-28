"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, ChevronRight } from "lucide-react";

// Import your dynamic services data
import servicesData from "@/data/services.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      dropdown: servicesData.map((service) => ({
        label: service.title,
        href: `/services/${service.slug}`,
      })),
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          menuOpen ? "z-[130] bg-white" : "z-[100]"
        } ${
          scrolled && !menuOpen
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="relative z-[150]"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/assets/img/logo/logo.png"
                alt="Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-2 rounded-full border border-gray-100 bg-white/80 p-1.5 shadow-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label} className="relative group">
                    {!item.dropdown ? (
                      <Link
                        href={item.href}
                        className="px-5 py-2 text-sm font-bold text-slate-700 hover:text-primary transition block"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="relative">
                        <button className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-700 group-hover:text-primary transition">
                          {item.label}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        
                        <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                          <ul className="w-72 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 overflow-hidden">
                            {item.dropdown.slice(0, 6).map((sub) => (
                              <li key={sub.label} className="group/item">
                                <Link
                                  href={sub.href}
                                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-primary rounded-xl transition"
                                >
                                  {sub.label}
                                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                </Link>
                              </li>
                            ))}
                            {/* EXPLORE ALL BUTTON (Desktop Dropdown) */}
                            <li className="mt-1 pt-1 border-t border-slate-50">
                              <Link
                                href="/services"
                                className="flex items-center justify-between px-4 py-3 text-xs font-black uppercase tracking-wider text-white bg-primary rounded-xl hover:opacity-90 transition"
                              >
                                Explore All Services
                                <ChevronRight size={14} />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CONTROLS */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:block px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:opacity-90 transition"
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden relative z-[150] w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 active:scale-95 transition-transform"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-white flex flex-col pt-28 pb-10 px-8 xl:hidden"
          >
            <nav className="flex flex-col space-y-2 overflow-y-auto custom-scrollbar">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-slate-50 last:border-0">
                  {!item.dropdown ? (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-4 text-2xl font-bold text-slate-800"
                    >
                      {item.label}
                      <ChevronRight size={20} className="text-slate-300" />
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between py-4 text-2xl font-bold text-slate-800"
                      >
                        {item.label}
                        <ChevronDown 
                          size={24} 
                          className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-slate-50 rounded-2xl mb-4 overflow-hidden"
                          >
                            {item.dropdown.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block px-6 py-4 text-slate-600 font-semibold border-b border-white last:border-0"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                            {/* EXPLORE ALL BUTTON (Mobile Accordion) */}
                            <li>
                              <Link
                                href="/services"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between px-6 py-4 text-primary font-bold bg-primary/5"
                              >
                                Explore All Services
                                <ArrowRight size={18} />
                              </Link>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-lg shadow-primary/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
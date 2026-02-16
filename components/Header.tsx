"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Plus, Minus, ArrowRight } from "lucide-react";

// Import your dynamic services data
import servicesData from "@/data/services.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Define Nav Items with dynamic services injected
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

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* --- LOGO --- */}
            <Link
              href="/"
              className="relative z-[110] flex items-center shrink-0"
            >
              <Image
                src="/assets/img/logo/logo.png"
                alt="Logo"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-2 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm p-1.5 shadow-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label} className="relative group">
                    {!item.dropdown ? (
                      <Link
                        href={item.href}
                        className="px-6 py-2.5 text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-all rounded-full hover:bg-blue-50/50"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="relative">
                        <button className="flex items-center gap-1.5 px-6 py-2.5 text-[14px] font-bold text-slate-700 group-hover:text-blue-600 transition-all rounded-full group-hover:bg-blue-50/50">
                          {item.label}
                          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                          <ul className="w-80 rounded-3xl border border-gray-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="px-4 py-2 mb-2 border-b border-slate-50">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                Our Expertise
                              </span>
                            </div>

                            {/* Showing dynamic list (Limited to 5 for cleanliness) */}
                            {item.dropdown.slice(0, 5).map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all group/item"
                                >
                                  {sub.label}
                                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                                </Link>
                              </li>
                            ))}

                            {/* THE "VIEW ALL" CALL TO ACTION */}
                            <li className="mt-2 pt-2 border-t border-slate-50">
                              <Link
                                href="/services"
                                className="flex items-center justify-between rounded-2xl px-4 py-4 text-xs font-black uppercase tracking-widest text-white bg-[#05003b] hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/10 group/btn"
                              >
                                View All Services
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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

            {/* --- ACTION BUTTONS --- */}
            <div className="hidden md:block relative">
              <div className="relative flex items-center justify-center">
                {/* 1. The Rotating Container (Must be a square to rotate perfectly) */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                  <motion.div
                    className="absolute w-[150%] h-[150%]" // Larger than the button to cover corners
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "conic-gradient(#3b82f6, #8b5cf6, #ec4899, #22c55e, #3b82f6)",
                    }}
                  />
                </div>

                {/* 2. The Inner Mask (To create the "border" look) */}
                {/* We use a slightly smaller div to reveal only 2px of the gradient */}
                <div className="absolute inset-[2px] rounded-full bg-[#05003b] z-0" />

                {/* 3. Actual Button */}
                <Link
                  href="/contact"
                  className="relative z-10 flex items-center gap-2 rounded-full bg-[#05003b] px-7 py-3 text-[13px] font-black uppercase tracking-widest text-white hover:bg-transparent transition-colors active:scale-95"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* --- MOBILE MENU --- */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="xl:hidden mt-4 overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-2xl"
              >
                <ul className="flex flex-col p-4 max-h-[75vh] overflow-y-auto">
                  {NAV_ITEMS.map((item) => (
                    <li
                      key={item.label}
                      className="border-b border-slate-50 last:border-0"
                    >
                      {!item.dropdown ? (
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-6 py-5 text-base font-bold text-slate-800 active:bg-blue-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className={`flex w-full items-center justify-between px-6 py-5 text-base font-bold transition-colors ${
                              activeDropdown === item.label
                                ? "text-blue-600 bg-blue-50/50"
                                : "text-slate-800"
                            }`}
                          >
                            {item.label}
                            {activeDropdown === item.label ? (
                              <Minus className="h-5 w-5" />
                            ) : (
                              <Plus className="h-5 w-5" />
                            )}
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-slate-50/50"
                              >
                                {item.dropdown.slice(0, 5).map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setMenuOpen(false)}
                                      className="block px-12 py-4 text-sm font-bold text-slate-600 active:text-blue-600"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href="/services"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-2 px-12 py-5 text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]"
                                  >
                                    Explore All Services{" "}
                                    <ArrowRight className="h-3 w-3" />
                                  </Link>
                                </li>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Overlay Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[90] bg-[#05003b]/20 backdrop-blur-sm xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

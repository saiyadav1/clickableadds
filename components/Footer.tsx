"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaVimeoV,
  FaInstagram,
} from "react-icons/fa";

const FOOTER_SERVICES = [
  { title: "SEO Analysis", slug: "seo-analysis" },
  { title: "Content Marketing", slug: "content-marketing" },
  { title: "Digital Strategy", slug: "digital-strategy" },
  { title: "Social Media", slug: "social-media" },
  { title: "Email Marketing", slug: "email-marketing" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/assets/img/logo/logo.png"
                alt="logo"
                width={105}
                height={40}
                className=""
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              This SEO is most reputed firm which provides various online
              marketing solutions.
            </p>
            <div className="space-y-4">
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Follow Us On
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61580102745219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-slate-600 hover:text-white transition-all"
                >
                  <FaFacebookF size={12} />
                </a>
                <a
                  href="https://www.instagram.com/clickable_ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-slate-600 hover:text-white transition-all"
                >
                  <FaInstagram size={12} />
                </a>
                <a
                  href="https://www.linkedin.com/company/clickable-ads-solutions/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-slate-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-bold mb-8">Information</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-slate-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Services with "Check More" */}
          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium mb-8">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-slate-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CHECK MORE SERVICES BUTTON */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest hover:bg-slate-600 hover:border-slate-600 transition-all group"
            >
              Check More Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8">Subscribe.</h4>
            <p className="text-slate-400 text-sm mb-6">
              Our conversation is just getting started.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Mail"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-slate-500 transition-all"
                />
              </div>
              <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg shadow-slate-600/20">
                Subscribe.
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-[11px] font-medium tracking-wide">
            © {currentYear} Copyrights by ClickableAds Solution. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
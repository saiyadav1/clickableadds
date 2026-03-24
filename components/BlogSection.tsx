"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import blogs from "@/data/blogs.json"; // 1. Import the data from your JSON file

export default function BlogSection() {
  // 2. We take only the first 3 blogs for the home page preview
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden flex justify-center">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[85%] max-w-7xl relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="bg-slate-600 w-10 h-[2px]" />
              <span className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Insights & Journal
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Latest blog & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#131683] to-slate-600">
                news updates
              </span>
            </h2>
          </div>

          <Link 
            href="/blog" // Changed from /blog-grid to your actual blog path
            className="group relative inline-flex items-center gap-4 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:border-[#131683] hover:text-[#131683] shadow-sm hover:shadow-md active:scale-95"
          >
            Explore All Articles
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-[#131683] group-hover:text-white">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>
          </Link>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredBlogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-white rounded-[2.5rem] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden mb-8">
                <Link href={`/blog/${blog.slug}`}>
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                
                {/* Floating Tag */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md text-[#131683] text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4 pb-4 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-tight group-hover:text-[#131683] transition-colors line-clamp-2">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#131683] to-slate-400">
                      <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                        <Image 
                          src={blog.authorImg} 
                          alt={blog.author} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-[12px] font-black text-slate-900 uppercase tracking-tight">
                        {blog.author}
                      </h5>
                      <span className="text-[10px] font-bold text-slate-400">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* Arrow Link */}
                  <Link 
                    href={`/blog/${blog.slug}`} 
                    className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center transition-all group-hover:bg-[#131683] group-hover:text-white group-hover:rotate-[-45deg]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
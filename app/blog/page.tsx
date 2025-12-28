"use client";

import blogs from "@/data/blogs.json"; // Ensure this file has the BLOG_DATA array
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#FAFAFB] overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#131683]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[15%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply" 
             style={{ backgroundImage: `radial-gradient(#d1d5db 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
        
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] filter contrast-150 brightness-100">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">The Journal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#05003b] tracking-tighter leading-[1.1]">
              Insights for the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Elite.</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            {/* Updated mapping to use the new BLOG_DATA structure */}
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
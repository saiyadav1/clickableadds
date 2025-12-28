"use client";

import blogs from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // 1. Find the specific blog by slug
  const blog = blogs.find((b) => b.slug === params.slug);

  // 2. If blog doesn't exist, show 404
  if (!blog) {
    notFound();
  }

  // 3. Reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 4. Get related posts (excluding current post, max 3)
  const relatedPosts = blogs
    .filter((b) => b.slug !== params.slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFB] overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10" />
        
        <div className="w-[90%] max-w-4xl mx-auto relative z-10">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-12 font-bold text-sm uppercase tracking-widest"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Journal
          </Link>

          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full"
            >
              {blog.category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              {blog.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image src={blog.authorImg} alt={blog.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{blog.author}</p>
                  <p className="text-xs text-slate-400 font-bold">{blog.date} • 8 min read</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="relative w-[90%] max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Sticky Socials */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col items-center gap-6">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 [writing-mode:vertical-lr] rotate-180">
                 Share Story
               </span>
               <div className="w-[1px] h-12 bg-slate-100" />
               <button className="text-slate-300 hover:text-blue-600 transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </button>
            </div>
          </div>

          {/* MIDDLE: Article Body */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
            </div>

            <article className="max-w-none">
              {/* Dynamic Content Rendering */}
              {blog.content.map((item, index) => {
                if (item.type === "heading") {
                  return (
                    <h2 key={index} className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">
                      {item.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-lg text-slate-600 leading-relaxed mb-8">
                    {item.text}
                  </p>
                );
              })}
            </article>

            {/* Post Tags */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-3">
              {blog.tags.map((tag) => (
                <span key={tag} className="px-5 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* Newsletter Box */}
              <div className="bg-[#05003b] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">Join the Elite</h4>
                  <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                    Get the latest digital insights delivered directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                      Subscribe Now
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
              </div>

              {/* Related Posts */}
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
                   <span className="w-8 h-[2px] bg-blue-600" />
                   Related Reads
                </h4>
                <div className="space-y-8">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={`/blog/${related.slug}`} className="group flex gap-4 items-start">
                      <div className="relative w-24 h-20 shrink-0 rounded-2xl overflow-hidden">
                        <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                          {related.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
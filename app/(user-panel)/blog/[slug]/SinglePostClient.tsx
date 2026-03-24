"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: { type: string; text: string }[];
  image: string;
  author: string;
  authorImg: string;
  date: string;
  category: string;
  tags: string[];
};

export default function SinglePostClient({
  blog,
  allBlogs,
}: {
  blog: Blog;
  allBlogs: Blog[];
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const relatedPosts = allBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-[#FAFAFB]">
        <div className="w-[90%] max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600"
          >
            ← Back to Journal
          </Link>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <Image
              src={blog.authorImg}
              alt={blog.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-bold">{blog.author}</p>
              <p className="text-xs text-slate-400">{blog.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-[90%] max-w-7xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <article className="lg:col-span-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>

          {blog.content.map((item, i) =>
            item.type === "heading" ? (
              <h2 key={i} className="text-3xl font-black mt-12 mb-6">
                {item.text}
              </h2>
            ) : (
              <p key={i} className="text-lg text-slate-600 mb-6 leading-relaxed">
                {item.text}
              </p>
            )
          )}

          {/* TAGS */}
          <div className="mt-12 flex flex-wrap gap-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          <h4 className="font-black uppercase tracking-widest text-xs">
            Related Reads
          </h4>

          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-4"
            >
              <div className="relative w-24 h-20 rounded-xl overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <p className="font-bold">{post.title}</p>
            </Link>
          ))}
        </aside>
      </section>
    </main>
  );
}

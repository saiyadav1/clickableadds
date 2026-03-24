import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <article className="group relative bg-white border border-white rounded-[2.5rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(5,0,59,0.08)] hover:-translate-y-2">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Image - Rounded & Vibrant */}
        <div className="w-full md:w-[40%] aspect-[4/3] relative rounded-[2rem] overflow-hidden">
          <Image
            src={blog.image || "/assets/img/blog/blog-1-bg-1.jpg"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-center pr-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-50 px-3 py-1 rounded-lg">
              {blog.category || "Growth"}
            </span>
            <span className="text-slate-300 text-xs font-bold">{blog.publishDate}</span>
          </div>

          <h3 className="text-2xl font-bold text-[#05003b] leading-tight mb-4 group-hover:text-slate-600 transition-colors">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
            {blog.excerpt}
          </p>

          <Link href={`/blog/${blog.slug}`} className="mt-auto inline-flex items-center gap-2 text-[#05003b] text-xs font-black uppercase tracking-widest group/link">
            Read Full Case
            <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogs from "@/data/blogs.json";
import SinglePostClient from "./SinglePostClient";

type Props = {
  params: { slug: string };
};

/* ---------- DYNAMIC SEO ---------- */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Post Not Found | ClickableAds Blog",
      robots: { index: false },
    };
  }

  return {
    title: `${blog.title} | ClickableAds Blog`,
    description: blog.excerpt || blog.content?.[0]?.text,
    alternates: {
      canonical: `https://clickableadds.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://clickableadds.com/blog/${blog.slug}`,
      siteName: "ClickableAds",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

/* ---------- STATIC GENERATION (FAST) ---------- */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* ---------- PAGE ---------- */
export default function BlogPostPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) notFound();

  return <SinglePostClient blog={blog} allBlogs={blogs} />;
}

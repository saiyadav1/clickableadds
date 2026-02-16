import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | ClickableAds – Digital Marketing Insights & Strategies",
  description:
    "Read expert insights, growth strategies, SEO tips, and digital marketing trends from the ClickableAds team.",
  keywords: [
    "digital marketing blog",
    "seo tips",
    "marketing strategies",
    "growth hacking",
    "clickableads blog",
  ],
  alternates: {
    canonical: "https://clickableadds.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ClickableAds Blog – Insights for the Digital Elite",
    description:
      "Actionable SEO, performance marketing, and digital growth insights for ambitious brands.",
    url: "https://clickableadds.com/blog",
    siteName: "ClickableAds",
    images: [
      {
        url: "/og/blog.png",
        width: 1200,
        height: 630,
        alt: "ClickableAds Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickableAds Blog – Digital Growth Insights",
    description:
      "Expert commentary on SEO, marketing, and scaling digital businesses.",
    images: ["/og/blog.png"],
  },
};

export default function BlogPage() {
  return (
   <BlogPageClient/>
  );
}
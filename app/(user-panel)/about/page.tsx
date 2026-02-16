import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import CounterSection from "@/components/CounterSection";
import FunFact from "@/components/FunFact";
import MissionSection from "@/components/MissionSection";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "About Us | ClickableAds – Digital Growth Experts",
  description:
    "Learn about ClickableAds, a results-driven digital marketing agency helping brands grow through SEO, performance marketing, and innovative digital strategies.",
  keywords: [
    "about clickableads",
    "digital marketing agency",
    "seo experts",
    "growth marketing company",
    "performance marketing agency",
  ],
  alternates: {
    canonical: "https://clickableadds.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About ClickableAds – Who We Are & What We Do",
    description:
      "Discover our mission, process, and values behind building high-impact digital solutions for modern brands.",
    url: "https://clickableadds.com/about",
    siteName: "ClickableAds",
    images: [
      {
        url: "/og/about.png", 
        width: 1200,
        height: 630,
        alt: "About ClickableAds",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClickableAds – Digital Growth Experts",
    description:
      "Meet the team and mission powering ClickableAds’ digital marketing success.",
    images: ["/og/about.png"],
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Process />
      <MissionSection />
      <CounterSection />
      <FunFact />
    </>
  );
}

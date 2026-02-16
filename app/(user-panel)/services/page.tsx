import ServiceClient from "./ServiceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | ClickableAdds Solutions",
  description:
    "Explore our elite digital services including strategy, development, marketing, and performance optimization designed to scale global brands.",
  alternates: {
    canonical: "https://clickableadds.com/services",
  },
  openGraph: {
    title: "ClickableAdds Digital Services",
    description:
      "High-impact digital services built for brands that want to dominate their market.",
    url: "https://clickableadds.com/services",
    siteName: "ClickableAdds",
    images: [
      {
        url: "/og/services.png",
        width: 1200,
        height: 630,
        alt: "ClickableAdds Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickableAdds Digital Services",
    description:
      "Explore strategy, engineering, and marketing services by ClickableAdds.",
    images: ["/og/services.png"],
  },
};


export default function ServicesPage() {
  return (
    <ServiceClient />
  );
}
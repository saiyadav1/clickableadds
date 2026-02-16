import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | ClickableAdds",
  description:
    "Get in touch with ClickableAdds to discuss your next digital project. We specialize in marketing, SEO strategy, and high-impact digital solutions.",
  alternates: {
    canonical: "https://clickableadds.com/contact",
  },
  openGraph: {
    title: "Contact ClickableAdds",
    description:
      "Have a bold idea or complex challenge? Contact ClickableAdds and let's build the future together.",
    url: "https://clickableadds.com/contact",
    siteName: "ClickableAdds",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ClickableAdds",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ClickableAdds",
    description:
      "Reach out to ClickableAdds for marketing, SEO, and digital growth solutions.",
    images: ["/images/contact-og.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

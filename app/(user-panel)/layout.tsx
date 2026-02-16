import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';


const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', 
});

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-outfit', 
});

export const metadata: Metadata = {
  title: "Seomy Digital Marketing",
  description: "SEO & Digital Marketing Agency",
  metadataBase: new URL("https://clickableadds.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className={`${jakarta.className} bg-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
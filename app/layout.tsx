import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';

// Define the Body Font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', // Allows use in Tailwind
});

// Define the Heading Font
const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-outfit', // Allows use in Tailwind
});

export const metadata = {
  title: "Seomy Digital Marketing",
  description: "SEO & Digital Marketing Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      {/* 1. Added jakarta.className to apply the font to all text */}
      {/* 2. Added antialiased for smoother font rendering on Mac/Windows */}
      <body className={`${jakarta.className} bg-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
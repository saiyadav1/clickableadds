
import "../globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className={`${jakarta.className} bg-white antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
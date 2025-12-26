import type { Metadata } from "next";
import { Manrope, Poppins, Audiowide } from "next/font/google"; // Removed Vermin Vibes fallback
import TopBar from "@/components/TopBar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"], variable: "--font-audiowide" });

export const metadata: Metadata = {
  title: "DJ HEX | Best DJ in Ahmedabad",
  description: "Transforming every event into an unforgettable experience with the perfect blend of beats, energy, and atmosphere.",
  icons: {
    icon: "/images/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${poppins.variable} ${audiowide.variable} font-sans`}>
        <TopBar />
        {children}
        <WhatsAppFAB />
        <script dangerouslySetInnerHTML={{__html: `
          // Mobile scroll enhancement
          (function () {
              if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                  let scrollTimeout, lastScrollTop = 0, scrollVelocity = 0;
                  window.addEventListener('touchstart', () => { lastScrollTop = window.scrollY; scrollVelocity = 0; }, { passive: true });
                  window.addEventListener('touchmove', () => { 
                      const current = window.scrollY; 
                      scrollVelocity = Math.abs(current - lastScrollTop); 
                      lastScrollTop = current; 
                  }, { passive: true });
                  // Momentum logic simplified for inline
              }
          })();
        `}} />
      </body>
    </html>
  );
}

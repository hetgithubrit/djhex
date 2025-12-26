"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0620]/80 border-b border-white/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="wrapper">
        <nav className="flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-audiowide text-xl tracking-wider font-bold">DJ HEX</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 items-center flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#5c00ce]/25 text-white shadow-[var(--glow)] border border-[#5c00ce]/50"
                    : "text-[#dfe6ff] hover:text-white hover:bg-[#5c00ce]/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="hidden md:inline-block cta">
            Book Now
          </Link>
        </nav>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 p-4 mt-2 border border-white/10 rounded-xl bg-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  pathname === link.href
                    ? "bg-[#5c00ce]/25 text-white"
                    : "text-[#dfe6ff] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
             <Link href="/contact" onClick={() => setIsOpen(false)} className="cta text-center mt-2">
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data (Extract from real usage in future)
const galleryItems = [
  { src: "/images/gallery/20251122_232736.jpg", vertical: true },
  { src: "/images/gallery/20251122_232747.jpg", vertical: true },
  { src: "/images/gallery/IMG_20251211_191333.jpg", vertical: true },
  { src: "/images/gallery/20251122_234900.jpg", vertical: false },
  { src: "/images/gallery/20251122_235255.jpg", vertical: false },
  { src: "/images/gallery/20251123_154903.jpg", vertical: true },
  { src: "/images/gallery/20251211_222632.jpg", vertical: false },
  { src: "/images/gallery/IMG_20251211_205817.jpg", vertical: false },
  { src: "/images/gallery/IMG_20251211_205821.jpg", vertical: false },
  { src: "/images/gallery/IMG_20251211_210018.jpg", vertical: false },
  { src: "/images/gallery/IMG_20251211_223024.jpg", vertical: false },
  { src: "/images/gallery/IMG_20251216_121651.jpg", vertical: false },
  { src: "/images/gallery/event-bachelor.jpg", vertical: false },
  { src: "/images/gallery/event-club.jpg", vertical: false },
  { src: "/images/gallery/event-freshers.jpg", vertical: false },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard Nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Gallery</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins">Moments & Vibes</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">Snapshots from unforgettable nights, high-energy weddings, and club events.</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid border border-white/10 bg-white/5"
              >
                <img 
                  src={item.src} 
                  loading="lazy"
                  alt={`Gallery image ${index}`} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          
          <button 
             onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length); }}
             className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

           <button 
             onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryItems.length); }}
             className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <img 
            src={galleryItems[lightboxIndex].src} 
            alt="Lightbox" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

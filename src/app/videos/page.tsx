"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Play } from "lucide-react";

const videos = [
  { filename: 'IMG_9771.mov', title: 'Live Performance 1' },
  { filename: 'IMG_9772.mov', title: 'Live Performance 2' },
  { filename: '20250822_204752 (1).mov', title: 'Live Performance 3' },
  { filename: 'IMG_2838.MOV', title: 'Live Performance 4' },
  { filename: 'IMG_2844 (1).MOV', title: 'Live Performance 5' },
  { filename: 'VID_20251128_22173628.mp4', title: 'Live Performance 6' },
  { filename: 'VID_20251128_221736280.mp4', title: 'Live Performance 7' },
  { filename: '20251122_232312.mp4', title: 'Live Performance 8' },
  { filename: 'Video-518 (2).mp4', title: 'Live Performance 9' }
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Helper to handle video click from grid
  const handleVideoClick = (filename: string) => {
    setActiveVideo(filename);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Watch</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins">Live Performances</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">Experience the energy, the crowd, and the drops.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((vid, i) => (
              <div 
                key={i} 
                onClick={() => handleVideoClick(vid.filename)}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black/40"
              >
                <video 
                  src={`/video/${vid.filename}#t=1`} 
                  preload="metadata" 
                  muted 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play fill="white" className="ml-1 text-white" size={24} />
                    </div>
                </div>
              </div>
            ))}
          </div>

           <div className="w-full text-center mt-12">
              <p className="text-[#dcd4ff] text-lg mb-6">More videos available on our Instagram</p>
              <a href="https://www.instagram.com/hex.dj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] hover:brightness-110 text-white font-bold rounded-lg transition-all shadow-lg hover:-translate-y-1 no-underline text-sm">
                <span>Follow @hex.dj for More</span>
              </a>
            </div>
        </div>
      </main>
      <Footer />

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
           <button className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center">
            <video 
              src={`/video/${activeVideo}`} 
              controls 
              autoPlay 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

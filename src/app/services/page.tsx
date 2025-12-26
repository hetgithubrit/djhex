"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Check } from "lucide-react";

const services = [
  { 
    title: 'Weddings & Engagements', 
    desc: 'Curated ceremonies, sangeet, baraat, receptions, and love-filled dance floors.',
    details: [
      'Ceremony music & processional',
      'Cocktail hour background music',
      'Grand entrance & first dance',
      'Reception dance party',
      'Cultural & traditional music',
      'Baraat & wedding procession',
      'Mehendi & sangeet music',
      'Vidaai ceremony music'
    ]
  },
  { 
    title: 'Club Nights & Festivals', 
    desc: 'High-energy sets, live mixing, and impactful drops built for big-room vibes.',
    details: [
      'High-energy sets',
      'Live mixing',
      'Impactful drops',
      'Big-room vibes',
      'Crowd control',
      'Electronic, House, Techno'
    ]
  },
  { 
    title: 'Private & Corporate Events', 
    desc: 'Professional sound, MC support, and crowd-first playlists for every audience.',
    details: [
      'Professional sound',
      'MC support',
      'Crowd-first playlists',
      'Background ambience',
      'Award show cues',
      'After-party sets'
    ]
  },
  { 
    title: 'Birthday Parties', 
    desc: 'Custom themes, age-appropriate edits, and interactive sets that keep guests hyped.',
    details: [
      'Custom themes',
      'Age-appropriate edits',
      'Interactive sets',
      'Request handling',
      'Hype music'
    ]
  },
  { 
    title: 'Graduation Parties', 
    desc: 'Feel-good anthems, fresh remixes, and celebratory mixes for new milestones.',
    details: [
      'Feel-good anthems',
      'Fresh remixes',
      'Celebratory mixes',
      'Top 40 hits',
      'Throwbacks'
    ]
  },
  { 
    title: 'Anniversary Celebrations', 
    desc: 'Romantic selects with smooth transitions that honor your story and guests.',
    details: [
      'Romantic selects',
      'Smooth transitions',
      'Story honoring',
      'Couple favorites',
      'Decade hits'
    ]
  },
   { title: 'Baby Showers', desc: 'Light, joyful soundtracks and crystal-clear audio for speeches and games.', details: ['Joyful soundtracks', 'Clear audio', 'Speech support', 'Game music'] },
   { title: 'Sports Events & Tournaments', desc: 'Stadium-style hype music, live commentary support, and energizing breaks.', details: ['Hype music', 'Live commentary', 'Energizing breaks', 'Walk-up songs'] },
   { title: 'Product Launches & Brand Events', desc: 'On-brand sound design, clear announcements, and immersive atmospheres that impress.', details: ['On-brand sound', 'Clear announcements', 'Immersive atmosphere', 'Background loops'] }
];

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Services</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins">Tailored Sound</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">From intimate gatherings to massive festivals, we have the perfect package for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex flex-col items-start text-left"
                onClick={() => setActiveService(s)}
              >
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🎵</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-[#dcd4ff] text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="mt-auto text-[#8955e9] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  See Details <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Service Modal */}
      {activeService && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveService(null)}
        >
          <div 
            className="bg-[#11082e] border border-white/10 w-full max-w-lg rounded-2xl p-6 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold font-poppins mb-2">{activeService.title}</h3>
            <p className="text-[#dcd4ff] text-sm mb-6">{activeService.desc}</p>
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">What's Included</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#dcd4ff]">
                    <Check size={16} className="text-[#8955e9] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <a href="/contact" className="cta w-full text-center sm:w-auto">Book This Service</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import {
  Music,
  MapPin,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Zap,
  Volume2,
  Mic2,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function BrochureTemplate() {
  return (
    <div
      id="brochure-capture"
      className="bg-white text-[#0a0620] rounded-[2rem] overflow-hidden shadow-2xl print:shadow-none print:rounded-none max-w-5xl mx-auto"
    >
      {/* Front Cover / Header */}
      <div className="relative h-[500px] flex items-center justify-center text-center p-12 overflow-hidden bg-[#0d0725]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1571266066716-de433560773d?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0725] via-transparent to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5c00ce] bg-opacity-40 blur-[130px] rounded-full" />

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-6 inline-block border-[3px] border-[#5c00ce] px-8 py-3 rounded-full"
          >
            <span className="font-audiowide text-4xl md:text-6xl text-white tracking-[0.2em] font-black">
              DJ HEX
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-[0.1em]">
            The Ultimate Event Experience
          </h2>
          <div className="h-1 w-24 bg-[#5c00ce] mx-auto mb-6" />
          <p className="text-[#dcd4ff] text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            Bollywood • EDM • Punjabi • Commercial • Retro
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Music & Services */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5c00ce] rounded-xl flex items-center justify-center text-white">
                <Music size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Music Pulse
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Bollywood Hits",
                "International EDM",
                "Punjabi Pop",
                "Retro Classics",
                "House & Techno",
                "Commercial Top 40",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-lg font-bold text-[#5c00ce]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#5c00ce]" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5c00ce] rounded-xl flex items-center justify-center text-white">
                <Star size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Elite Events
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f8f6ff] p-6 rounded-2xl border border-[#5c00ce] border-opacity-10">
                <h4 className="font-black text-xl mb-2">Grand Weddings</h4>
                <p className="text-[#5c00ce] text-opacity-70 leading-relaxed font-medium">
                  Baraat, Sangeet & Reception with custom music mapping and
                  crowd engagement.
                </p>
              </div>
              <div className="bg-[#f8f6ff] p-6 rounded-2xl border border-[#5c00ce] border-opacity-10">
                <h4 className="font-black text-xl mb-2">Corporate Galas</h4>
                <p className="text-[#5c00ce] text-opacity-70 leading-relaxed font-medium">
                  Sophisticated atmosphere and high-energy after-parties for
                  industry leaders.
                </p>
              </div>
              <div className="bg-[#f8f6ff] p-6 rounded-2xl border border-[#5c00ce] border-opacity-10">
                <h4 className="font-black text-xl mb-2">Club Nightlife</h4>
                <p className="text-[#5c00ce] text-opacity-70 leading-relaxed font-medium">
                  Powerhouse sets with seamless transitions and peak-time
                  performance expertise.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Tech & Trust */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5c00ce] rounded-xl flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Technical Rider
              </h3>
            </div>
            <div className="bg-[#0d0725] text-white p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-4">
                <Volume2 className="text-[#8955e9]" />
                <span className="font-bold">High-Fidelity Audio Setup</span>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="text-[#8955e9]" />
                <span className="font-bold">DMX Intelligent Lighting</span>
              </div>
              <div className="flex items-center gap-4">
                <Mic2 className="text-[#8955e9]" />
                <span className="font-bold">Professional MC Support</span>
              </div>
              <div className="flex items-center gap-4">
                <ImageIcon className="text-[#8955e9]" />
                <span className="font-bold">
                  LED Wall Integration available
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5c00ce] rounded-xl flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Proven Trust
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center p-6 border-2 border-dashed border-[#5c00ce] border-opacity-20 rounded-3xl">
                <div className="text-5xl font-black text-[#5c00ce] mb-2">
                  200+
                </div>
                <div className="text-sm uppercase font-black tracking-widest text-[#0a0620] text-opacity-60">
                  Events Successfully Played
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <MapPin className="text-[#5c00ce] shrink-0" />
                <div>
                  <h5 className="font-black">National Reach</h5>
                  <p className="text-[#5c00ce] text-opacity-60 font-medium">
                    Available for destination weddings across India and
                    International tours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Footer */}
          <section className="pt-8 border-t border-[#0a0620] border-opacity-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-xl font-black">
                <Phone className="text-[#5c00ce]" size={24} />
                +91 814044 2505
              </div>
              <div className="flex items-center gap-4 text-xl font-black">
                <Instagram className="text-[#5c00ce]" size={24} />
                @hex.dj
              </div>
              <div className="flex items-center gap-4 text-xl font-black">
                <Mail className="text-[#5c00ce]" size={24} />
                djhex1907@gmail.com
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Print Footer */}
      <div className="hidden print:block p-10 text-center border-t border-gray-100 italic text-gray-400 text-sm">
        © DJ Hex Official Portfolio. Based in Gujarat, India.
      </div>
    </div>
  );
}
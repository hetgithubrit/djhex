"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function About() {
  const [counts, setCounts] = useState({ events: 0, years: 0, satisfaction: 0, cities: 0 });

  useEffect(() => {
    const duration = 650; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { events: 250, years: 5, satisfaction: 100, cities: 8 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        events: Math.floor(targets.events * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        cities: Math.floor(targets.cities * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <section className=" flex flex-col md:flex-row items-center gap-12">
            
            {/* Image */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative z-10 rounded-[18px] p-[14px] border border-white/10 bg-gradient-to-br from-[#5c00ce]/18 to-[#5c00ce]/8 shadow-[0_14px_55px_rgba(0,0,0,0.55)]">
                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <img 
                      src="/images/hero-bg2.jpg" 
                      alt="DJ HEX performing" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#5c00ce]/20 blur-[100px] -z-10 rounded-full" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
               <div className="pill mb-6 mx-auto md:mx-0">Meet DJ HEX</div>
               <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                 Het Patel, known as <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8955e9] to-[#dcd4ff]">DJ Hex</span>
               </h1>
               <div className="space-y-6 text-[#dcd4ff] text-lg leading-relaxed">
                 <p>
                   Het Patel, known as DJ Hex, drops high-energy Bollywood, retro, and EDM beats that light up any event. From clubs to weddings, his powerful mixes keep the crowd dancing nonstop and create a vibe everyone remembers.
                 </p>
                 <p>
                   With over 5 years of experience in the industry, DJ Hex has mastered the art of reading the crowd. Whether it's a Sangeet that needs traditional beats with a modern twist, or a cocktail party requiring sophisticated lounge vibes, he delivers the perfect soundtrack.
                 </p>
               </div>

               <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                 <Link href="/contact" className="cta">Hire DJ HEX</Link>
                 <Link href="/gallery" className="btn-secondary">View Gallery</Link>
               </div>
            </div>

          </section>

          {/* Stats Section Reuse */}
          <section className="py-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">{counts.events}+</h3>
                   <span className="text-sm text-[#dcd4ff]">Events Done</span>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">{counts.years}+</h3>
                   <span className="text-sm text-[#dcd4ff]">Years Exp.</span>
                </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">{counts.satisfaction}%</h3>
                   <span className="text-sm text-[#dcd4ff]">Happy Clients</span>
                </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">{counts.cities}+</h3>
                   <span className="text-sm text-[#dcd4ff]">Cities Covered</span>
                </div>
             </div>
          </section>

          {/* What I Do For You Section */}
          <section className="py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">What I Do For You</h2>
              <p className="text-[#dcd4ff] text-lg max-w-2xl mx-auto">
                Everything you need for a flawless, unforgettable event experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Wedding Services */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  💍
                </div>
                <h3 className="text-xl font-bold mb-4">Wedding Services</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Ceremony music & processional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Cocktail hour background music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Grand entrance & first dance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Reception dance party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Cultural & traditional music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Baraat & wedding procession</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Mehendi & sangeet music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Vidaai ceremony music</span>
                  </li>
                </ul>
              </div>

              {/* Professional Setup */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🎛️
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Setup</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>High-quality sound system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Professional lighting effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Wireless microphones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Backup equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Early setup & testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>LED dance floor lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Fog & laser effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Portable PA system</span>
                  </li>
                </ul>
              </div>

              {/* Music Expertise */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🎵
                </div>
                <h3 className="text-xl font-bold mb-4">Music Expertise</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Bollywood & Hindi hits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>English pop & rock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>EDM & electronic music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Punjabi & regional hits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Classic & retro songs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Live mixing & transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Gujarati & folk music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Remixes & mashups</span>
                  </li>
                </ul>
              </div>

              {/* Event Management */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h3 className="text-xl font-bold mb-4">Event Management</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Pre-event consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Timeline coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>MC services available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Announcements & coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Emergency backup plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Post-event follow-up</span>
                  </li>
                </ul>
              </div>

              {/* Special Features */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  ✨
                </div>
                <h3 className="text-xl font-bold mb-4">Special Features</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Custom song requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Do-not-play lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Interactive crowd engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Photo booth music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Special effects & smoke</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Multi-zone audio setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Karaoke setup available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Custom event branding</span>
                  </li>
                </ul>
              </div>

              {/* What You Get */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-[#5c00ce]/10 hover:to-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,0,206,0.3)] hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#5c00ce]/20 text-[#8955e9] rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  👑
                </div>
                <h3 className="text-xl font-bold mb-4">What You Get</h3>
                <ul className="space-y-2 text-[#dcd4ff] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Stress-free experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Professional reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Memorable moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Happy dancing guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Perfect atmosphere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8955e9] mt-1">✓</span>
                    <span>Value for money</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact" className="cta text-base md:text-lg px-6 py-3 md:px-8 md:py-4 inline-block">
                Let's Plan Your Perfect Event
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

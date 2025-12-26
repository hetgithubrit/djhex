"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const reviews = [
  { initials: 'HP', name: 'Harsh Patel', text: 'Perfect blend of Gujarati hits and Bollywood bangers. Crowd was on its feet all night!' },
  { initials: 'RT', name: 'Riya Thakkar', text: 'Super professional, arrived early, coordinated with our planner, and nailed every request.' },
  { initials: 'SD', name: 'Soham Dave', text: 'Live mixing is next level. The transitions were seamless—felt like a club set at our wedding.' },
  { initials: 'MV', name: 'Mitali Vaghela', text: 'Handled our baraat, sangeet, and reception flawlessly. Guests still rave about the energy!' },
  { initials: 'NJ', name: 'Neel Joshi', text: 'Top-tier sound and lights. He read the crowd perfectly and kept the dance floor full.' },
  { initials: 'ST', name: 'Shreya Trivedi', text: 'Custom playlist, do-not-play list, and smooth MC work. Exactly what we needed.' },
];

export default function Reviews() {
  return (
    <section className="py-16" id="reviews">
      <div className="wrapper">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="pill mb-2">Google Reviews</div>
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Clients who vibed with DJ HEX</h2>
          </div>
          <Link href="/reviews" className="btn-secondary">See all reviews</Link>
        </div>

        <div className="overflow-hidden relative mt-8">
          <div className="flex gap-6 w-max animate-[scroll-reviews_45s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Original + Duplicate for Loop */}
            {[...reviews, ...reviews].map((r, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 min-w-[300px] max-w-[320px] flex flex-col gap-4 transition-transform hover:-translate-y-1"
              >
                <header className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f1f3f4] flex items-center justify-center font-bold text-[#5c00ce] text-sm border border-black/5">
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#202124] text-[15px] p-0 m-0 leading-tight">{r.name}</h4>
                    <div className="text-[#fbbc04] text-lg tracking-widest leading-none">★★★★★</div>
                  </div>
                </header>
                <p className="text-[#3c4043] text-[15px] italic leading-relaxed m-0">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

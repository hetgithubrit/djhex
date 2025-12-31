"use client";

import { Star, Users, MapPin } from "lucide-react";

export default function GoogleReviewCTA() {
  return (
    <div className="wrapper py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white/10 relative overflow-hidden group">
        {/* Subtle Purple Glow */}
        <div className="absolute inset-0 border border-[#5c00ce]/15 rounded-[32px] pointer-events-none group-hover:shadow-[0_0_25px_rgba(92,0,206,0.08)] transition-shadow duration-500" />
        
        <div className="flex flex-col items-center text-center">
          {/* Google "G" Icon Container */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border border-gray-50 transform group-hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-poppins">
            Love Our Service?
          </h2>
          
          <p className="text-gray-600 max-w-lg text-base leading-relaxed mb-8">
            Help others discover DJ Hex by leaving a Google review. 
            Your feedback means the world to us!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full justify-center mb-6 sm:mb-8">
            <a 
              href="https://share.google/7o6xtZiJ6YKvWYGf5" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-[#EA4335] text-white font-bold rounded-xl shadow-[0_8px_15px_rgba(234,67,53,0.25)] hover:shadow-[0_12px_25px_rgba(234,67,53,0.35)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-sm sm:text-[15px]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h4.74c-.2 1.06-1.18 3.12-4.74 3.12-3.08 0-5.6-2.55-5.6-5.7s2.52-5.7 5.6-5.7c1.75 0 2.93.75 3.6 1.39l2.58-2.49c-1.66-1.55-3.82-2.5-6.18-2.5-5.28 0-9.6 4.32-9.6 9.6s4.32 9.6 9.6 9.6c5.52 0 9.18-3.88 9.18-9.35 0-.63-.07-1.11-.15-1.58h-9.03z"/>
              </svg>
              Leave a Google Review
            </a>
            
            <a 
              href="https://maps.app.goo.gl/nxZ8HjvJYLqEU6JdA" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-[#4285F4] text-white font-bold rounded-xl shadow-[0_8px_15px_rgba(66,133,244,0.25)] hover:shadow-[0_12px_25px_rgba(66,133,244,0.35)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-sm sm:text-[15px]"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              Find Us on Google Maps
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 py-3 border-t border-gray-100 w-full justify-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="font-bold text-gray-900 text-sm">5.0 Rating</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-[#5c00ce]" />
              </div>
              <span className="font-bold text-gray-900 text-sm">250+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

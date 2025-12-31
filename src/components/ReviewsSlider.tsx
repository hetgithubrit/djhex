"use client";

import { useRef, useEffect, useState } from "react";

interface Review {
  initials: string;
  name: string;
  text: string;
  role?: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    initials: "HP",
    name: "Harsha Patel",
    role: "Wedding Client",
    avatar:
      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=120&h=120&fit=crop",
    text: "Perfect blend of Gujarati hits and Bollywood bangers. Crowd was on its feet all night!",
  },
  {
    initials: "RT",
    name: "Riya Thakkar",
    role: "Birthday Party Host",
    avatar:
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=120&h=120&fit=crop",
    text: "Super professional, arrived early, coordinated with our planner, and nailed every request.",
  },
  {
    initials: "SD",
    name: "Soham Dave",
    role: "Corporate Event",
    avatar:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=120&h=120&fit=crop",
    text: "Live mixing is next level. The transitions were seamless—felt like a club set at our wedding.",
  },
  {
    initials: "MV",
    name: "Mitali Vaghela",
    role: "Wedding Client",
    avatar: "/images/i6.jpg",
    text: "Handled our baraat, sangeet, and reception flawlessly. Guests still rave about the energy!",
  },
  {
    initials: "NJ",
    name: "Neel Joshi",
    role: "Sangeet Event",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop",
    text: "Top-tier sound and lights. He read the crowd perfectly and kept the dance floor full.",
  },
  {
    initials: "ST",
    name: "Shreya Trivedi",
    role: "Reception Party",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop",
    text: "Custom playlist, do-not-play list, and smooth MC work. Exactly what we needed.",
  },
  {
    initials: "AG",
    name: "Aditya Gohil",
    role: "Wedding Client",
    avatar: "/images/i5.jpg",
    text: "Festival-style drops with Gujarati folk twists—unreal vibe! Highly recommend.",
  },
  {
    initials: "MT",
    name: "Meet Thakkar",
    role: "Wedding Planner",
    avatar: "/images/i2.jpg",
    text: "He coordinated with our emcee and planner so we could just enjoy. Stress-free experience.",
  },
  {
    initials: "KD",
    name: "Krupa Desai",
    role: "Party Host",
    avatar: "/images/i1.jpg",
    text: "Bollywood, EDM, Punjabi, retro—all blended perfectly. Dance floor never emptied.",
  },
  {
    initials: "RV",
    name: "Rahul Vaghela",
    role: "Wedding Client",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
    text: "Great communication, shared timelines, and delivered exactly as promised. 10/10.",
  },
  {
    initials: "JT",
    name: "Jheel Trivedi",
    role: "Reception Client",
    avatar: "/images/i7.jpg",
    text: "Loved the laser effects and mashups. Felt like a club inside our banquet hall.",
  },
  {
    initials: "VD",
    name: "Vivek Dave",
    role: "Corporate Event",
    avatar: "/images/i3.jpg",
    text: "Responsive, polite, and totally dialed into our taste. Highly recommended for weddings.",
  },
  {
    initials: "NP",
    name: "Namrata Patel",
    role: "Sangeet Client",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
    text: "Interactive crowd engagement with smooth transitions. Our guests had a blast.",
  },
  {
    initials: "BG",
    name: "Bhavin Gohil",
    role: "Lawn Party",
    avatar: "/images/i4.jpg",
    text: "Sounded amazing even in an open lawn setup. Multi-zone audio worked perfectly.",
  },
];

export default function ReviewsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicating reviews for infinite scroll
  const allReviews = [...reviews, ...reviews];

  if (!isMounted) {
    return <div className="min-h-[400px] w-full" />; // Consistent shell for SSR
  }

  return (
    <div
      className="relative overflow-hidden py-10 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Gradient Fades for Premium Look */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-6 w-max animate-[scroll-reviews_60s_linear_infinite]"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {allReviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col gap-4 w-[280px] md:w-[320px] lg:w-[340px] shrink-0 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            {/* 5-Star Rating & Google Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-[#fbbc04]">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#5f6368] font-medium text-lg">5.0</span>
              </div>

              {/* Google Pill Badge */}
              <div className="flex items-center gap-1.5 bg-[#f8f9fa] border border-[#dadce0] rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                <span className="text-[#3c4043] text-sm font-medium">
                  Google
                </span>
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-[#3c4043] text-lg leading-relaxed font-medium">
              &ldquo;{r.text}&rdquo;
            </blockquote>

            {/* Reviewer Profile */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-[#f1f3f4] flex items-center justify-center font-bold text-[#5c00ce] text-base border border-black/5 overflow-hidden">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  r.initials
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#202124] text-[16px] leading-tight">
                  {r.name}
                </span>
                {r.role && (
                  <span className="text-[#70757a] text-sm mt-0.5">
                    {r.role}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

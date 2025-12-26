"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Events Completed", value: 250, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Satisfaction Rate", value: 100, suffix: "%" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let startTimestamp: number;
            const duration = 1600;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(progress * stat.value);
                return newCounts;
              });
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
      {stats.map((stat, i) => (
        <div key={stat.label} className="p-4 rounded-[14px] border border-white/10 bg-white/2 shadow-lg backdrop-blur-sm">
          <h3 className="m-0 text-2xl font-bold font-poppins">
            {counts[i]}
            {stat.suffix}
          </h3>
          <span className="text-[#dcd4ff] text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

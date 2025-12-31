"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const services = [
  {
    title: "Weddings & Engagements",
    desc: "Curated ceremonies, sangeet, baraat, receptions, and love-filled dance floors.",
    image: "/images/wedding-stage.jpg",
    details: [
      "Ceremony music & processional",
      "Cocktail hour background music",
      "Grand entrance & first dance",
      "Reception dance party",
      "Cultural & traditional music",
      "Baraat & wedding procession",
      "Mehendi & sangeet music",
      "Vidaai ceremony music",
    ],
  },
  {
    title: "Club Nights & Festivals",
    desc: "High-energy sets, live mixing, and impactful drops built for big-room vibes.",
    image: "/images/clubb.jpg",
    details: [
      "High-energy sets",
      "Live mixing",
      "Impactful drops",
      "Big-room vibes",
      "Crowd control",
      "Electronic, House, Techno",
    ],
  },
  {
    title: "Private & Corporate Events",
    desc: "Professional sound, MC support, and crowd-first playlists for every audience.",
    image: "/images/corporate.jpg",
    details: [
      "Professional sound",
      "MC support",
      "Crowd-first playlists",
      "Background ambience",
      "Award show cues",
      "After-party sets",
    ],
  },
  {
    title: "Birthday Parties",
    desc: "Custom themes, age-appropriate edits, and interactive sets that keep guests hyped.",
    image: "/images/hbdd.jpg",
    details: [
      "Custom themes",
      "Age-appropriate edits",
      "Interactive sets",
      "Request handling",
      "Hype music",
    ],
  },
  {
    title: "Graduation Parties",
    desc: "Feel-good anthems, fresh remixes, and celebratory mixes for new milestones.",
    image: "/images/graduation.jpg",
    details: [
      "Feel-good anthems",
      "Fresh remixes",
      "Celebratory mixes",
      "Top 40 hits",
      "Throwbacks",
    ],
  },
  {
    title: "Anniversary Celebrations",
    desc: "Romantic selects with smooth transitions that honor your story and guests.",
    image: "/images/annii.JPG",
    details: [
      "Romantic selects",
      "Smooth transitions",
      "Story honoring",
      "Couple favorites",
      "Decade hits",
    ],
  },
  {
    title: "Baby Showers",
    desc: "Light, joyful soundtracks and crystal-clear audio for speeches and games.",
    image: "/images/baby.jpg",
    details: [
      "Joyful soundtracks",
      "Clear audio",
      "Speech support",
      "Game music",
    ],
  },
  {
    title: "Sports Events & Tournaments",
    desc: "Stadium-style hype music, live commentary support, and energizing breaks.",
    image: "/images/Sports.jpeg",
    details: [
      "Hype music",
      "Live commentary",
      "Energizing breaks",
      "Walk-up songs",
    ],
  },
  {
    title: "Product Launches & Brand Events",
    desc: "On-brand sound design, clear announcements, and immersive atmospheres that impress.",
    image: "/images/product.webp",
    details: [
      "On-brand sound",
      "Clear announcements",
      "Immersive atmosphere",
      "Background loops",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // ✅ FIX
    },
  },
};

export default function Services() {
  const [activeService, setActiveService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <div className="pill mb-4">Services</div>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins">
              Tailored Sound
            </h1>
            <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">
              From intimate gatherings to massive festivals, we have the perfect
              package for you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer overflow-hidden"
                onClick={() => setActiveService(s)}
              >
                {/* Image on Top */}
                <div className="w-full h-48 overflow-hidden">
                  <motion.img
                    src={s.image}
                    alt={s.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Below */}
                <div className="p-6 flex flex-col">
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-[#dcd4ff] text-sm mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-auto text-[#8955e9] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    See Details <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Minimal Closing Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              Have a different event in mind?
            </h2>
            <div className="space-y-1 mb-10">
              <p className="text-[#dcd4ff] text-lg font-medium">
                I provide custom DJ solutions beyond these services.
              </p>
              <p className="text-[#dcd4ff]/60 text-base">
                Contact me for more details and personalized event options.
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="cta inline-block px-10 py-4"
            >
              Let's Plan Your Event
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-[#11082e] border border-white/10 w-full max-w-lg rounded-2xl p-6 md:p-8 relative shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20 p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto pr-2 custom-scrollbar">
                {/* Event Image */}
                {activeService.image && (
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold font-poppins mb-2">
                  {activeService.title}
                </h3>
                <p className="text-[#dcd4ff] text-sm mb-6">
                  {activeService.desc}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    What's Included
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.details?.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 + idx * 0.03 }}
                        className="flex items-start gap-2 text-sm text-[#dcd4ff]"
                      >
                        <Check
                          size={16}
                          className="text-[#8955e9] shrink-0 mt-0.5"
                        />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
                <motion.button
                  onClick={() => setActiveService(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium order-2 sm:order-1"
                >
                  Close
                </motion.button>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta w-full text-center sm:w-auto order-1 sm:order-2"
                >
                  Book This Service
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

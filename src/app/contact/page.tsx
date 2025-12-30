"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  Instagram,
  MessageSquare,
  CheckCircle2,
  Calendar,
  MapPin,
  Music,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    city: "",
    type: "Wedding",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waNumber = "918140442505";
    const text = `*New Booking Inquiry - DJ HEX* 🎧
------------------------------
👤 *Client:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🗓️ *Date:* ${formData.date}
📍 *City:* ${formData.city}
🎉 *Event:* ${formData.type}
📝 *Notes:* ${formData.message || "No extra details."}
------------------------------
_Sent from djhex.in_`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      city: "",
      type: "Wedding",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5c00ce] bg-opacity-20 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#8955e9] bg-opacity-10 blur-[100px] rounded-full -z-10" />

        <div className="wrapper">
          {/* Hero Section */}
          <div className="text-center mb-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pill mb-6 inline-flex"
            >
              Book DJ Hex
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold font-poppins text-white leading-tight"
            >
              Let&apos;s Get The <span className="text-[#8955e9]">Party</span>{" "}
              Started
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[#dcd4ff] mt-6 font-medium flex flex-wrap items-center justify-center gap-2 md:gap-4 uppercase tracking-[0.2em]"
            >
              <span>Bollywood</span>
              <span className="w-1.5 h-1.5 bg-[#8955e9] rounded-full hidden md:inline-block" />
              <span>EDM</span>
              <span className="w-1.5 h-1.5 bg-[#8955e9] rounded-full hidden md:inline-block" />
              <span>Punjabi</span>
              <span className="w-1.5 h-1.5 bg-[#8955e9] rounded-full hidden md:inline-block" />
              <span>Commercial</span>
              <span className="w-1.5 h-1.5 bg-[#8955e9] rounded-full hidden md:inline-block" />
              <span>Retro</span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar: Info & Trust */}
            <div className="lg:col-span-5 space-y-12 order-2 lg:order-1 px-4">
              {/* Trust block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold font-poppins mb-6">
                  Why Choose DJ Hex?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "200+ Events Played",
                    "Weddings, Clubs & Corporate",
                    "Professional Sound & Lights",
                    "Available Across India",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        color="#8955e9"
                        size={20}
                        className="shrink-0"
                      />
                      <span className="text-[#dcd4ff] font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-sm text-[#dcd4ff]/60">
                    Based in Gujarat • Available Across India
                  </p>
                </div>
              </motion.div>

              {/* Instant Contact Desktop */}
              <div className="hidden lg:block space-y-4">
                <h3 className="text-2xl font-bold font-poppins mb-6 pl-2">
                  Instant Connect
                </h3>
                <a
                  href="https://wa.me/918140442505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/20 rounded-2xl p-6 transition-all group"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25d366]/20 flex items-center justify-center text-[#25d366]">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">WhatsApp Chat</h5>
                      <p className="text-[#dcd4ff]/60">Instant response</p>
                    </div>
                  </div>
                  <ArrowRight className="text-[#25d366] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+918140442505"
                  className="flex items-center justify-between bg-[#5c00ce]/10 hover:bg-[#5c00ce]/20 border border-white/10 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5c00ce]/20 flex items-center justify-center text-[#8955e9]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Call Directly</h5>
                      <p className="text-[#dcd4ff]/60">+91 814044 2505</p>
                    </div>
                  </div>
                  <ArrowRight className="text-[#8955e9] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7 order-1 lg:order-2 px-4 mb-8 lg:mb-0">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                {/* Subtle pattern background for form */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#5c00ce]/10 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-3xl font-bold font-poppins mb-2">
                        Check Availability
                      </h3>
                      <p className="text-[#dcd4ff]/60 mb-10">
                        Fill out the details below and we&apos;ll get back to
                        you with a quote.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Full Name
                            </label>
                            <input
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Enter your name"
                              className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8955e9]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Email Address
                            </label>
                            <input
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              type="email"
                              placeholder="your@email.com"
                              className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8955e9]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Phone Number
                            </label>
                            <input
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              type="tel"
                              placeholder="+91 00000 00000"
                              className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8955e9]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Event Date
                            </label>
                            <div className="relative">
                              <input
                                required
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                type="date"
                                className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white focus:outline-none focus:border-[#8955e9]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Event Location (City)
                            </label>
                            <input
                              required
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Ahmedabad"
                              className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8955e9]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                              Event Type
                            </label>
                            <select
                              name="type"
                              value={formData.type}
                              onChange={handleInputChange}
                              className="w-full bg-[#0a0620] border border-[#ffffff1a] rounded-2xl p-4 text-white focus:outline-none focus:border-[#8955e9]"
                            >
                              <option value="Wedding">Wedding</option>
                              <option value="Corporate Event">
                                Corporate Event
                              </option>
                              <option value="Club / Party">Club / Party</option>
                              <option value="Private Celebration">
                                Private Celebration
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#dcd4ff]/80 ml-1">
                            Event Details
                          </label>
                          <textarea
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more..."
                            className="w-full bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#8955e9] resize-none"
                          />
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="cta w-full py-5 text-lg"
                        >
                          Get Event Quote
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-[#8955e9] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(137,85,233,0.4)]">
                        <CheckCircle2 size={40} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        Inquiry Received!
                      </h3>
                      <p className="text-[#dcd4ff]/80 text-lg mb-8 max-w-sm mx-auto">
                        Thank you for reaching out! DJ Hex will check the
                        availability and get back to you shortly.
                      </p>
                      <button
                        onClick={resetForm}
                        className="bg-[#ffffff1a] hover:bg-[#ffffff26] border border-[#ffffff1a] px-8 py-3 rounded-xl transition-colors font-bold text-white"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

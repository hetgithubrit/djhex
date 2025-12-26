import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Contact</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins">Let's Get The Party Started</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">Ready to book? Have questions? Reach out today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12">
            
            {/* Contact Info */}
            <div>
               <h3 className="text-2xl font-bold font-poppins mb-6">Get in Touch</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#5c00ce]/20 flex items-center justify-center text-[#8955e9]">
                        <Phone size={20} />
                     </div>
                     <div>
                        <h5 className="font-bold text-lg">Phone</h5>
                        <p className="text-[#dcd4ff]">+91 814044 2505</p>
                        <p className="text-[#dcd4ff]">+91 98253 79804</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#5c00ce]/20 flex items-center justify-center text-[#8955e9]">
                        <Mail size={20} />
                     </div>
                     <div>
                        <h5 className="font-bold text-lg">Email</h5>
                        <a href="mailto:djhex1907@gmail.com" className="text-[#dcd4ff] hover:text-white">djhex1907@gmail.com</a>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#5c00ce]/20 flex items-center justify-center text-[#8955e9]">
                        <Instagram size={20} />
                     </div>
                     <div>
                        <h5 className="font-bold text-lg">Instagram</h5>
                         <a 
                            href="https://www.instagram.com/hex.dj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#dcd4ff] hover:text-white"
                          >
                            @hex.dj
                          </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div>
               <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5c00ce]" />
                     <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5c00ce]" />
                  </div>
                   <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5c00ce]" />
                   <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5c00ce]">
                      <option className="bg-[#0a0620]">Select Event Type</option>
                      <option className="bg-[#0a0620]">Wedding</option>
                      <option className="bg-[#0a0620]">Corporate Event</option>
                      <option className="bg-[#0a0620]">Club / Party</option>
                      <option className="bg-[#0a0620]">Other</option>
                   </select>
                   <textarea rows={4} placeholder="Message / Details" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5c00ce]" />
                   <button type="submit" className="cta w-full">Send Message</button>
               </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

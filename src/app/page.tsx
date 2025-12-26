import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="wrapper">
          <Hero />
          
          <div className="w-full max-w-[520px] ml-auto mb-20 -mt-16 relative z-20 px-4 md:px-0">
             <Stats />
          </div>

          <Reviews />

          {/* Services Teaser */}
          <section className="py-16" id="services">
             <div className="wrapper">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <div className="pill mb-2">Services</div>
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins">Tailored sound for every moment</h2>
                  </div>
                  <Link href="/services" className="btn-secondary">View all services</Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                    { title: "Weddings & Engagements", desc: "Curated ceremonies, sangeet, baraat, receptions, and love-filled dance floors." },
                    { title: "Club Nights & Festivals", desc: "High-energy sets, live mixing, and impactful drops built for big-room vibes." },
                    { title: "Private & Corporate Events", desc: "Professional sound, MC support, and crowd-first playlists for every audience." }
                 ].map((s, i) => (
                   <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                      <div className="w-12 h-12 bg-white/10 rounded-lg mb-4 flex items-center justify-center text-xl">🎵</div>
                      <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                      <p className="text-[#dcd4ff] text-sm">{s.desc}</p>
                   </div>
                 ))}
                </div>
             </div>
          </section>

          {/* Gallery Teaser */}
          <section className="py-16 mb-20">
            <div className="wrapper">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <div className="pill mb-2">Gallery</div>
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins">Moments & Vibes</h2>
                  </div>
                  <Link href="/gallery" className="btn-secondary">Open gallery</Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                   <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 group">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('/images/gallery/20251122_232736.jpg')"}} />
                   </div>
                   <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                       <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('/images/gallery/IMG_20251211_191333.jpg')"}} />
                   </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                       <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('/images/gallery/IMG_20251211_205817.jpg')"}} />
                   </div>
                   <div className="col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group">
                       <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('/images/gallery/event-club.jpg')"}} />
                   </div>
                </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

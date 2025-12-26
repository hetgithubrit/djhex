import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
            
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
          <section className="py-12 border-t border-white/5">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">250+</h3>
                   <span className="text-sm text-[#dcd4ff]">Events Done</span>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">5+</h3>
                   <span className="text-sm text-[#dcd4ff]">Years Exp.</span>
                </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">100%</h3>
                   <span className="text-sm text-[#dcd4ff]">Happy Clients</span>
                </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h3 className="text-3xl font-bold mb-1">8+</h3>
                   <span className="text-sm text-[#dcd4ff]">Cities Covered</span>
                </div>
             </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

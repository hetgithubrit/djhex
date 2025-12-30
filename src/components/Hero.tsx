import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center md:justify-end min-h-screen pt-32 pb-20 overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[40%_30%] md:bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0a0620]/50 to-[#0a0620]/80 md:bg-gradient-to-r md:from-[#0a0620]/38 md:via-[#0a0620]/26 md:to-[#0a0620]/12" />
      
      <div className="relative z-10 w-full max-w-[520px] text-center px-6 md:text-right md:mr-16">
        <div className="pill mb-4 mx-auto md:mx-0 md:ml-auto">DJ / Music Curator / Live Mixer</div>
        <h1 className="text-[clamp(36px,5vw,52px)] font-bold font-poppins leading-[1.05] drop-shadow-lg mb-4">
          Where Music Meets Magic
        </h1>
        <p className="text-[#dcd4ff] text-[17px] mb-6 mx-auto drop-shadow-md max-w-[480px] md:ml-auto md:mr-0">
          Transforming every event into an unforgettable experience with the perfect blend of beats, energy, and atmosphere.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          <Link href="/contact" className="cta">
            Contact Us for Booking
          </Link>
          <Link href="/services" className="btn-secondary">
            See Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

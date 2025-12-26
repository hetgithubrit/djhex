import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-end min-h-[90vh] py-20 overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0620]/85 via-[#0a0620]/75 to-[#0a0620]/65 md:bg-gradient-to-r md:from-[#0a0620]/38 md:via-[#0a0620]/26 md:to-[#0a0620]/12" />
      
      <div className="relative z-10 w-full max-w-[520px] text-right mr-6 md:mr-16 md:text-center md:mx-auto">
        <div className="pill mb-4 md:mx-auto">DJ / Music Curator / Live Mixer</div>
        <h1 className="text-[clamp(36px,5vw,52px)] font-bold font-poppins leading-[1.05] drop-shadow-lg mb-4">
          Where Music Meets Magic
        </h1>
        <p className="text-[#dcd4ff] text-[17px] mb-6 md:mx-auto drop-shadow-md max-w-[480px]">
          Transforming every event into an unforgettable experience with the perfect blend of beats, energy, and atmosphere.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-end md:justify-center">
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

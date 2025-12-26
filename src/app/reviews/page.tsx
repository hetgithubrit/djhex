import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reviews = [
  { initials: 'HP', name: 'Harsh Patel', text: 'Perfect blend of Gujarati hits and Bollywood bangers. Crowd was on its feet all night!' },
  { initials: 'RT', name: 'Riya Thakkar', text: 'Super professional, arrived early, coordinated with our planner, and nailed every request.' },
  { initials: 'SD', name: 'Soham Dave', text: 'Live mixing is next level. The transitions were seamless—felt like a club set at our wedding.' },
  { initials: 'MV', name: 'Mitali Vaghela', text: 'Handled our baraat, sangeet, and reception flawlessly. Guests still rave about the energy!' },
  { initials: 'NJ', name: 'Neel Joshi', text: 'Top-tier sound and lights. He read the crowd perfectly and kept the dance floor full.' },
  { initials: 'ST', name: 'Shreya Trivedi', text: 'Custom playlist, do-not-play list, and smooth MC work. Exactly what we needed.' },
  { initials: 'AG', name: 'Aditya Gohil', text: 'Festival-style drops with Gujarati folk twists—unreal vibe! Highly recommend.' },
  { initials: 'PS', name: 'Priya Solanki', text: 'Setup was clean, wireless mics ready, backup gear on hand. True professional.' },
  { initials: 'MT', name: 'Meet Thakkar', text: 'He coordinated with our emcee and planner so we could just enjoy. Stress-free experience.' },
  { initials: 'KD', name: 'Krupa Desai', text: 'Bollywood, EDM, Punjabi, retro—all blended perfectly. Dance floor never emptied.' },
  { initials: 'RV', name: 'Rahul Vaghela', text: 'Great communication, shared timelines, and delivered exactly as promised. 10/10.' },
  { initials: 'JT', name: 'Jheel Trivedi', text: 'Loved the laser effects and mashups. Felt like a club inside our banquet hall.' },
  { initials: 'VD', name: 'Vivek Dave', text: 'Responsive, polite, and totally dialed into our taste. Highly recommended for weddings.' },
  { initials: 'NP', name: 'Namrata Patel', text: 'Interactive crowd engagement with smooth transitions. Our guests had a blast.' },
  { initials: 'BG', name: 'Bhavin Gohil', text: 'Sounded amazing even in an open lawn setup. Multi-zone audio worked perfectly.' }
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Reviews</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins">Client Love</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">See what our happy couples and event planners have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
               <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
              >
                <header className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f1f3f4] flex items-center justify-center font-bold text-[#5c00ce] text-sm border border-black/5">
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#202124] text-[15px] p-0 m-0 leading-tight">{r.name}</h4>
                    <div className="text-[#fbbc04] text-lg tracking-widest leading-none">★★★★★</div>
                  </div>
                </header>
                <p className="text-[#3c4043] text-[15px] italic leading-relaxed m-0">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

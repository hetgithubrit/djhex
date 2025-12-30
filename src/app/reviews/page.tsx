import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsSlider from "@/components/ReviewsSlider";
import GoogleReviewCTA from "@/components/GoogleReviewCTA";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="wrapper">
          <div className="text-center mb-12">
             <div className="pill mb-4">Reviews</div>
             <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white">Client Love</h1>
             <p className="text-[#dcd4ff] mt-4 max-w-2xl mx-auto">See what our happy couples and event planners have to say.</p>
          </div>
        </div>

        {/* Full width slider outside restricted wrapper for premium edge-to-edge feel */}
        <ReviewsSlider />

        <GoogleReviewCTA />
      </main>
      <Footer />
    </>
  );
}

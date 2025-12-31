"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import BrochureTemplate from "@/components/BrochureTemplate";

function BrochureContent() {
  const searchParams = useSearchParams();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const element = document.getElementById("brochure-capture");

    if (!element) {
      console.error("Capture element not found");
      setIsDownloading(false);
      return;
    }

    try {
      // @ts-ignore
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0,
        filename: "DJ_HEX_Official_Brochure.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: {
          unit: "in" as const,
          format: "a4" as const,
          orientation: "portrait" as const,
        },
      };

      await html2pdf().from(element).set(opt).save();
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("download") === "true") {
      const timer = setTimeout(() => {
        handleDownload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-[#0a0620]">
        <div className="wrapper max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 print:hidden gap-6">
            <div>
              <h1 className="text-3xl font-bold font-poppins text-white">
                Official Brochure
              </h1>
              <p className="text-[#dcd4ff]/60">
                Professional Profile & Event Services
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isDownloading && (
                <div className="text-[#8955e9] font-bold animate-pulse flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8955e9] rounded-full animate-bounce" />
                  Preparing your PDF...
                </div>
              )}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="cta flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                {isDownloading ? "Generating..." : "Save as PDF"}
              </button>
            </div>
          </div>

          <BrochureTemplate />
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        @media print {
          nav,
          footer,
          .cta {
            display: none !important;
          }
          main {
            padding: 0 !important;
            background: white !important;
          }
          .wrapper {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          body {
            background: white !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
}

export default function BrochurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0620] flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <BrochureContent />
    </Suspense>
  );
}

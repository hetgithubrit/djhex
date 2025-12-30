"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-20 relative z-10">
      <div className="wrapper  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="font-poppins text-lg font-bold mb-4">DJ HEX</h4>
          <p className="text-[#dcd4ff] text-sm leading-relaxed">
            As a professional DJ with over five years of experience, I provide
            high-quality musical entertainment that leaves a lasting impression
            on your guests.
          </p>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-4 text-sm text-[#dcd4ff]">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#8955e9] shrink-0" size={18} />
              <span>Available for events across India & destinations.</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-[#8955e9] shrink-0" size={18} />
              <div>
                <p>+91 814044 2505</p>
                <p>+91 98253 79804</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#8955e9] shrink-0" size={18} />
              <a
                href="mailto:djhex1907@gmail.com"
                className="hover:text-white transition-colors"
              >
                djhex1907@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="text-[#8955e9] shrink-0" size={18} />
              <a
                href="https://www.instagram.com/hex.dj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @hex.dj
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-bold mb-4">Useful Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#dcd4ff]">
            {[
              "Home",
              "About",
              "Services",
              "Gallery",
              "Videos",
              "Reviews",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-white hover:pl-1 transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-bold mb-4">Service Areas</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#dcd4ff]">
            {[
              "Ahmedabad",
              "Surat",
              "Anand",
              "Nadiad",
              "Udaipur",
              "Jaipur",
              "Goa",
              "Mumbai",
            ].map((city) => (
              <li key={city}>
                <Link
                  href="#"
                  className="hover:text-white hover:pl-1 transition-all"
                >
                  DJ in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white border-opacity-5 mt-5 py-6 text-center text-sm text-[#dcd4ff]">
        © {year} DJ HEX. Crafted for unforgettable nights.
      </div>
    </footer>
  );
}

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#1c0f42] to-[#110536] py-3 text-[15px] border-b border-white/10 relative z-20">
      <div className="wrapper flex justify-center md:justify-end items-center gap-5 text-[#dcd4ff] text-[11px] md:text-[15px] whitespace-nowrap">
        <a href="mailto:djhex1907@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <span>✉️</span> djhex1907@gmail.com
        </a>
        <span className="text-white/15">|</span>
        <a href="tel:+918140442505" className="flex items-center gap-2 hover:text-white transition-colors">
          <span>📞</span> +91 814044 2505
        </a>
      </div>
    </div>
  );
}

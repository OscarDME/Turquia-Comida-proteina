"use client";
import { useRef } from "react";
import { ArrowRight, CheckCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { testimonials } = copy;

function scrollToOffer() {
  if (typeof window !== "undefined") {
    document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Testimonials() {
  const trackRef = useRef(null);

  function scrollBy(dir) {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  }

  return (
    <section className="bg-[#f8fbf2] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-white border border-[#8cbc36]/30 text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {testimonials.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a1a1a] leading-tight mb-4">
          {testimonials.headline}
        </h2>
        <p className="text-center text-gray-500 mb-10">
          {testimonials.subheadline}
        </p>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label={testimonials.ariaLeft}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-500" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy(1)}
            aria-label={testimonials.ariaRight}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-500" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.items.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] rounded-2xl overflow-hidden shadow-lg"
                style={{
                  scrollSnapAlign: "start",
                  fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif",
                }}
              >
                {/* Chat background only — no header bar */}
                <div
                  className="relative px-3 py-5 min-h-[160px] flex items-end select-none"
                  style={{
                    backgroundImage: "url('/wallpaper-whatsapp.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Tint overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(230,221,212,0.65)" }}
                  />

                  {/* Outgoing bubble (right-aligned, green) */}
                  <div className="relative w-full flex justify-end">
                    <div
                      className="max-w-[88%] px-3 py-2 rounded-[8px] rounded-tr-[2px] shadow-sm"
                      style={{ background: "#d9fdd3" }}
                    >
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#111b21" }}
                      >
                        {item.quote}
                      </p>
                      <div
                        className="flex items-center justify-end gap-1 mt-1"
                        style={{ color: "#667781" }}
                      >
                        <span className="text-[11px]">{item.time}</span>
                        <CheckCheck size={14} style={{ color: "#53bdeb" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-glow inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {testimonials.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

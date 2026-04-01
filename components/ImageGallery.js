"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { imageGallery } = copy;

function scrollToOffer() {
  document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
}

export default function ImageGallery() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#222222] py-20 md:py-28 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#8cbc36] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#8cbc36]/15 border border-[#8cbc36]/40 text-[#8cbc36] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {imageGallery.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-white leading-tight mb-4">
          {imageGallery.headline}
        </h2>
        <p className="text-center text-white/50 mb-6">
          {imageGallery.subheadline}
        </p>
        {imageGallery.quote && (
          <p className="text-center text-white/40 italic max-w-2xl mx-auto mb-14">
            &ldquo;{imageGallery.quote}&rdquo;
          </p>
        )}

        {/* Gallery carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full items-center justify-center transition-colors"
            aria-label={imageGallery.ariaLeft}
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          >
            {imageGallery.images.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 snap-center w-56 md:w-64 rounded-2xl overflow-hidden border border-white/10 hover:border-[#8cbc36]/50 transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                <div className="relative w-full aspect-square bg-white/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full items-center justify-center transition-colors"
            aria-label={imageGallery.ariaRight}
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        <p className="text-center text-white/30 text-xs mt-4 md:hidden">
          {imageGallery.mobileScrollHint}
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-glow inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {imageGallery.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, Zap, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { carouselSection } = copy;

function scrollToOffer() {
  document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
}

export default function CarouselSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#f0f7e0] text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {carouselSection.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a1a1a] leading-tight mb-4">
          {carouselSection.headline}
        </h2>
        <p className="text-center text-gray-500 mb-12">
          {carouselSection.subheadline}
        </p>

        {/* Carousel + arrow buttons */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg border border-gray-100 rounded-full items-center justify-center hover:bg-[#f0f7e0] transition-colors"
            aria-label={carouselSection.ariaLeft}
          >
            <ChevronLeft size={22} className="text-[#1a1a1a]" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          >
            {carouselSection.items.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 snap-center w-64 md:w-72 bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Recipe image */}
                <div className="relative w-full aspect-[4/3] bg-[#f8fbf2]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-black text-[#1a1a1a] text-base leading-snug mb-3">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {/* Time badge */}
                    <span className="inline-flex items-center gap-1 bg-[#f0f7e0] text-[#6e9628] font-bold text-xs px-3 py-1 rounded-full">
                      <Clock size={11} />
                      {item.time}
                    </span>
                    {/* Protein badge */}
                    <span className="inline-flex items-center gap-1 bg-[#1a1a1a] text-white font-bold text-xs px-3 py-1 rounded-full">
                      <Zap size={11} fill="white" />
                      {item.protein}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg border border-gray-100 rounded-full items-center justify-center hover:bg-[#f0f7e0] transition-colors"
            aria-label={carouselSection.ariaRight}
          >
            <ChevronRight size={22} className="text-[#1a1a1a]" />
          </button>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-gray-400 text-xs mt-4 md:hidden">
          {carouselSection.mobileScrollHint}
        </p>

        {/* Closing text */}
        <p className="text-center text-[#8cbc36] font-black text-xl mt-10 mb-8">
          {carouselSection.closingText}
        </p>

        {/* Categories */}
        <p className="text-center text-gray-600 font-bold text-base mb-4">
          {carouselSection.categoriesHeadline}
        </p>
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {carouselSection.categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-[#f0f7e0] text-[#6e9628] font-bold text-sm px-4 py-2 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-glow inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {carouselSection.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

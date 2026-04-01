"use client";
import Image from "next/image";
import { Gift, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { bonuses } = copy;

function scrollToOffer() {
  if (typeof window !== "undefined") {
    document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Bonuses() {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#222222] py-20 md:py-28 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8cbc36] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#8cbc36]/15 border border-[#8cbc36]/40 text-[#8cbc36] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {bonuses.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-white leading-tight mb-4">
          {bonuses.headline}
        </h2>
        <p className="text-center text-white/50 mb-14">
          {bonuses.subheadline}
        </p>

        {/* Bonus cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.items.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#8cbc36]/40 transition-all duration-300"
            >
              {/* Bonus image */}
              <div className="relative w-full aspect-video bg-white/5">
                <Image
                  src={bonus.image}
                  alt={bonus.imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Badge overlay */}
                <div className="absolute top-3 right-3 bg-[#8cbc36] text-white font-black text-xs px-3 py-1 rounded-full">
                  {bonus.badge}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-[#8cbc36] font-black text-xs uppercase tracking-widest">
                  {bonus.label}
                </span>
                <div className="flex items-start gap-3 mb-3 mt-2">
                  <Gift size={20} className="text-[#8cbc36] flex-shrink-0 mt-0.5" />
                  <h3 className="font-black text-white text-base leading-snug">
                    {bonus.title}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Extras list */}
                {bonus.extras && bonus.extras.length > 0 && (
                  <ul className="flex flex-col gap-1 mb-4">
                    {bonus.extras.map((extra, i) => (
                      <li key={i} className="text-white/40 text-xs flex items-center gap-1.5">
                        <span className="text-[#8cbc36]">✓</span> {extra}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-col gap-1">
                  <span className="text-white/30 text-xs">{bonus.priceLabel}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white/30 line-through text-sm">
                      {bonus.priceOld}
                    </span>
                    <span className="text-[#8cbc36] font-black text-sm">
                      → {bonuses.freeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <p className="text-center text-white/70 font-bold text-lg mt-10 mb-10">
          {bonuses.closingText}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-glow inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {bonuses.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { Zap, Smile, Timer, LayoutGrid, Star, BookOpen, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { features } = copy;

const iconMap = { Zap, Smile, Timer, LayoutGrid, Star, BookOpen };

function scrollToOffer() {
  document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
}

export default function Features() {
  return (
    <section className="bg-[#f8fbf2] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-white border border-[#8cbc36]/30 text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {features.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a1a1a] leading-tight mb-4">
          {features.headline}
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
          {features.subheadline}
        </p>

        {/* Two-column: feature list + app image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#8cbc36]/20 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-[#f0f7e0] rounded-xl flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#8cbc36]" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* App mockup image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-[#8cbc36]/10 rounded-3xl blur-2xl scale-105 pointer-events-none" />
              <Image
                src={features.appImage}
                alt={features.appImageAlt}
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          {features.closingLine}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-glow inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {features.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

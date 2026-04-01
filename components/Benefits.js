"use client";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { benefits } = copy;

function scrollToOffer() {
  if (typeof window !== "undefined") {
    document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Benefits() {
  return (
    <section className="bg-[#f8fbf2] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-white border border-[#8cbc36]/30 text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {benefits.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a1a1a] leading-tight mb-4">
          {benefits.headline}
        </h2>
        <p className="text-center text-lg text-gray-500 mb-16">
          {benefits.subheadline}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {benefits.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-md border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="text-5xl md:text-6xl font-black text-[#8cbc36] leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 leading-snug font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column layout: features + categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          {/* Feature checklist */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-white">
            <h3 className="text-xl font-black text-[#1a1a1a] mb-6">
              {benefits.whatYouReceiveLabel}
            </h3>
            <ul className="flex flex-col gap-4">
              {benefits.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#8cbc36] flex-shrink-0 mt-0.5"
                    fill="#8cbc36"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <span className="text-gray-600 text-sm leading-snug font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meal categories */}
          <div>
            <h3 className="text-xl font-black text-[#1a1a1a] mb-6">
              {benefits.categoriesLabel}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 text-center shadow-md border border-white hover:border-[#8cbc36]/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <div className="text-sm font-bold text-[#1a1a1a]">
                    {cat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#8cbc36] to-[#6e9628] rounded-2xl text-white">
              <p className="font-black text-lg mb-1">
                {benefits.priceNote1}
              </p>
              <p className="text-white/80 text-sm mb-4">
                {benefits.priceNote2}
              </p>
              <button
                onClick={scrollToOffer}
                className="inline-flex items-center gap-2 bg-white text-[#6e9628] font-black text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {benefits.cta} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

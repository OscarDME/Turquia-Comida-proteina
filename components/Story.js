"use client";
import { FlaskConical, Flame, Timer, ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const { story } = copy;

const iconMap = {
  FlaskConical,
  Flame,
  Timer,
};

function scrollToOffer() {
  if (typeof window !== "undefined") {
    document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Story() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      {/* Top accent bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-[#8cbc36] to-transparent mb-16" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#f0f7e0] text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {story.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
            {story.headline}
          </h2>
        </div>
        <p className="text-center text-lg text-gray-500 max-w-2xl mx-auto mb-16">
          {story.subheadline}
        </p>

        {/* Three pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {story.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || FlaskConical;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#8cbc36] rounded-full flex items-center justify-center text-white font-black text-xs">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-[#f0f7e0] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#8cbc36] transition-colors duration-300">
                  <Icon
                    size={26}
                    className="text-[#8cbc36] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-2 bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-md shadow-[#8cbc36]/25 uppercase tracking-wide"
          >
            {story.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

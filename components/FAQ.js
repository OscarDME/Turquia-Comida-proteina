"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { copy } from "@/lib/copy";

const { faq } = copy;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#f0f7e0] text-[#6e9628] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {faq.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a1a1a] leading-tight mb-4">
          {faq.headline}
        </h2>
        {faq.subheadline && (
          <p className="text-center text-gray-500 mb-12">
            {faq.subheadline}
          </p>
        )}

        {/* Accordion items */}
        <div className="flex flex-col gap-3">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#8cbc36] shadow-md"
                    : "border-gray-100 hover:border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <span className="font-bold text-[#1a1a1a] text-sm md:text-base">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[#8cbc36] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-gray-500 text-sm leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

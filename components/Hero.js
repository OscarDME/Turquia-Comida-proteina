"use client";
import Image from "next/image";
import { CheckCircle2, ChevronDown, Zap } from "lucide-react";
import { copy } from "@/lib/copy";


const { hero } = copy;

function scrollToOffer() {
  document.getElementById("lk")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#222222] overflow-hidden">
      {/* Subtle green radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8cbc36] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8cbc36] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <span className="text-2xl font-black text-white tracking-tight">
          <span className="text-[#8cbc36]">{hero.brandHighlight}</span>{hero.brandSuffix}
        </span>
        <button
          onClick={scrollToOffer}
          className="hidden md:block bg-[#8cbc36] hover:bg-[#6e9628] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          {hero.cta}
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="flex items-center gap-1.5 bg-[#8cbc36]/15 border border-[#8cbc36]/40 text-[#8cbc36] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
                <Zap size={12} fill="#8cbc36" />
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              {hero.headline}{" "}
              <span className="text-[#8cbc36]">{hero.headlineHighlight}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-snug">
              {hero.subheadline}
            </p>

            {/* Description */}
            <p className="text-base text-white/50 leading-relaxed max-w-lg">
              {hero.description}
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {hero.avatars.map((av, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] overflow-hidden relative"
                  >
                    <Image src={av.src} alt={av.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                <CheckCircle2 size={14} className="text-[#8cbc36]" />
                {hero.socialProof}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToOffer}
                className="animate-pulse-glow bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#8cbc36]/30 uppercase tracking-wide"
              >
                {hero.cta}
              </button>
            </div>

            {/* Scroll hint */}
            <div className="flex items-center gap-2 text-white/30 text-xs mt-2">
              <ChevronDown size={14} className="animate-bounce" />
              <span>{hero.scrollHint}</span>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 bg-[#8cbc36]/20 rounded-3xl blur-2xl scale-110" />
              <div className="relative w-full max-w-sm lg:max-w-md">
                <Image
                  src="/mockup/turquia.webp"
                  alt={hero.heroImageAlt}
                  width={480}
                  height={600}
                  className="rounded-3xl shadow-2xl object-cover rotate-1"
                  priority
                />
                {/* Floating protein badge */}
                <div className="absolute -top-4 -right-4 bg-[#8cbc36] text-white font-black text-sm px-4 py-2 rounded-2xl shadow-xl rotate-6">
                  {hero.floatingBadgeProtein}
                </div>
                {/* Floating time badge */}
                <div className="absolute -bottom-4 -left-4 bg-white text-[#1a1a1a] font-black text-sm px-4 py-2 rounded-2xl shadow-xl -rotate-3 flex items-center gap-1">
                  {hero.floatingBadgeTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

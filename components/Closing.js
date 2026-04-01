"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, ShieldCheck, RefreshCw, Star, AlertTriangle } from "lucide-react";
import { copy } from "@/lib/copy";

const { closing } = copy;

// TODO: replace with real Hotmart/checkout URL before deploying
const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/proteinli-yemekler";

const iconMap = { Lock, ShieldCheck, RefreshCw, Star };

export default function Closing() {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const [urgencyDate, setUrgencyDate] = useState("");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      let src = params.get("src") || localStorage.getItem("hotmart_src");
      let fbclid = params.get("fbclid") || localStorage.getItem("hotmart_fbclid");
      if (src || fbclid) {
        const urlObj = new URL(BASE_CHECKOUT_URL);
        if (src) urlObj.searchParams.set("src", src);
        if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
        setCheckoutUrl(urlObj.toString());
      }
    } catch (err) {
      console.error("Error building checkout URL:", err);
    }

    // Generate dynamic date (today or tomorrow)
    const d = new Date();
    setUrgencyDate(
      d.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  function handleBeginCheckout() {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "begin_checkout" });
    }
    if (typeof fbq !== "undefined") {
      fbq("track", "InitiateCheckout");
    }
  }

  return (
    <section className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8cbc36] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Guarantee headline */}
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          {closing.guaranteeHeadline}
        </h2>

        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {closing.guaranteeText}
        </p>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap mb-12">
          {closing.trustBadges.map((badge, idx) => {
            const Icon = iconMap[badge.icon] || Lock;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 text-white/50"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <Icon size={20} className="text-[#8cbc36]" />
                </div>
                <span className="text-xs font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Price block */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-white/40 text-sm">{closing.priceOldLabel}</span>
            <span className="text-white/40 line-through text-lg">{closing.priceOld}</span>
          </div>
          <p className="text-white/50 text-sm mb-1">{closing.priceNewLabel}</p>
          <div className="text-5xl font-black text-[#8cbc36] leading-none mb-2">
            {closing.priceNew}
          </div>
          <p className="text-white/40 text-sm">{closing.paymentNote}</p>
        </div>

        {/* Main CTA */}
        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="animate-pulse-glow block w-full max-w-md mx-auto bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-lg py-5 rounded-2xl text-center transition-all duration-200 hover:scale-[1.02] shadow-2xl shadow-[#8cbc36]/30 tracking-wide mb-10"
        >
          {closing.cta}
        </a>

        {/* Guarantee image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Logos-garantia-sin-fondo/Turquia-garantia.webp"
            alt={closing.guaranteeImageAlt}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Urgency */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle size={16} className="text-red-400" />
            <h3 className="text-red-400 font-black text-base">
              {closing.urgencyHeadline}
            </h3>
          </div>
          <p className="text-white/50 text-sm">
            {closing.urgencyText}{" "}
            <span className="text-white font-bold">{urgencyDate}</span>
            {closing.urgencySuffix}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { copy } from "@/lib/copy";

const { finalCta } = copy;

// TODO: replace with real checkout URLs before deploying
const BASE_CHECKOUT_URL_1 = "https://www.oriopay.app/p/proteinli-yemekler";
const BASE_CHECKOUT_URL_2 = "https://www.oriopay.app/p/proteinli-yemekler";

function buildCheckoutUrl(baseUrl) {
  try {
    const params = new URLSearchParams(window.location.search);
    let src = params.get("src") || localStorage.getItem("hotmart_src");
    let fbclid = params.get("fbclid") || localStorage.getItem("hotmart_fbclid");
    if (src || fbclid) {
      const urlObj = new URL(baseUrl);
      if (src) urlObj.searchParams.set("src", src);
      if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
      return urlObj.toString();
    }
  } catch (err) {
    console.error("Error building checkout URL:", err);
  }
  return baseUrl;
}

export default function FinalCta() {
  const [checkoutUrls, setCheckoutUrls] = useState([
    BASE_CHECKOUT_URL_1,
    BASE_CHECKOUT_URL_2,
  ]);

  useEffect(() => {
    setCheckoutUrls([
      buildCheckoutUrl(BASE_CHECKOUT_URL_1),
      buildCheckoutUrl(BASE_CHECKOUT_URL_2),
    ]);
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
    <section
      id="lk"
      className="bg-gradient-to-br from-[#f0f7e0] to-[#e4f2c8] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8cbc36] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#8cbc36] opacity-8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="animate-shimmer text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">
            {finalCta.sectionLabel}
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-center text-[#1a1a1a] mb-2">
          {finalCta.headline}
        </h2>
        <h2 className="text-2xl md:text-4xl font-black text-center text-[#8cbc36] mb-4">
          {finalCta.headlineHighlight}
        </h2>
        <p className="text-center text-gray-500 mb-8">
          {finalCta.subheadline}
        </p>

        {/* Product mockup */}
        <div className="flex justify-center mb-10">
          <Image
            src="/mockup/Turquia.png"
            alt={finalCta.mockupAlt}
            width={320}
            height={320}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* Two pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {finalCta.packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl border-2 border-[#8cbc36] overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-[#8cbc36] px-6 py-5 text-center">
                <h3 className="text-xl font-black text-white">{pkg.name}</h3>
                <p className="text-white/80 text-sm">{pkg.subtitle}</p>
              </div>

              <div className="px-6 py-6">
                {/* Product name */}
                <h4 className="font-black text-[#1a1a1a] text-lg mb-4 text-center">
                  {pkg.productName}
                </h4>

                {/* Price block */}
                <div className="text-center mb-6">
                  {pkg.priceOld && (
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-gray-400 text-sm">{pkg.priceOldLabel}</span>
                      <span className="text-gray-400 line-through text-lg">
                        {pkg.priceOld}
                      </span>
                    </div>
                  )}
                  {pkg.priceNewLabel && (
                    <p className="text-gray-400 text-sm mb-1">{pkg.priceNewLabel}</p>
                  )}
                  <div className="text-4xl font-black text-[#8cbc36] leading-none mb-1">
                    {pkg.priceNew}
                  </div>
                  {pkg.pricePerMonth && (
                    <p className="text-gray-500 text-sm">
                      {pkg.pricePerMonth}<span className="text-gray-400">{pkg.pricePerMonthLabel}</span>
                    </p>
                  )}
                </div>

                {/* What you receive */}
                <p className="font-bold text-[#1a1a1a] text-sm mb-3">
                  {pkg.whatYouReceiveLabel}
                </p>

                {/* Items list */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CircleCheckBig
                        size={16}
                        className="text-[#8cbc36] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Payment note */}
                <p className="text-gray-400 text-xs text-center mb-5">
                  {pkg.paymentNote}
                </p>

                {/* CTA button */}
                <a
                  href={checkoutUrls[idx]}
                  onClick={handleBeginCheckout}
                  className="animate-pulse-glow block w-full bg-[#8cbc36] hover:bg-[#6e9628] text-white font-black text-base py-4 rounded-2xl text-center transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#8cbc36]/30 tracking-wide"
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

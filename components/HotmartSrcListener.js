"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HotmartSrcListener() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const src = searchParams.get("src");
    const fbclid = searchParams.get("fbclid");

    if (src) {
      localStorage.setItem("hotmart_src", src);
    }
    if (fbclid) {
      localStorage.setItem("hotmart_fbclid", fbclid);
    }
  }, [searchParams]);

  return null;
}

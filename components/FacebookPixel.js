"use client";
import Script from "next/script";

const PIXEL_ID = "2092704721576143";

export default function FacebookPixel() {
  return (
    <>
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('set', 'autoConfig', false, '${PIXEL_ID}');
            fbq('init', '${PIXEL_ID}', {disablePushState: true});
          `,
        }}
      />
      <Script
        id="meta-pixel-pageview"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (window.__fbPageViewFired) return;
              window.__fbPageViewFired = true;
              fbq('track', 'PageView');
            })();
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={
            "https://www.facebook.com/tr?id=" +
            PIXEL_ID +
            "&ev=PageView&noscript=1"
          }
          alt=""
        />
      </noscript>
    </>
  );
}

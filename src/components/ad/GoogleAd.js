"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import GoogleSecondAd from "./GoogleSecondAd";

export default function GoogleAd({
  googleAddId = "ca-pub-9733910408335876",
  slot = "5329618300",
  responsiveAd,
  adWidth = "720",
  adHeight = "100",
  name,
}) {
  const adRef = useRef();
  const [adUnfilled, setAdUnfilled] = useState(false);

  useEffect(() => {
    if (!adUnfilled) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      updateStatus();
    }
  }, [adUnfilled]);

  const updateStatus = () => {
    const currentAd = adRef.current;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          const status = currentAd?.getAttribute("data-ad-status");
          if (["unfilled", "frequencyCapped"].includes(status)) {
            setAdUnfilled(true);
          }
        }
      });
    });
    observer.observe(currentAd, {
      attributes: true,
    });
  };

  if (
    ["PROD", "TEST", "NEWTEST"].includes(process.env.NEXT_PUBLIC_ENV) &&
    adUnfilled
  ) {
    return (
      <GoogleSecondAd
        adHgt={responsiveAd ? "" : adHeight}
        adWd={responsiveAd ? "" : adWidth}
        responsiveAd={responsiveAd}
      />
    );
  }

  return (
    <div style={{ width: "100%" }} data-key={name}>
      {/* <center>SPONSORED</center> */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></Script>
      {responsiveAd ? (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-ad-client={googleAddId}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-ad-client={googleAddId}
          data-ad-slot={slot}
          data-ad-width={adWidth}
          data-ad-height={adHeight}
        />
      )}
    </div>
  );
}

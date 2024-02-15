import { useEffect, useRef } from "react";

export default function GoogleSecondAd({
  adHgt = 250,
  adWd = 300,
  responsiveAd,
}) {
  const adRef = useRef();

  useEffect(() => {
    const uniqueId = "gpt-passback-" + new Date().valueOf();
    let hiddenElement = document.createElement("input");
    hiddenElement.type = "hidden";
    hiddenElement.id = "addDivClass";
    hiddenElement.value = uniqueId;
    adRef.current.appendChild(hiddenElement);

    const addDiv = document.createElement("div");
    addDiv.id = uniqueId;
    addDiv.style.height = `${adHgt}px`;
    addDiv.style.width = `${adWd}px`;
    addDiv.classList.add("googleSecondAd");

    const divAddScript = document.createElement("script");
    divAddScript.src = responsiveAd
      ? "/js/secondAdScriptV3.js"
      : "/js/secondAdScriptV4.js";
    // divAddScript.src = "/js/secondAd.js";
    addDiv.appendChild(divAddScript);
    adRef.current.appendChild(addDiv);
  }, []);

  return <div ref={adRef} style={{ width: "100%" }}></div>;
}

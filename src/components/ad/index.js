"use client";
import GoogleAd from "@/components/ad/GoogleAd";
import Card from "@/components/ui/card/Card";
import useDevice from "@/hooks/useDevice";

export default function Ad({
  cardWidth = "w100",
  cardColor = "grey",
  responsiveAd,
  name = "",
}) {
  const [mobile] = useDevice();
  const mobiCardColor = "noShadow_bg_mobiAd";

  return (
    <Card cardWidth={cardWidth} cardColor={mobile ? mobiCardColor : cardColor}>
      {["PROD", "TEST", "NEWTEST"].includes(process.env.NEXT_PUBLIC_ENV) && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <center>SPONSORED</center>
            <GoogleAd responsiveAd={responsiveAd} name={name} />
          </div>
        </div>
      )}
    </Card>
  );
}

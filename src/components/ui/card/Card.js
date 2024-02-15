import cardStyle from "./card.module.css";
import commonStyle from "@/components/layout/common.module.css";
const sharedStyles = { ...cardStyle, ...commonStyle };

export default function Card({
  cardWidth = "",
  cardColor = "white",
  children,
}) {
  cardWidth = cardWidth ? sharedStyles[cardWidth] : "";

  return (
    <div className={`${sharedStyles.column} ${cardWidth}`}>
      <div className={`${sharedStyles.card} ${sharedStyles[cardColor]}`}>
        {children}

        <div id="btnLeft" className={sharedStyles.desktopSliderArrow}>
          <div className={sharedStyles.leftArrow}>
            <img
              src="/img/leftArrow.svg"
              alt="Back"
              width="12px"
              height="24px"
            />
          </div>
          <div id="btnRight" className={sharedStyles.rightArrow}>
            <img
              src="/img/rightArrowBlack.svg"
              alt="Back"
              width="12px"
              height="24px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

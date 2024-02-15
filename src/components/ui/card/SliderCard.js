import cardStyle from "./card.module.css";
import commonStyle from "@/components/styles/common.module.css";
const sharedStyles = { ...cardStyle, ...commonStyle };

const SliderCard = ({
  cardWidth = "",
  cardColor = "white",
  children,
  onNext,
  onPrev,
  index,
  total,
}) => {
  cardWidth = cardWidth ? sharedStyles[cardWidth] : "";

  return (
    <div className={`${sharedStyles.column} ${cardWidth}`}>
      <div className={`${sharedStyles.card} ${sharedStyles[cardColor]}`}>
        {children}

        <div className={sharedStyles.desktopSliderArrow}>
          {index > 0 && (
            <div
              id="btnLeft"
              className={sharedStyles.leftArrow}
              onClick={onPrev}
            >
              <img
                src="/img/leftArrowBlack.svg"
                alt="Back"
                width="20px"
                height="20px"
              />
            </div>
          )}

          {index < total && (
            <div
              id="btnRight"
              className={sharedStyles.rightArrow}
              onClick={onNext}
            >
              <img
                src="/img/rightArrowBlack.svg"
                alt="Back"
                width="20px"
                height="20px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;

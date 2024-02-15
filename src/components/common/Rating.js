import useDevice from "@/hooks/useDevice";
import moment from "moment";
import "moment-timezone";
import { saveGameRating, getGameRating } from "@/api/game";
import { getLocation } from "@/utils/Location";
import { useEffect, useState } from "react";
import styles from "@/components/common/rating.module.css";

export default function Rating({ game, rating, auth }) {
  const [mobile] = useDevice();
  const overAllRating = rating && rating.rating ? rating.rating : 0;
  const defCount = rating && rating.count ? rating.count : 0;
  const [userRating, setUserRating] = useState(overAllRating);
  const [hoverRating, setHoverRating] = useState(null);
  const [count, setCount] = useState(defCount);

  useEffect(() => {
    const newRating = rating && rating.rating ? rating.rating : 0;
    const newCount = rating && rating.count ? rating.count : 0;
    setUserRating(newRating);
    setCount(newCount);
  }, [rating]);

  const handleRatingChange = async (rating) => {
    const { query: ip, city, timezone } = await getLocation();
    const { isSignedIn, user } = auth;

    const params = {
      userIp: ip,
      userId: isSignedIn ? user._id : null,
      gameId: game._id,
      gameUrl: game.slug,
      rating: rating,
      emailId: isSignedIn ? user.email : null,
      userCity: city,
      userZoneName: timezone,
      userZoneCurrentTime: moment().tz(timezone).format("YYYY-MM-DD hh:mm:ss"),
      deviceId: mobile ? 1 : 0,
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    await saveGameRating(params);
    updateRating(game._id,)
  };

  const handleRatingonHover = (hoveRating) => {
    setHoverRating(hoveRating);
  };
  const resetHoverRating = () => {
    setHoverRating(null);
  };

  const getStarCls = (index) => {
    if (hoverRating !== null) {
      if (hoverRating > index) {
        return "full";
      } else if (hoverRating >= index) {
        return "full";
      } else {
        return "empty";
      }
    } else {
      if (userRating > index) {
        return "full";
      } else if (userRating > index) {
        return "full";
      } else {
        return "empty";
      }
    }
  };

  async function updateRating(id){
    let data = await getGameRating(id);
    data = data.result;

    const updatedRating = data && data.rating ? data.rating : 0;
    const updatedCount = data && data.count ? data.count : 0;
    setUserRating(updatedRating);
    setCount(updatedCount);
  }

  return (
    <div>
      <div className={styles.rating}>
        <div className={styles.ratingStar} onMouseLeave={resetHoverRating}>
          <div className={styles.rateThis}>Rate this game</div>
          {[0, 1, 2, 3, 4].map((value, i) => {
            const userRate = Number(userRating);
            return (
              <span
                key={value}
                className={`${styles.star} ${styles[getStarCls(i + 0.5)]}`}
                onClick={() => handleRatingChange(i + 1)}
                onMouseOver={
                  !mobile ? () => handleRatingonHover(i + 0.5) : null
                }
              ></span>
            );
          })}
        </div>
        <div className={styles.raingText}>
          <div className={styles.countHead}>Rating</div>
          <span className={styles.ratingCount}>
            {" "}
            {`${userRating} (${count})`}
          </span>

          <div
            itemProp="aggregateRating"
            itemScope=""
            itemType="https://schema.org/AggregateRating"
          >
            <meta itemProp="ratingValue" content={userRating} />
            <meta itemProp="reviewCount" content={count} />
          </div>
        </div>
      </div>
    </div>
  );
}

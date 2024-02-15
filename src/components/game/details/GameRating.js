// import { useState, useEffect } from "react";
import "moment-timezone";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { getLocation } from "@/helper";
// import { saveGameRating, getGameRating } from "../../../actions";
import { saveGameRating } from "@/api/game";

const GameRating = ({ game, rating, isSignedIn, user }) => {
  // const [rating, setRating] = useState(null);

  // const fetchGameRating = (gameId) => {
  //   getGameRating(gameId).then((rating) => {
  //     setRating(rating);
  //   });
  // };

  // useEffect(() => {
  //   fetchGameRating(game._id);
  // }, [game._id]);

  const submitGameRating = async (rating) => {
    const { query: ip, city, timezone } = await getLocation();

    const data = {
      userIp: ip,
      userId: isSignedIn ? user._id : null,
      gameId: game._id,
      gameUrl: game.slug,
      rating: rating,
      emailId: isSignedIn ? user.email : null,
      userCity: city,
      userZoneName: timezone,
      userZoneCurrentTime: moment().tz(timezone).format("YYYY-MM-DD hh:mm:ss"),
      // userZoneCurrentTime: moment().format("YYYY-MM-DD hh:mm:ss"),
      deviceId: isMobile ? 1 : 0,
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    await saveGameRating(data);

    // Get updated ranking from parent
    // fetchGameRating(game._id);
  };

  return (
    <div className="rating-widget">
      <div>Rate this Game</div>
      <span className="rate">
        <label
          htmlFor="star5"
          title="text"
          onClick={(e) => submitGameRating(5)}
        >
          5 stars
        </label>
        <label
          htmlFor="star4"
          title="text"
          onClick={(e) => submitGameRating(4)}
        >
          4 stars
        </label>
        <label
          htmlFor="star3"
          title="text"
          onClick={(e) => submitGameRating(3)}
        >
          3 stars
        </label>
        <label
          htmlFor="star2"
          title="text"
          onClick={(e) => submitGameRating(2)}
        >
          2 stars
        </label>
        <label
          htmlFor="star1"
          title="text"
          onClick={(e) => submitGameRating(1)}
        >
          1 star
        </label>
        <br />
        Rating {`${rating?.rating} (${rating?.count})`}
      </span>
      <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content={rating?.rating} />
        <meta itemProp="reviewCount" content={rating?.count} />
      </div>
    </div>
  );
};

export default GameRating;

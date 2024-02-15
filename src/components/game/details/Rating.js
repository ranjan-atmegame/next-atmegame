import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment-timezone";
import { saveGameRating, getGameRating } from "@/api/game";
import { getLocation } from "@/utils/Location";
import { isMobile } from "react-device-detect";

export default function Rating({ game, rating, auth, styles }) {
  const submitGameRating = async (rating) => {
    const { query: ip, city, timezone } = await getLocation();
    const { isSignedIn, user } = auth;

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
    // fetchGameRating(game._id);
  };

  return (
    <div className={styles.ratingWidget}>
      <div className={styles.ratingWrapper}>
        <div>Rate this Game</div>
        <div className={styles.ratingLeft}>
          <span className={styles.rate}>
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
          </span>
        </div>
        <div className={styles.ratingRight}>
          <div>Rating</div>
          <span> {`${rating?.rating} (${rating?.count})`}</span>
        </div>
      </div>

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
}

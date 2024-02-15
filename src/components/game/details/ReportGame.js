import React, { useState } from "react";
import moment from "moment";
import "moment-timezone";
import { saveGameReport } from "../../../actions";
import { getLocation } from "../../utils";

const ReportGame = ({ game, onDismiss, isSignedIn, user }) => {
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const onChangeReason = (e) => {
    const value = e.target.value;
    if (value !== "OT") {
      setComment("");
    }
    setReason(e.target.value);
    setError("");
  };

  const submitReportGame = async (e) => {
    if (reason === "") {
      return setError("Please select reason.");
    }
    if (reason === "OT" && comment === "") {
      return setError("Please enter comment.");
    }
    const { ip, city, timezone } = await getLocation();
    const data = {
      reason,
      userId: isSignedIn ? user._id : null,
      userIp: ip,
      deviceId: 1,
      otherComment: comment,
      userCity: city,
      gameId: game._id,
      gameUrl: game.slug,
      userZoneName: timezone,
      userZoneCurrentTime: moment().tz(timezone).format("YYYY-MM-DD hh:mm:ss"),
    };

    await saveGameReport(data);
    onDismiss(e);
  };

  return (
    <ul>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="NS"
            onChange={onChangeReason}
          />
          It’s not starting
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="SW"
            onChange={onChangeReason}
          />
          It stopped working
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="DL"
            onChange={onChangeReason}
          />
          Delayed loading
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="NR"
            onChange={onChangeReason}
          />
          Game not responding
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="NC"
            onChange={onChangeReason}
          />
          Instructions not clear
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="reason"
            value="OT"
            onChange={onChangeReason}
          />
          Other
        </label>
        {error && reason === "" && (
          <span style={{ color: "red" }}>{error}</span>
        )}
      </li>
      {reason === "OT" && (
        <li>
          {error && !comment && <span style={{ color: "red" }}>{error}</span>}
          <div className="field">
            <textarea
              name="comment"
              placeholder="Enter other issues/problems"
              cols="46"
              rows="2"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              disabled={reason === "OT" ? false : true}
            ></textarea>
            <label htmlFor="other">Enter other issues/problems</label>
          </div>
        </li>
      )}
      <li>
        <label>
          <input
            type="button"
            className="btn-blue"
            value="Send Feedback"
            onClick={submitReportGame}
          />
        </label>
      </li>
    </ul>
  );
};

export default ReportGame;

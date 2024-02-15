"use client";
import parse from "html-react-parser";
// import Rating from "./Rating";
import Rating from "@/components/common/Rating";
import GameModal from "@/components/modal/index";
import RadioButton from "@/components/common/RadioButton";
import { useState } from "react";
import TextArea from "@/components/common/TextArea";
import Button from "@/components/common/Button";
import { validateRadioBtn, validateForm } from "@/utils/Validation";
import { reportsGame } from "@/api/game";
import { getLocation } from "@/utils/Location";
import useDevice from "@/hooks/useDevice";
import styles from "../../../components/ui/tab/tab.module.css";
import ExpanCollapseWidget from "@/components/common/ExpanCollpase/ExpanCollapseWidget";

const About = ({
  game = {},
  rating,
  isSignedIn,
  auth,
  reportGame = () => { },
  closeModal = () => { },
  showModal = false,
}) => {
  if (!game) {
    return <div>...</div>;
  }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tErr, setTError] = useState({});
  const [state, setState] = useState({
    reason: "",
    problems: "",
  });

  const [mobile] = useDevice();

  const reportList = [
    { label: "It’s not starting", id: "1", value: "NS" },
    { label: "It stopped working", id: "2", value: "SW" },
    { label: "Delayed loading", id: "3", value: "DL" },
    { label: "Game not responding", id: "4", value: "NR" },
    { label: "Instructions not clear", id: "5", value: "NC" },
    { label: "Other", id: "6", value: "OT" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  async function sumbitFeedback(e) {
    e.preventDefault();
    const { reason, problems } = state;
    const userInfo = getLocation();
    const radioErr = validateRadioBtn("reason", "Please select reason");
    const txtErr = validateForm({ problems });
    const { _id, slug } = game;
    const params = {
      deviceId: mobile ? 1 : 0,
      gameId: _id,
      gameUrl: slug,
      otherComment: problems,
      reason: reason,
      userCity: userInfo.city,
      userId: null,
      userZoneCurrentTime: new Date(),
      userZoneName: userInfo.timezone,
    };
    if (radioErr == "" && Object.keys(txtErr).length === 0) {
      const resp = await reportsGame(params);
      if (resp) {
        setState({});
        if (typeof closeModal === "function") {
          closeModal(e);
        }
      }
    } else {
      setError(radioErr);
      setTError(txtErr);
    }
  }

  function content() {
    return (
      reportList &&
      reportList.map((item, i) => (
        <RadioButton
          key={item.id}
          value={item.value}
          name="reason"
          onChange={handleChange}
          id={item.id}
          error={error}
          checked={reason == item.value ? true : false}
        >
          {item.label}
        </RadioButton>
      ))
    );
  }

  const { reason, problems } = state;
  return (
    <>
      <div className={styles.tabOneContent}>
        <div className={styles.headingAndWidgets}>
          <div className={styles.gameOtherWidgets}>
            <Rating game={game} auth={auth} styles={styles} rating={rating} />
            <div className={styles.reportWidget} onClick={reportGame}>
              <img
                width="20"
                height="20"
                src="https://www.atmegame.com/img/icon-report.svg"
                alt="Report"
              />
              Report
            </div>
          </div>
          <h1>{game.name} Game </h1>
        </div>
        <div itemProp="description" className={styles.description}>
          <ExpanCollapseWidget
            initHeight={mobile ? 120 : 103}
            showViewBtn = {game.description?.length > 120}
          >
            {game && game.description ? parse(game.description) : null}
          </ExpanCollapseWidget>
        </div>
      </div>
      {showModal ? (
        <div className="">
          <GameModal
            onDismiss={closeModal}
            heading="Report Game"
            msg="What kind of problem have you encountered?"
          >
            {content()}
            {reason == "OT" && (
              <TextArea
                name="problems"
                value={problems}
                onChange={handleChange}
                validation={["required"]}
                error={tErr}
                cls="aboutTextArea"
              />
            )}
            <Button
              label="Send Feedback"
              onClick={sumbitFeedback}
              loading={loading}
            />
          </GameModal>
        </div>
      ) : null}
    </>
  );
};

export default About;

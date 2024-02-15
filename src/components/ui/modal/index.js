import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

const GameModal = (props) => {
  return ReactDOM.createPortal(
    <div
      className={style.popupOverlay}
      style={{ backgroundColor: "#000" }}
      onClick={props.onDismiss}
    >
      <div
        className=""
        style={{ backgroundColor: "black" }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default GameModal;

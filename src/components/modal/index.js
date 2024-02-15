import React from "react";
import { createPortal } from "react-dom";
import modelStyle from "./modal.module.css";

const GameModal = ({
  onDismiss,
  children,
  overlayCls = "",
  modalCls = "",
  heading = "",
  msg = "",
  closeIcon = true,
  extraStyles,
  renderedInsideBody = true,
  parentCls = ""
}) => {

  const style = { ...extraStyles, ...modelStyle }

  if (renderedInsideBody) {
    return createPortal(
      <div id="modal" className={`${style[parentCls]}`}>
        <div className={`${style.popupOverlay} ${style[overlayCls]}`} onClick={onDismiss} >
          <div className={`${style.popupContent} ${style[modalCls]}`} onClick={(e) => e.stopPropagation()}>
            {closeIcon && <span onClick={onDismiss} className={style.close}>&times;</span>}
            {heading && <h3>{heading}</h3>}
            {msg && <p>{msg}</p>}
            {children}
          </div>
        </div>
      </div>,
      document.body
    );
  } else return (
    <div>
      <div className={`${style.popupOverlay} ${style[overlayCls]}`} onClick={onDismiss} >
        <div className={`${style.popupContent} ${style[modalCls]}`} onClick={(e) => e.stopPropagation()}>
          {closeIcon && <span onClick={onDismiss} className={style.close}>&times;</span>}
          {heading && <h3>{heading}</h3>}
          {msg && <p>{msg}</p>}
          {children}
        </div>
      </div>
    </div>
  )
};

export default GameModal;

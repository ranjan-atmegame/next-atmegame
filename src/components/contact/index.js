"use client";
import { useState } from "react";
import Form from "./Form";
import FormInfo from "./FormInfo";
import styles from "./contactus.module.css";

export default function Contact() {
  const [topic, setTopic] = useState("generalquery");

  function updateImageOnTopic(curTopic) {
    setTopic(curTopic);
  }

  return (
    <div className={styles.mainLogin}>
      <div className={styles.container}>
        <div className={styles.formPage}>
          <div className={styles.leftBox}>
            <FormInfo topic={topic} />
          </div>
          <div className={styles.rightBox}>
            <Form handleTopicImgCB={updateImageOnTopic} />
          </div>
        </div>
      </div>
    </div>
  );
}

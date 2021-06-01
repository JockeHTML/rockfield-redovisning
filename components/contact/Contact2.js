import React from "react";
import styles from "./Contact2.module.css";
import Map from "./Map";
import Content from "./Content";

function Contact2(props) {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.border}>
        <h4>ROCKFIELD REDOVISNING</h4>
        <h1>Kontakta Oss Idag</h1>
      </div>
      <Content />
      <Map />
    </div>
  );
}

export default Contact2;

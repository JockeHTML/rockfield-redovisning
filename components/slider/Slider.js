import React from "react";
import classes from "./slider.module.css";
import BorderButton from "../ui/BorderButton";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <h2>Boka ett möte med oss idag</h2>
      <p>
        Om du vill förbättra eller vad du har för frågor kring din ekonomi,
        kontakta oss idag
      </p>
      <BorderButton>Kontakt</BorderButton>
    </div>
  );
};

export default Slider;

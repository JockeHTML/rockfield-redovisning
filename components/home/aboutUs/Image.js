import React from "react";
import classes from "./image.module.css";

const Image = () => {
  return (
    <div className={classes.img}>
      <img src="./images/advice.jpg" alt="personlig service" />
    </div>
  );
};

export default Image;

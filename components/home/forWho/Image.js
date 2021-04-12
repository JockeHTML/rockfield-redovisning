import React from "react";
import classes from "./image.module.css";

const Image = () => {
  return (
    <div className={classes.img}>
      <img src="./images/who.jpg" alt="privat och företag" />
    </div>
  );
};

export default Image;

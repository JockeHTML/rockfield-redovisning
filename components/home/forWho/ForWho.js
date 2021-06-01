import React from "react";
import classes from "./forWho.module.css";
import Image from "./Image";
import Text from "./Text";

const forWho = () => {
  return (
    <div className={classes.forWho}>
      <span className={classes.title}>
        <h4>ALLT INOM REDOVISNING</h4>
        <h1>Vi Hjälper Dig</h1>
      </span>
      <div className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default forWho;

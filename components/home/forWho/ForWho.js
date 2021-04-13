import React from "react";
import classes from "./forWho.module.css";
import Image from "./Image";
import Text from "./Text";

const forWho = () => {
  return (
    <div className={classes.forWho}>
      <span className={classes.title}>
        <h1>Vi hjälper dig</h1>
      </span>
      <div className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default forWho;
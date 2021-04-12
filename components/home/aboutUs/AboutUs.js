import React from "react";
import classes from "./aboutUs.module.css";
import Image from "./Image";
import Text from "./Text";

const AboutUs = () => {
  return (
    <div className={classes.forWho}>
      <div className={classes.content}>
        <Text />
        <Image />
      </div>
    </div>
  );
};

export default AboutUs;

import React, { useEffect } from "react";
import classes from "./aboutUs.module.css";
import Image from "./Image";
import Text from "./Text";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default AboutUs;

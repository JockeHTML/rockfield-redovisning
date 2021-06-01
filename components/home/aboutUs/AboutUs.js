import React, { useEffect } from "react";
import classes from "./aboutUs.module.css";
import Image from "./Image";
import Text from "./Text";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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

import React, { useEffect } from "react";
import classes from "./aboutUs.module.css";
import Image from "./Image";
import Text from "./Text";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={classes.aboutUs}>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className={classes.content}
      >
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default AboutUs;

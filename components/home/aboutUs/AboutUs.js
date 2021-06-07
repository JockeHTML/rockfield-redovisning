import React, { useEffect } from "react";
import classes from "./aboutUs.module.css";
import Image from "./Image";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.aboutUs}>
      <div
        data-aos="fade-in"
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

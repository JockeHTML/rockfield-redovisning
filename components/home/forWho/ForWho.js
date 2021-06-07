import React, { useEffect } from "react";
import classes from "./forWho.module.css";
import Image from "./Image";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const forWho = () => {
  useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (
    <div className={classes.forWho}>
      <span className={classes.title}>
        <h4>ALLT INOM REDOVISNING</h4>
        <h1>Vi hjälper dig</h1>
      </span>
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

export default forWho;

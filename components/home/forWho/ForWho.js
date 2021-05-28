import React, { useEffect } from "react";
import classes from "./forWho.module.css";
import Image from "./Image";
import Text from "./Text";
import Aos from "aos";
import "aos/dist/aos.css";

const forWho = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.forWho}>
      <span className={classes.title}>
        <h4>REDOVISNING</h4>
        <h1>Vi hjälper dig</h1>
      </span>
      <div data-aos="fade-up" className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default forWho;

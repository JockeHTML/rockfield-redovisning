import React from "react";
import About from "../../components/about/About";
import classes from "../contact/border.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={classes.border}>
        <h1>Om oss</h1>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;

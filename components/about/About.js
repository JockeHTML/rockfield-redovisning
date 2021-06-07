import React from "react";
import classes from "./about.module.css";
import Content from "./Content";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.title}>
        <h4>ROCKFIELD REDOVISNING</h4>
        <h1>Lite om oss</h1>
      </div>
      <Content />
    </div>
  );
};

export default About;

import React from "react";
import classes from "./about.module.css";
import Content from "./Content";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>Om Rockfield Redovisning</h1>
      <Content />
    </div>
  );
};

export default About;

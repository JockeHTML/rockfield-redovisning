import React from "react";
import classes from "./gdpr.module.css";
import Content from "./Content";

const Gdpr = () => {
  return (
    <div className={classes.gdpr}>
      <div className={classes.title}>
        <h4>ROCKFIELD REDOVISNING</h4>
        <h1>Din säkerhet</h1>
      </div>
      <Content />
    </div>
  );
};

export default Gdpr;

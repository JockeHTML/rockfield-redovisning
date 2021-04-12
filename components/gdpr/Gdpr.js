import React from "react";
import classes from "./gdpr.module.css";
import Content from "./Content";

const Gdpr = () => {
  return (
    <div className={classes.gdpr}>
      <h1>Dataskyddsförordningen - GDPR</h1>
      <Content />
    </div>
  );
};

export default Gdpr;

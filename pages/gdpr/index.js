import React from "react";
import Gdpr from "../../components/gdpr/Gdpr";
import classes from "../contact/border.module.css";

const GdprPage = () => {
  return (
    <div>
      <div className={classes.border}>
        <h1>GDPR</h1>
      </div>
      <Gdpr />
    </div>
  );
};

export default GdprPage;

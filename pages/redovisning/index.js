import React from "react";
import Services from "../../components/ui/Services";
import classes from "./redovisning.module.css";
import { redovisningData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <div className={classes.border}>
        <h1>TJÄNSTER</h1>
      </div>
      <div className={classes.title}>
        <h4>ROCKFIELD REDOVISNING</h4>
        <h1>Vi hjälper dig med</h1>
      </div>
      {redovisningData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

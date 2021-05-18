import React from "react";
import Services from "../../components/ui/Services";
import classes from "./betalningsuppdrag.module.css";
import { momsredovisningData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <div className={classes.border}>
        <h1>Betalningsuppdrag</h1>
      </div>
      {momsredovisningData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

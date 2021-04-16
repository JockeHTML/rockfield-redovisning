import React from "react";
import Services from "../../components/ui/Services";
import classes from "../betalningsuppdrag/betalningsuppdrag.module.css";
import { loneadministrationData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Tjänster</h1>
      {loneadministrationData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

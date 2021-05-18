import React from "react";
import Services from "../../components/ui/Services";
import classes from "../betalningsuppdrag/betalningsuppdrag.module.css";
import { affarsradgivningData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <div className={classes.border}>
        <h1>Affärsrådgivning</h1>
      </div>
      {affarsradgivningData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

import React from "react";
import Services from "../../components/ui/Services";
import classes from "../momsredovisning/momsredovisning.module.css";
import { affarsradgivningData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Affärsrådgivning</h1>
      {affarsradgivningData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

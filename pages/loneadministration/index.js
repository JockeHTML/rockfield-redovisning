import React from "react";
import Services from "../../components/ui/Services";
import classes from "../momsredovisning/momsredovisning.module.css";
import { loneadministrationData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Löneadministration</h1>
      {loneadministrationData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

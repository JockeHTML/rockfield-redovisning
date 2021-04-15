import React from "react";
import Services from "../../components/ui/Services";
import classes from "./momsredovisning.module.css";
import { momsredovisningData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Momsredovisning </h1>
      {momsredovisningData.map((data, index) => {
        return <Services key={index} {...data} />;
      })}
    </div>
  );
};

export default index;

import React from "react";
import Services from "../../components/ui/Services";
import classes from "./momsredovisning.module.css";
import { loneadministrationData } from "../../Data";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Momsredovisning </h1>
      {loneadministrationData.map((data, index) => {
        const { title, text, service1, service2, service3, service4 } = data;
        return <Services {...data} />;
      })}
    </div>
  );
};

export default index;

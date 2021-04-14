import React from "react";
import Services from "../../components/ui/Services";
import classes from "./momsredovisning.module.css";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Momsredovisning </h1>
      <Services />
    </div>
  );
};

export default index;

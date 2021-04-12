import React from "react";
import Services from "../../components/ui/Services";
import classes from "../revision/revision.module.css";

const index = () => {
  return (
    <div className={classes.revision}>
      <h1>Redovisning</h1>
      <Services />
    </div>
  );
};

export default index;

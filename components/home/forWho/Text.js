import React from "react";
import classes from "./text.module.css";
import Button from "../../ui/Button";
import BorderButton from "../../ui/BorderButton";

const Text = () => {
  return (
    <div className={classes.text}>
      <h2>Företag & Privatperson</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
        dignissimos ratione! Vero sapiente quibusdam eum quos voluptatem natus,
        corporis, quo iure error illo deleniti dolorum nulla enim voluptas optio
        nihil!
      </p>
      <div className={classes.buttons}>
        <Button>Läs mer</Button>
        <BorderButton>Kontakt</BorderButton>
      </div>
    </div>
  );
};

export default Text;

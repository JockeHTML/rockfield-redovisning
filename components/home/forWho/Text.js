import React from "react";
import classes from "./text.module.css";
import Button from "../../ui/Button";
import BorderButton from "../../ui/BorderButton";

const Text = () => {
  return (
    <div className={classes.text}>
      <h2>Våra kunder</h2>
      <p>
        Vi ser framemot att få jobba med er oavsett bolagsform eller storlek. Se
        gärna över våra tjänster här på hemsidan eller kontakta oss direkt så
        kan vi se hur vi kan hjälpa er med just eran situation.
      </p>
      <div className={classes.buttons}>
        <Button>Läs mer</Button>
        <BorderButton>Kontakt</BorderButton>
      </div>
    </div>
  );
};

export default Text;

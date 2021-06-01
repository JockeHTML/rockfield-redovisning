import React, { useEffect } from "react";
import classes from "./text.module.css";
import Button from "../../ui/Button";
import BorderButton from "../../ui/BorderButton";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.text}>
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

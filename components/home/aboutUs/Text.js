import React, { useEffect } from "react";
import classes from "./text.module.css";
import Button from "../../ui/Button";
import BorderButton from "../../ui/BorderButton";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.text}>
      <h2>Personlig service</h2>
      <p>
        Vi strävar mot ett nära samarbete med våra kunder där vi får en tydlig
        bild över deras verksamhet och behov för att kunna hitta de bästa
        individuella lösningarna för varje enskild kund.
      </p>
      <div className={classes.buttons}>
        <Button>Läs mer</Button>
        <BorderButton>Kontakt</BorderButton>
      </div>
    </div>
  );
};

export default Text;

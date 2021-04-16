import React from "react";
import classes from "./content.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";

const Content = () => {
  return (
    <div className={classes.gdpr}>
      <div className={classes.img}>
        <img src="./images/GDPR-amico.png" alt="Peter och Niklas" />
      </div>
      <div className={classes.text}>
        <h2>Skydd och integritet vid behandling av personuppgifter</h2>
        <p>
          För oss är skyddet av personlig integritet viktigt. När vår byrå
          hjälper våra kunder med t.ex. löner, redovisning, skattefrågor och
          annan rådgivning hanterar vi personuppgifter för kundföretagets
          räkning. I revisions‐ och andra granskningsuppdrag kommer vi
          självständigt att hantera personuppgifter. Oberoende av uppdrag
          behöver vi hantera personuppgifter för vår egen administration och
          uppfylla olika regler, t.ex. för att utvärdera våra uppdrag.
        </p>

        <br />

        <p>
          <a style={{ color: "var(--lightblue)" }} href="#">
            Klicka här
          </a>{" "}
          för att läsa om hur vi hanterar personuppgifter.
        </p>
        <div className={classes.buttons}>
          <Button>Läs mer</Button>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
    </div>
  );
};

export default Content;

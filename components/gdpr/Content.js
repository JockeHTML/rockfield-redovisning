import React, { useEffect } from "react";
import classes from "./content.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <img src="./images/gdpr.jpg" alt="GDPR bild" />
      </div>
      <div className={classes.text}>
        <h2>Behandling av personuppgifter</h2>
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
          <a
            style={{ color: "var(--color)" }}
            target="_blank"
            href="https://1drv.ms/w/s!Ag3FH929knOPcRTFCWPGCW_ukc0?e=rA6cr6"
          >
            Klicka här
          </a>{" "}
          för att läsa om hur vi hanterar personuppgifter.
        </p>
        <div className={classes.buttons}>
          <Button>Om oss</Button>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
    </div>
  );
};

export default Content;

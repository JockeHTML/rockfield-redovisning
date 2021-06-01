import React from "react";
import ProductButton from "../ui/ProductButton";
import BorderButton from "../ui/BorderButton";
import classes from "./content.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <img src="./images/staff.jpg" alt="Peter och Niklas" />
      </div>
      <div className={classes.text}>
        <h2>Vår historia</h2>
        <p>
          Rockfield Redovisning är en redovisningsbyrå som startade upp i början
          på 2020, men hos oss finns det många års erfarenhet inom
          redovisningsbranschen. Vi valde att starta vår byrå på grund av vi såg
          ett stort behov för företag att få någon att vända sig till som de
          kände sig trygg med och kunde lita på. Vi fokuserar därför på att
          jobba fram ett förtroende hos våra kunder och ett långsiktigt
          samarbete där vi kan utvecklas tillsammans.
        </p>
        <br />
        <p>
          Vi befinner oss i Sundsvall men har även kunder i andra orter i
          Sverige, vilket har fungerat väldigt bra då vi har möjlighet att göra
          stora delar av arbetet digitalt.
        </p>

        <div className={classes.buttons}>
          <ProductButton>Tjänster</ProductButton>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
    </div>
  );
};

export default Content;

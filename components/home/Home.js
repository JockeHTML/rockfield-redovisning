import React from "react";
import classes from "./home.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.text}>
        <h1>Specialister På Allt Inom Redovisning</h1>
        <p>
          Vi på Rockfield Redovisning har många års erfarenhet inom
          redovisningsbranschen och ser fram emot att få hjälpa dig och ditt
          företag. Vi tror på en personlig och långsiktig relation med våra
          kunder och ser framemot att få hjälpa just er med era behov så ni kan
          fokusera på verksamheten och det ni är bra på.
        </p>
        <div className={classes.buttons}>
          <Button>Om oss</Button>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
      <img src="./images/workplace.jpg" alt="" />
    </div>
  );
};

export default HomePage;

/*  <div className={classes.image}>
          <img src="./images/taxes.jpg" alt="Redovisningstjänster" />
        </div>*/

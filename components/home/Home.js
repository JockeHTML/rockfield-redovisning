import React from "react";
import classes from "./home.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Vi är specialister på allt inom redovisningstjänster</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            aspernatur doloribus aliquam? Sed officiis doloremque cumque
            laboriosam facere dolorem, expedita illum, minima, tempora iure
            perferendis dolor consequatur in nam. Dicta?
          </p>
          <div className={classes.buttons}>
            <Button>Läs mer</Button>
            <BorderButton>Kontakt</BorderButton>
          </div>
        </div>
        <div className={classes.image}>
          <img src="./images/Invoice-amico.png" alt="Redovisningstjänster" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

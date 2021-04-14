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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          aliquid at excepturi porro voluptatem praesentium quidem dicta fugiat!
          Consequuntur rerum illum magnam, voluptatum repudiandae eum ea dolore
          quod doloribus beatae? Minima quae unde nihil placeat. Cum vel earum
          reprehenderit animi.
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

import React from "react";
import classes from "./services.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";
import Emailjs from "../contact/Emailjs";

const Services = ({ title, text }) => {
  return (
    <div className={classes.services}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>

        <div className={classes.buttons}>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Services;

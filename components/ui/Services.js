import React from "react";
import classes from "./services.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";
import Emailjs from "../contact/Emailjs";

const Services = ({ title, text, service1, service2, service3, service4 }) => {
  return (
    <div className={classes.services}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={classes.list}>
          <ul>
            <li>
              <p>{service1}</p>
            </li>
            <li>
              <p>{service2}</p>
            </li>
            <li>
              <p>{service3}</p>
            </li>
            <li>
              <p>{service4}</p>
            </li>
          </ul>
        </div>
        <div className={classes.buttons}>
          <Button>Läs mer</Button>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Services;

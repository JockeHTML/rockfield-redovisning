import React from "react";
import classes from "./services.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";
import Emailjs from "../contact/Emailjs";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.text}>
        <h2>Tjänster vi erbjuder inom Revision</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          quibusdam incidunt dignissimos ea commodi dolorum perferendis iste
          rerum magni quisquam!
        </p>
        <div className={classes.list}>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
        <div className={classes.buttons}>
          <Button>Kontakt</Button>
          <BorderButton>Hem</BorderButton>
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Services;

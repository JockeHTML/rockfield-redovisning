import React, { useEffect } from "react";
import classes from "./services.module.css";
import Button from "../ui/Button";
import BorderButton from "../ui/BorderButton";
import Aos from "aos";
import "aos/dist/aos.css";
import Emailjs from "../contact/Emailjs";

const Services = ({ title, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.services}>
      <div data-aos="fade-up" className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>

        <div className={classes.buttons}>
          <Button>Om oss</Button>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Services;

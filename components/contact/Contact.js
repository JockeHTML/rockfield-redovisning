import React from "react";
import Content from "./Content";
import classes from "./contact.module.css";
import Map from "./Map";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h1>Kontakta oss</h1>
      <Content />
      <Map />
    </div>
  );
};

export default Contact;

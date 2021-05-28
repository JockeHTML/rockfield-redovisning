import React from "react";
import Contact from "../../components/contact/Contact";
import classes from "./border.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={classes.border}>
        <h1>KONTAKT</h1>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;

import React from "react";
import Contact2 from "../../components/contact/Contact2";
import classes from "./border.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={classes.border}>
        <h1>KONTAKT</h1>
      </div>
      <Contact2 />
    </div>
  );
};

export default ContactPage;

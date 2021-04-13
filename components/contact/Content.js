import React from "react";
import classes from "./content.module.css";
import { contactData } from "../../Data";
import Emailjs from "./Emailjs";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <h2>Höra av dig till oss om du har frågor eller funderingar</h2>
        <p>
          Skicka ett meddelande via formuläret här intill alternativt kontakta
          någon av våra avdelningar eller medarbetare nedan.
        </p>
        <div className={classes.icons}>
          {contactData.map((contact, index) => {
            const { text, icon, src } = contact;
            return (
              <div className={classes.iconsContent} key={index}>
                <span>
                  <a href={src}>
                    <i className={icon}></i>
                  </a>
                </span>

                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Content;

import React from "react";
import classes from "./content.module.css";
import { contactData } from "../../Data";
import Emailjs from "./Emailjs";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <h3>Har du frågor eller funderingar?</h3>
        <p>
          Skicka ett meddelande via formuläret här intill alternativt kontakta
          oss via telefon eller e-post.
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
        <div className={classes.address}>
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <p>Ponnyvägen 6, 857 50 Sundsvall</p>
        </div>
      </div>
      <Emailjs />
    </div>
  );
};

export default Content;

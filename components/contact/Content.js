import React, { useEffect } from "react";
import classes from "./content.module.css";
import { contactData } from "../../Data";
import Emailjs from "./Emailjs";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <div className={classes.title}>
          <h2>Har du funderingar?</h2>
          <p>
            Skicka ett meddelande via formuläret här intill så återkopplar vi
            till dig, alternativt kontakta oss via telefon eller e-post.
          </p>
        </div>
        <div className={classes.icons}>
          {contactData.map((contact, index) => {
            const { text, icon, src } = contact;
            return (
              <div className={classes.iconsContent} key={index}>
                <span>
                  <a aria-label="e-post, telefon, address" href={src}>
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

import React, { useEffect } from "react";
import classes from "./content.module.css";
import { contactData } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import Emailjs from "./Emailjs";

const Content = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.content}>
      <div data-aos="fade-up" className={classes.text}>
        <h2>Har du frågor eller funderingar?</h2>
        <p>
          Skicka ett meddelande via formuläret här intill så återkopplar vi till
          dig, alternativt kontakta oss via telefon eller e-post.
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

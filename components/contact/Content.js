import React, { useEffect } from "react";
import classes from "./content.module.css";
import { contactData } from "../../Data";
import Emailjs from "./Emailjs";
import Aos from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.content}>
      <div className={classes.text}>
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
    </div>
  );
};

export default Content;

import React from "react";
import classes from "./footer.module.css";
import { contactData, navigationData } from "../../../Data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        <h3>Rockfield Redovisning</h3>
        <ul>
          {" "}
          <p>Din klippa inom redovisningstjänster</p>
        </ul>
      </div>
      <div className={classes.contact}>
        <h3>Kontakt</h3>
        <ul>
          {contactData.map((data, index) => {
            const { text, mail } = data;
            return (
              <li key={index}>
                <p>{text}</p>
                <p>{mail}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.links}>
        <h3>Länkar</h3>
        <ul>
          {navigationData.map((data, index) => {
            const { title, link } = data;
            return (
              <li key={index}>
                <Link href={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.social}>
        <h3>Sociala medier</h3>
        <ul>
          <li>
            <a
              alt="facebook"
              href="https://www.facebook.com/rockfieldredovisning"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              alt="instagram"
              href="https://www.instagram.com/explore/locations/106091457623831/Rockfield%20Redovisning%20AB/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
/*<a href="https://www.freepik.com/vectors/security">
            Security vector created by stories - www.freepik.com
          </a>
          <a href="https://www.freepik.com/vectors/work">
            Work vector created by stories - www.freepik.com
          </a>*/
